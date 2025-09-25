import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: { type: String, required: true, trim: true },
    description: { type: String },
    sku: { type: String, trim: true },
    barcode: { type: String, trim: true },
    unit: { type: String, default: 'unit' },
    price: { type: Number, required: true },
    costPrice: { type: Number, default: 0 },
    currency: { type: String, required: true },
    tax: { type: Number, default: 0 },
    taxInclusive: { type: Boolean, default: false },
    stock: { type: Number, default: 0 },
    reorderPoint: { type: Number, default: 0 },
    maxPrice: { type: Number },
    minPrice: { type: Number },
    allowDiscount: { type: Boolean, default: true },
    attributes: { type: Map, of: String },
    images: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

productSchema.index({ store: 1, name: 1 }, { unique: true });
productSchema.index({ store: 1, sku: 1 }, { unique: true, sparse: true });
productSchema.index({ store: 1, barcode: 1 }, { unique: true, sparse: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
