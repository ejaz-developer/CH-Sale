import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: {
      type: String,
      enum: ['open', 'converted', 'abandoned', 'void'],
      default: 'open',
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        productName: { type: String, required: true },
        sku: { type: String },
        quantity: { type: Number, required: true, min: 1 },
        unitPrice: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        tax: { type: Number, default: 0 },
        total: { type: Number, required: true },
      },
    ],
    notes: { type: String },
    subtotal: { type: Number, default: 0 },
    discountTotal: { type: Number, default: 0 },
    taxTotal: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

cartSchema.index({ store: 1, customer: 1, status: 1 });

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
