import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    line1: { type: String },
    line2: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  { _id: false },
);


const storeSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true },
    code: { type: String, unique: true, sparse: true, uppercase: true },
    description: { type: String },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    website: { type: String },
    timezone: { type: String, default: 'UTC' },
    address: addressSchema,
    isActive: { type: Boolean, default: true },
    openedAt: { type: Date },
  },
  { timestamps: true },
);

storeSchema.index({ owner: 1, name: 1 }, { unique: true });
storeSchema.index({ owner: 1, code: 1 }, { unique: true, sparse: true });

const Store = mongoose.model('Store', storeSchema);
export default Store;
