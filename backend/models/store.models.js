import mongoose from 'mongoose';

const businessHoursSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      required: true,
    },
    open: { type: String },
    close: { type: String },
    closed: { type: Boolean, default: false },
  },
  { _id: false },
);

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

const settingsSchema = new mongoose.Schema(
  {
    defaultTaxRate: { type: Number, default: 0 },
    receiptFooter: { type: String },
    allowNegativeStock: { type: Boolean, default: false },
    lowStockAlertThreshold: { type: Number, default: 5 },
    currency: { type: String, default: 'USD' },
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
    businessHours: [businessHoursSchema],
    settings: settingsSchema,
    isActive: { type: Boolean, default: true },
    openedAt: { type: Date },
  },
  { timestamps: true },
);

storeSchema.index({ owner: 1, name: 1 }, { unique: true });
storeSchema.index({ owner: 1, code: 1 }, { unique: true, sparse: true });

const Store = mongoose.model('Store', storeSchema);
export default Store;
