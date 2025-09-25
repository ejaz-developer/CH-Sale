import mongoose from 'mongoose';

const inventoryMovementSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    inventory: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
    sale: { type: mongoose.Schema.Types.ObjectId, ref: 'Sale' },
    reference: { type: String },
    type: {
      type: String,
      enum: ['sale', 'restock', 'adjustment', 'return', 'transfer', 'correction'],
      required: true,
    },
    quantity: { type: Number, required: true },
    previousQuantity: { type: Number, required: true },
    newQuantity: { type: Number, required: true },
    reason: { type: String },
    metadata: { type: Map, of: String },
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

inventoryMovementSchema.index({ store: 1, product: 1, createdAt: -1 });

const InventoryMovement = mongoose.model('InventoryMovement', inventoryMovementSchema);
export default InventoryMovement;
