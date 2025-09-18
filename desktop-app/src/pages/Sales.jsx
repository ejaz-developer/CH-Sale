import React, { useState } from 'react';
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiCreditCard,
  FiDollarSign,
  FiShoppingCart,
  FiSearch,
} from 'react-icons/fi';

const Sales = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Premium Coffee', price: 4.5, category: 'Beverages', image: '☕', stock: 45 },
    { id: 2, name: 'Gourmet Sandwich', price: 12.99, category: 'Food', image: '🥪', stock: 23 },
    { id: 3, name: 'Artisan Chips', price: 3.25, category: 'Snacks', image: '🥨', stock: 67 },
    { id: 4, name: 'Energy Soda', price: 2.75, category: 'Beverages', image: '🥤', stock: 89 },
    { id: 5, name: 'Deluxe Burger', price: 15.5, category: 'Food', image: '🍔', stock: 12 },
    { id: 6, name: 'Fresh Juice', price: 5.0, category: 'Beverages', image: '🧃', stock: 34 },
    { id: 7, name: 'Chocolate Cake', price: 6.75, category: 'Desserts', image: '🍰', stock: 18 },
    { id: 8, name: 'Ice Cream', price: 4.25, category: 'Desserts', image: '🍦', stock: 25 },
  ];

  const categories = ['All', 'Beverages', 'Food', 'Snacks', 'Desserts'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : products.filter(
          (product) =>
            product.category === selectedCategory &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const processPayment = () => {
    if (cart.length === 0) return;
    alert(`Payment processed successfully! Total: $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <div className="p-8 min-h-screen pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white text-glow mb-3">Point of Sale</h1>
        <p className="text-cyan-300 text-lg">
          Process customer transactions quickly and efficiently
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2">
          {/* Search and Category Filter */}
          <div className="glass-dark p-6 rounded-2xl border border-white/20 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-lg" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                        : 'glass-dark text-white/70 border border-white/20 hover:text-white hover:border-cyan-400/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => addToCart(product)}
                className="glass-dark p-4 rounded-2xl border border-white/20 text-center cursor-pointer transition-all duration-300 hover-scale hover:border-cyan-400/50 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">{product.name}</h3>
                <p className="text-cyan-400 font-bold text-lg mb-1">${product.price}</p>
                <p className="text-white/60 text-xs mb-2">{product.category}</p>
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    product.stock > 20
                      ? 'bg-green-400/20 text-green-400'
                      : product.stock > 10
                      ? 'bg-yellow-400/20 text-yellow-400'
                      : 'bg-red-400/20 text-red-400'
                  }`}
                >
                  Stock: {product.stock}
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-white/40 text-6xl mb-4">🔍</div>
              <p className="text-white/60 text-lg">No products found</p>
              <p className="text-white/40 text-sm">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <div className="glass-dark rounded-2xl border border-white/20 p-6 sticky top-24">
            <div className="flex items-center space-x-3 mb-6">
              <FiShoppingCart className="text-2xl text-cyan-400" />
              <h2 className="text-2xl font-semibold text-white text-glow">Current Sale</h2>
              <div className="bg-cyan-400/20 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full">
                {cart.length} items
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-white/60">Cart is empty</p>
                  <p className="text-white/40 text-sm">Add products to get started</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.image}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{item.name}</p>
                        <p className="text-cyan-400 font-semibold">${item.price} each</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded transition-colors"
                      >
                        <FiMinus className="text-sm" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded transition-colors"
                      >
                        <FiPlus className="text-sm" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded ml-2 transition-colors"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <>
                <div className="border-t border-white/20 pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-xl border-t border-white/20 pt-3">
                    <span>Total:</span>
                    <span className="text-cyan-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={processPayment}
                    className="w-full bg-green-500/10 border border-green-400/30 text-green-400 p-4 rounded-lg font-semibold transition-all duration-200 hover:bg-green-500/20 flex items-center justify-center space-x-3"
                  >
                    <FiCreditCard className="text-lg" />
                    <span>Process Payment</span>
                  </button>

                  <button
                    onClick={() => setCart([])}
                    className="w-full p-3 bg-red-500/10 hover:bg-red-500/20 border border-red-400/30 text-red-400 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <FiTrash2 className="text-lg" />
                    <span>Clear Cart</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
