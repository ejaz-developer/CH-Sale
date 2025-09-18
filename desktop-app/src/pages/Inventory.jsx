import React, { useState } from 'react';
import {
  FiPackage,
  FiAlertTriangle,
  FiPlus,
  FiMinus,
  FiTrendingDown,
  FiTrendingUp,
  FiRefreshCw,
} from 'react-icons/fi';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: 'Premium Coffee',
      currentStock: 45,
      minStock: 20,
      maxStock: 100,
      reorderPoint: 25,
      category: 'Beverages',
      lastRestocked: '2025-09-15',
    },
    {
      id: 2,
      name: 'Gourmet Sandwich',
      currentStock: 8,
      minStock: 15,
      maxStock: 50,
      reorderPoint: 20,
      category: 'Food',
      lastRestocked: '2025-09-14',
    },
    {
      id: 3,
      name: 'Artisan Chips',
      currentStock: 67,
      minStock: 30,
      maxStock: 100,
      reorderPoint: 35,
      category: 'Snacks',
      lastRestocked: '2025-09-16',
    },
    {
      id: 4,
      name: 'Energy Soda',
      currentStock: 89,
      minStock: 25,
      maxStock: 120,
      reorderPoint: 30,
      category: 'Beverages',
      lastRestocked: '2025-09-17',
    },
    {
      id: 5,
      name: 'Deluxe Burger',
      currentStock: 5,
      minStock: 10,
      maxStock: 40,
      reorderPoint: 15,
      category: 'Food',
      lastRestocked: '2025-09-12',
    },
  ]);

  const getStockStatus = (current, min, reorder) => {
    if (current <= min)
      return {
        status: 'Critical',
        color: 'text-red-400',
        bg: 'bg-red-400/20',
        icon: FiAlertTriangle,
      };
    if (current <= reorder)
      return {
        status: 'Low',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/20',
        icon: FiTrendingDown,
      };
    return { status: 'Good', color: 'text-green-400', bg: 'bg-green-400/20', icon: FiTrendingUp };
  };

  const criticalItems = inventoryItems.filter((item) => item.currentStock <= item.minStock);
  const lowStockItems = inventoryItems.filter(
    (item) => item.currentStock <= item.reorderPoint && item.currentStock > item.minStock,
  );

  return (
    <div className="p-8 min-h-screen pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white text-glow mb-3">Inventory Management</h1>
        <p className="text-cyan-300 text-lg">Monitor and manage your stock levels</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Items</p>
              <p className="text-2xl font-bold text-white">{inventoryItems.length}</p>
            </div>
            <FiPackage className="text-2xl text-cyan-400" />
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-red-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Critical Stock</p>
              <p className="text-2xl font-bold text-red-400">{criticalItems.length}</p>
            </div>
            <FiAlertTriangle className="text-2xl text-red-400" />
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-yellow-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Low Stock</p>
              <p className="text-2xl font-bold text-yellow-400">{lowStockItems.length}</p>
            </div>
            <FiTrendingDown className="text-2xl text-yellow-400" />
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-green-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Value</p>
              <p className="text-2xl font-bold text-green-400">$12,450</p>
            </div>
            <FiTrendingUp className="text-2xl text-green-400" />
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="glass-dark rounded-2xl border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white text-glow">Stock Overview</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="text-left p-4 text-white font-semibold">Product</th>
                <th className="text-left p-4 text-white font-semibold">Category</th>
                <th className="text-left p-4 text-white font-semibold">Current Stock</th>
                <th className="text-left p-4 text-white font-semibold">Status</th>
                <th className="text-left p-4 text-white font-semibold">Reorder Point</th>
                <th className="text-left p-4 text-white font-semibold">Last Restocked</th>
                <th className="text-left p-4 text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => {
                const status = getStockStatus(item.currentStock, item.minStock, item.reorderPoint);
                const StatusIcon = status.icon;
                return (
                  <tr
                    key={item.id}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="text-white font-medium">{item.name}</div>
                    </td>
                    <td className="p-4">
                      <span className="text-cyan-300">{item.category}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{item.currentStock}</span>
                        <span className="text-white/60">/ {item.maxStock}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full ${status.bg} w-fit`}
                      >
                        <StatusIcon className={`text-sm ${status.color}`} />
                        <span className={`text-sm font-medium ${status.color}`}>
                          {status.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-yellow-400 font-medium">{item.reorderPoint}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-white/60">{item.lastRestocked}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-green-500/10 border border-green-400/30 hover:bg-green-500/20 text-green-400 rounded transition-colors">
                          <FiPlus className="text-sm" />
                        </button>
                        <button className="p-2 bg-red-500/10 border border-red-400/30 hover:bg-red-500/20 text-red-400 rounded transition-colors">
                          <FiMinus className="text-sm" />
                        </button>
                        <button className="p-2 bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 text-blue-400 rounded transition-colors">
                          <FiRefreshCw className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
