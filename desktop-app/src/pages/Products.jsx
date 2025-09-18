import React, { useState } from 'react';
import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiPackage,
  FiDollarSign,
  FiBarChart,
  FiFilter,
} from 'react-icons/fi';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);

  const categories = ['All', 'Beverages', 'Food', 'Snacks', 'Desserts', 'Electronics'];

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Premium Coffee',
      price: 3.5,
      category: 'Beverages',
      stock: 45,
      image: '☕',
      description: 'High-quality arabica coffee beans',
    },
    {
      id: 2,
      name: 'Gourmet Sandwich',
      price: 8.99,
      category: 'Food',
      stock: 23,
      image: '🥪',
      description: 'Fresh ingredients, locally sourced',
    },
    {
      id: 3,
      name: 'Artisan Chips',
      price: 2.25,
      category: 'Snacks',
      stock: 67,
      image: '🍟',
      description: 'Handcrafted potato chips',
    },
    {
      id: 4,
      name: 'Energy Soda',
      price: 1.99,
      category: 'Beverages',
      stock: 89,
      image: '🥤',
      description: 'Natural energy boost drink',
    },
    {
      id: 5,
      name: 'Deluxe Burger',
      price: 12.99,
      category: 'Food',
      stock: 12,
      image: '🍔',
      description: 'Premium beef patty with fresh toppings',
    },
    {
      id: 6,
      name: 'Chocolate Cake',
      price: 4.5,
      category: 'Desserts',
      stock: 8,
      image: '🍰',
      description: 'Rich chocolate layer cake',
    },
    {
      id: 7,
      name: 'Green Tea',
      price: 2.75,
      category: 'Beverages',
      stock: 34,
      image: '🍵',
      description: 'Organic green tea leaves',
    },
    {
      id: 8,
      name: 'Caesar Salad',
      price: 7.5,
      category: 'Food',
      stock: 19,
      image: '🥗',
      description: 'Fresh romaine with caesar dressing',
    },
  ]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Beverages: 'from-blue-500 to-cyan-500',
      Food: 'from-green-500 to-emerald-500',
      Snacks: 'from-yellow-500 to-orange-500',
      Desserts: 'from-pink-500 to-purple-500',
      Electronics: 'from-indigo-500 to-purple-500',
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const getStockStatus = (stock) => {
    if (stock <= 10) return { color: 'text-red-400', bg: 'bg-red-400/20', status: 'Low Stock' };
    if (stock <= 30)
      return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', status: 'Medium Stock' };
    return { color: 'text-green-400', bg: 'bg-green-400/20', status: 'In Stock' };
  };

  return (
    <div className="p-8 min-h-screen pt-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-white text-glow mb-3">Product Management</h1>
          <p className="text-cyan-300 text-lg">Manage your inventory and product catalog</p>
        </div>

        <button
          onClick={() => setShowAddForm(true)}
          className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-emerald-500/20 flex items-center space-x-3"
        >
          <FiPlus className="text-lg" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Products</p>
              <p className="text-2xl font-bold text-white">{products.length}</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
              <FiPackage className="text-xl text-white" />
            </div>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Low Stock Items</p>
              <p className="text-2xl font-bold text-red-400">
                {products.filter((p) => p.stock <= 10).length}
              </p>
            </div>
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl">
              <FiBarChart className="text-xl text-white" />
            </div>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Avg Price</p>
              <p className="text-2xl font-bold text-emerald-400">
                ${(products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)}
              </p>
            </div>
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
              <FiDollarSign className="text-xl text-white" />
            </div>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Categories</p>
              <p className="text-2xl font-bold text-purple-400">{categories.length - 1}</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
              <FiFilter className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="glass-dark p-6 rounded-2xl border border-white/20 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-lg" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const stockStatus = getStockStatus(product.stock);
          return (
            <div
              key={product.id}
              className="group glass-dark p-6 rounded-2xl border border-white/20 transition-all duration-300 hover-scale hover:border-cyan-400/50"
            >
              {/* Product Image/Icon */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{product.image}</div>
                <div
                  className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                    product.category,
                  )} rounded-full text-white text-xs font-semibold mb-2`}
                >
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                  {product.name}
                </h3>

                <p className="text-white/60 text-sm line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${product.price.toFixed(2)}
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${stockStatus.bg} ${stockStatus.color}`}
                  >
                    {product.stock} units
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4 border-t border-white/10">
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <FiEdit className="text-sm" />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                    <FiTrash2 className="text-sm" />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-white/40 text-6xl mb-4">📦</div>
          <p className="text-white/60 text-lg">No products found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-4 text-cyan-400 hover:text-cyan-300 underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
