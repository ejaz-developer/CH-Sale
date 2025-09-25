import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, sparse: true }, // Added username field
    email: { type: String, required: true, unique: true },
    avatar: { type: String }, // Added avatar field for profile images
    role: { type: String, enum: ['admin', 'owner', 'manager', 'cashier', 'user'], default: 'user' },
    plan: { type: String, enum: ['free', 'pro'], default: 'free' },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
    blockStatus: { type: Boolean, default: false },
    blockReason: { type: String },
    blockDate: { type: Date },
    defaultStore: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    stores: [
      {
        store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
        storeRole: {
          type: String,
          enum: ['owner', 'manager', 'cashier', 'staff'],
          default: 'staff',
        },
        assignedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  },
);

userSchema.index({ 'stores.store': 1 });

const User = mongoose.model('User', userSchema);
export default User;
