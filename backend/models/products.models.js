import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    stock: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    maxPrice: { type: Number },
    minPrice: { type: Number },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
export default Product;
