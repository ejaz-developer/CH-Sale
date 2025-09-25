import mongoose from 'mongoose';

const batchSchema = new mongoose.Schema(
  {
    lotNumber: { type: String, trim: true },
    quantity: { type: Number, default: 0 },
    expiryDate: { type: Date },
    receivedAt: { type: Date, default: Date.now },
    costPrice: { type: Number },
  },
  { _id: false },
);

const inventorySchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantityOnHand: { type: Number, default: 0 },
    quantityAllocated: { type: Number, default: 0 },
    quantityIncoming: { type: Number, default: 0 },
    safetyStock: { type: Number, default: 0 },
    reorderPoint: { type: Number, default: 0 },
    location: { type: String },
    lastRestockedAt: { type: Date },
    lastSoldAt: { type: Date },
    batches: [batchSchema],
    notes: { type: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

inventorySchema.index({ store: 1, product: 1 }, { unique: true });

inventorySchema.virtual('quantityAvailable').get(function () {
  return this.quantityOnHand - this.quantityAllocated;
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;
