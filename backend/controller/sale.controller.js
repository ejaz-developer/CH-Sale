import Sale from '../models/sale.models.js';

export const createSale = async (req, res) => {
  const {
    storeId,
    customerId,
    cashierId,
    cartId,
    saleNumber,
    status,
    paymentStatus,
    items,
    subtotal,
    discountTotal,
    taxTotal,
    feeTotal,
    grandTotal,
    amountDue,
    payments,
    saleDate,
    notes,
    metadata,
  } = req.body;

  if (
    !storeId ||
    !items ||
    !Array.isArray(items) ||
    items.length === 0 ||
    !subtotal ||
    !grandTotal
  ) {
    return res
      .status(400)
      .json({ message: 'storeId, items, subtotal, and grandTotal are required.' });
  }

  try {
    const saleData = {
      store: storeId,
      customer: customerId,
      cashier: cashierId,
      cart: cartId,
      saleNumber,
      status,
      paymentStatus,
      items,
      subtotal,
      discountTotal,
      taxTotal,
      feeTotal,
      grandTotal,
      amountDue,
      payments,
      saleDate,
      notes,
      metadata,
    };

    const sale = await Sale.create(saleData);
    return res.status(201).json({ message: 'Sale created successfully', sale });
  } catch (error) {
    console.error('Error creating sale:', error);
    return res.status(500).json({ message: 'Failed to create sale.' });
  }
};

export const getSales = async (_req, res) => {
  try {
    const sales = await Sale.find().sort({ createdAt: -1 });
    return res.status(200).json({ message: 'Sales fetched successfully', data: sales });
  } catch (error) {
    console.error('Error fetching sales:', error);
    return res.status(500).json({ message: 'Failed to fetch sales.' });
  }
};

export const getSaleById = async (req, res) => {
  const { saleId } = req.params;

  if (!saleId) {
    return res.status(400).json({ message: 'saleId is required.' });
  }

  try {
    const sale = await Sale.findById(saleId);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found.' });
    }
    return res.status(200).json({ message: 'Sale fetched successfully', data: sale });
  } catch (error) {
    console.error('Error fetching sale:', error);
    return res.status(500).json({ message: 'Failed to fetch sale.' });
  }
};

export const updateSale = async (req, res) => {
  const { saleId } = req.params;

  if (!saleId) {
    return res.status(400).json({ message: 'saleId is required.' });
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Request body cannot be empty.' });
  }

  const {
    storeId,
    customerId,
    cashierId,
    cartId,
    saleNumber,
    status,
    paymentStatus,
    items,
    subtotal,
    discountTotal,
    taxTotal,
    feeTotal,
    grandTotal,
    amountDue,
    payments,
    saleDate,
    notes,
    metadata,
  } = req.body;

  const updateData = {
    store: storeId,
    customer: customerId,
    cashier: cashierId,
    cart: cartId,
    saleNumber,
    status,
    paymentStatus,
    items,
    subtotal,
    discountTotal,
    taxTotal,
    feeTotal,
    grandTotal,
    amountDue,
    payments,
    saleDate,
    notes,
    metadata,
  };

  try {
    const sale = await Sale.findByIdAndUpdate(saleId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!sale) {
      return res.status(404).json({ message: 'Sale not found.' });
    }

    return res.status(200).json({ message: 'Sale updated successfully', sale });
  } catch (error) {
    console.error('Error updating sale:', error);
    return res.status(500).json({ message: 'Failed to update sale.' });
  }
};

export const deleteSale = async (req, res) => {
  const { saleId } = req.params;

  if (!saleId) {
    return res.status(400).json({ message: 'saleId is required.' });
  }

  try {
    const sale = await Sale.findByIdAndDelete(saleId);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found.' });
    }
    return res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (error) {
    console.error('Error deleting sale:', error);
    return res.status(500).json({ message: 'Failed to delete sale.' });
  }
};
