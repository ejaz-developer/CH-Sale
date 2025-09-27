import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    storeOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    address: {
      line1: { type: String },
      line2: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    birthDate: { type: Date },
    loyaltyPoints: { type: Number, default: 0 },
    loyaltyTier: { type: String, default: 'standard' },
    marketingOptIn: { type: Boolean, default: false },
    notes: { type: String },
    lastPurchaseAt: { type: Date },
    isActive: { type: Boolean, default: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  },
  { timestamps: true },
);

customerSchema.index({ store: 1, email: 1 }, { unique: true, sparse: true });
customerSchema.index({ store: 1, phone: 1 }, { unique: true, sparse: true });

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
