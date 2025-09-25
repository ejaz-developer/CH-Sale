import mongoose from 'mongoose';
import { getAuth } from '@clerk/express';
import Product from '../models/products.models.js';
import Category from '../models/categories.models.js';
import Inventory from '../models/inventory.models.js';
import Store from '../models/store.models.js';
import User from '../models/user.models.js';

const parseBoolean = (value) => {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return ['true', '1', 'yes'].includes(value.toLowerCase());
  }
  return Boolean(value);
};

const getAuthenticatedUser = async (req) => {
  const auth = req.auth ?? getAuth(req);
  const userId = auth?.userId;

  if (!userId) {
    const error = new Error('Unauthorized');
    error.status = 401;
    throw error;
  }

  const user = await User.findOne({ clerkId: userId });

  if (!user) {
    const error = new Error('User profile not found');
    error.status = 404;
    throw error;
  }

  return user;
};

const assertStoreAccess = async (user, storeId) => {
  const resolvedStoreId = storeId?.toString();

  if (!resolvedStoreId || !mongoose.Types.ObjectId.isValid(resolvedStoreId)) {
    const error = new Error('A valid storeId is required');
    error.status = 400;
    throw error;
  }

  const store = await Store.findById(resolvedStoreId);

  if (!store) {
    const error = new Error('Store not found');
    error.status = 404;
    throw error;
  }

  const isOwner = store.owner?.equals(user._id);
  const isAdmin = user.role === 'admin';
  const hasMembership = user.stores?.some((membership) => membership.store?.equals(store._id));
  const matchesDefaultStore = user.defaultStore?.equals?.(store._id);

  if (!isOwner && !isAdmin && !hasMembership && !matchesDefaultStore) {
    const error = new Error('You do not have access to this store');
    error.status = 403;
    throw error;
  }

  return store;
};

const handleControllerError = (res, error) => {
  if (error?.status) {
    return res.status(error.status).json({ success: false, message: error.message });
  }

  console.error('Product controller error:', error);
  return res.status(500).json({ success: false, message: 'Internal server error' });
};

export const createProduct = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const storeId = req.body.storeId ?? user.defaultStore?.toString();
    const store = await assertStoreAccess(user, storeId);

    const requiredFields = ['name', 'price', 'currency'];
    const missingField = requiredFields.find(
      (field) => req.body[field] === undefined || req.body[field] === null,
    );

    if (missingField) {
      return res.status(400).json({ success: false, message: `${missingField} is required` });
    }

    const {
      name,
      description,
      price,
      currency,
      categoryId,
      sku,
      barcode,
      unit,
      costPrice,
      tax,
      taxInclusive,
      stock,
      reorderPoint,
      maxPrice,
      minPrice,
      allowDiscount,
      attributes,
      images,
      isActive,
    } = req.body;

    let category;
    if (categoryId) {
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({ success: false, message: 'Invalid categoryId' });
      }
      category = await Category.findOne({ _id: categoryId, store: store._id });
      if (!category) {
        return res
          .status(404)
          .json({ success: false, message: 'Category not found for this store' });
      }
    }

    const productPayload = {
      store: store._id,
      owner: store.owner ?? user._id,
      name: name.trim(),
      description,
      price,
      currency: currency.trim(),
      category: category?._id,
      sku: sku?.trim(),
      barcode: barcode?.trim(),
      unit,
      costPrice,
      tax,
      taxInclusive,
      stock: typeof stock === 'number' ? stock : 0,
      reorderPoint,
      maxPrice,
      minPrice,
      allowDiscount,
      attributes,
      images,
      isActive: isActive !== undefined ? isActive : true,
    };

    const product = await Product.create(productPayload);

    const inventoryUpdate = {
      store: store._id,
      product: product._id,
      quantityOnHand: typeof stock === 'number' ? stock : 0,
      reorderPoint: typeof reorderPoint === 'number' ? reorderPoint : 0,
    };

    await Inventory.findOneAndUpdate(
      { store: store._id, product: product._id },
      { $set: inventoryUpdate },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );

    await product.populate([
      { path: 'category', select: 'name description' },
      { path: 'store', select: 'name code' },
    ]);

    return res.status(201).json({ success: true, data: product });
  } catch (error) {
    return handleControllerError(res, error);
  }
};

