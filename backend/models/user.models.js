import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    plan: { type: String, enum: ['free', 'pro'], default: 'free' },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
    blockStatus: { type: Boolean, default: false },
    blockReason: { type: String },
    blockDate: { type: Date },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);
export default User;
