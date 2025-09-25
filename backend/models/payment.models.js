import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    sale: { type: mongoose.Schema.Types.ObjectId, ref: 'Sale', required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    processedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    method: {
      type: String,
      enum: ['cash', 'card', 'digital', 'split', 'other'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    transactionId: { type: String, unique: true, sparse: true },
    referenceNumber: { type: String },
    paymentDate: { type: Date, default: Date.now },
    discount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    notes: { type: String },
    metadata: { type: Map, of: String },
  },
  { timestamps: true },
);

paymentSchema.index({ store: 1, sale: 1 });

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