export const getProducts = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const storeId = req.query.storeId ?? user.defaultStore?.toString();
    const store = await assertStoreAccess(user, storeId);

    const {
      search,
      categoryId,
      isActive,
      includeInactive,
      minPrice,
      maxPrice,
      limit = 50,
      page = 1,
    } = req.query;

    const filters = { store: store._id };

    if (categoryId && mongoose.Types.ObjectId.isValid(categoryId)) {
      filters.category = categoryId;
    }

    const includeInactiveFlag = parseBoolean(includeInactive);
    const isActiveFlag = isActive !== undefined ? parseBoolean(isActive) : undefined;

    if (isActiveFlag !== undefined) {
      filters.isActive = isActiveFlag;
    } else if (!includeInactiveFlag) {
      filters.isActive = true;
    }

    if (search) {
      const regex = new RegExp(search.trim(), 'i');
      filters.$or = [{ name: regex }, { sku: regex }, { barcode: regex }];
    }

    const priceFilters = [];
    if (minPrice !== undefined) {
      priceFilters.push({ price: { $gte: Number(minPrice) } });
    }
    if (maxPrice !== undefined) {
      priceFilters.push({ price: { $lte: Number(maxPrice) } });
    }
    if (priceFilters.length === 1) {
      Object.assign(filters, priceFilters[0]);
    } else if (priceFilters.length === 2) {
      filters.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    }

    const parsedLimit = Math.min(Number(limit) || 50, 100);
    const parsedPage = Math.max(Number(page) || 1, 1);
    const skip = (parsedPage - 1) * parsedLimit;

    const [products, total] = await Promise.all([
      Product.find(filters)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parsedLimit)
        .populate([{ path: 'category', select: 'name' }]),
      Product.countDocuments(filters),
    ]);

    return res.status(200).json({
      success: true,
      data: products,
      pagination: {
        total,
        page: parsedPage,
        limit: parsedLimit,
        pages: Math.ceil(total / parsedLimit) || 1,
      },
    });
  } catch (error) {
    return handleControllerError(res, error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid productId' });
    }

    const product = await Product.findById(productId).populate([
      { path: 'category', select: 'name description' },
      { path: 'store', select: 'name code' },
    ]);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    await assertStoreAccess(user, product.store);

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return handleControllerError(res, error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid productId' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const store = await assertStoreAccess(user, product.store);

    if (req.body.categoryId !== undefined) {
      const { categoryId } = req.body;
      if (categoryId === null || categoryId === '') {
        product.category = undefined;
      } else {
        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
          return res.status(400).json({ success: false, message: 'Invalid categoryId' });
        }
        const category = await Category.findOne({ _id: categoryId, store: store._id });
        if (!category) {
          return res
            .status(404)
            .json({ success: false, message: 'Category not found for this store' });
        }
        product.category = category._id;
      }
    }

    const updatableFields = [
      'name',
      'description',
      'price',
      'currency',
      'sku',
      'barcode',
      'unit',
      'costPrice',
      'tax',
      'taxInclusive',
      'stock',
      'reorderPoint',
      'maxPrice',
      'minPrice',
      'allowDiscount',
      'attributes',
      'images',
      'isActive',
    ];

    updatableFields.forEach((field) => {
      if (field in req.body) {
        product[field] = req.body[field];
      }
    });

    if (product.name) {
      product.name = product.name.trim();
    }
    if (product.currency) {
      product.currency = product.currency.trim();
    }
    if (product.sku) {
      product.sku = product.sku.trim();
    }
    if (product.barcode) {
      product.barcode = product.barcode.trim();
    }

    await product.save();

    const inventoryUpdate = {};
    if (req.body.stock !== undefined && typeof req.body.stock === 'number') {
      inventoryUpdate.quantityOnHand = req.body.stock;
    }
    if (req.body.reorderPoint !== undefined && typeof req.body.reorderPoint === 'number') {
      inventoryUpdate.reorderPoint = req.body.reorderPoint;
    }

    if (Object.keys(inventoryUpdate).length > 0) {
      await Inventory.findOneAndUpdate(
        { store: store._id, product: product._id },
        { $set: inventoryUpdate },
        { new: true, upsert: true, setDefaultsOnInsert: true },
      );
    }

    await product.populate([
      { path: 'category', select: 'name description' },
      { path: 'store', select: 'name code' },
    ]);

    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return handleControllerError(res, error);
  }
};

export const archiveProduct = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid productId' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    await assertStoreAccess(user, product.store);

    product.isActive = false;
    await product.save();

    return res.status(200).json({ success: true, data: product, message: 'Product archived' });
  } catch (error) {
    return handleControllerError(res, error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const user = await getAuthenticatedUser(req);
    const { productId } = req.params;
    const { force } = req.query;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: 'Invalid productId' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const store = await assertStoreAccess(user, product.store);

    const forceDelete = parseBoolean(force);

    if (forceDelete) {
      await Promise.all([
        Inventory.deleteOne({ store: store._id, product: product._id }),
        Product.deleteOne({ _id: product._id }),
      ]);
      return res.status(200).json({ success: true, message: 'Product permanently deleted' });
    }

    product.isActive = false;
    await product.save();

    return res.status(200).json({
      success: true,
      data: product,
      message: 'Product archived. Pass force=true to delete permanently.',
    });
  } catch (error) {
    return handleControllerError(res, error);
  }
};
