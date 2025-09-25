import mongoose from 'mongoose';

const saleItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    productName: { type: String, required: true },
    sku: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true },
    costPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { _id: false },
);

const saleSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    cashier: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    saleNumber: { type: String, unique: true, sparse: true },
    status: {
      type: String,
      enum: ['draft', 'completed', 'voided', 'refunded'],
      default: 'completed',
    },
    paymentStatus: {
      type: String,
      enum: ['unpaid', 'partial', 'paid', 'refunded'],
      default: 'unpaid',
    },
    items: {
      type: [saleItemSchema],
      validate: [(items) => items.length > 0, 'Sale must contain at least one item'],
    },
    subtotal: { type: Number, required: true },
    discountTotal: { type: Number, default: 0 },
    taxTotal: { type: Number, default: 0 },
    feeTotal: { type: Number, default: 0 },
    grandTotal: { type: Number, required: true },
    amountDue: { type: Number, default: 0 },
    payments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
    saleDate: { type: Date, default: Date.now },
    notes: { type: String },
    metadata: { type: Map, of: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

saleSchema.index({ store: 1, saleDate: -1 });
saleSchema.index({ store: 1, saleNumber: 1 }, { unique: true, sparse: true });

saleSchema.virtual('itemsCount').get(function () {
  return this.items?.reduce((acc, item) => acc + item.quantity, 0) ?? 0;
});

const Sale = mongoose.model('Sale', saleSchema);
export default Sale;
