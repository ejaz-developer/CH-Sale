import React, { useState } from 'react';
import {
  FiBarChart,
  FiTrendingUp,
  FiDollarSign,
  FiCalendar,
  FiDownload,
  FiEye,
} from 'react-icons/fi';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [selectedReport, setSelectedReport] = useState('Sales Overview');

  const periods = ['Today', 'This Week', 'This Month', 'This Quarter', 'This Year', 'Custom Range'];
  const reportTypes = [
    'Sales Overview',
    'Product Performance',
    'Customer Analytics',
    'Inventory Report',
    'Financial Summary',
  ];

  // Mock data for demonstration
  const salesData = {
    totalSales: 45890.5,
    totalOrders: 1247,
    avgOrderValue: 36.81,
    growthRate: 12.5,
  };

  const topProducts = [
    { name: 'Premium Coffee', sales: 8950.25, quantity: 445, growth: 15.2 },
    { name: 'Gourmet Sandwich', sales: 6780.0, quantity: 289, growth: 8.7 },
    { name: 'Energy Soda', sales: 4560.75, quantity: 567, growth: -2.1 },
    { name: 'Deluxe Burger', sales: 3890.5, quantity: 156, growth: 22.3 },
    { name: 'Artisan Chips', sales: 2340.25, quantity: 234, growth: 5.6 },
  ];

  const dailySales = [
    { day: 'Mon', sales: 2450 },
    { day: 'Tue', sales: 3200 },
    { day: 'Wed', sales: 2800 },
    { day: 'Thu', sales: 3600 },
    { day: 'Fri', sales: 4200 },
    { day: 'Sat', sales: 5100 },
    { day: 'Sun', sales: 3800 },
  ];

  return (
    <div className="p-8 min-h-screen pt-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-white text-glow mb-3">Reports & Analytics</h1>
          <p className="text-cyan-300 text-lg">Analyze your business performance and trends</p>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-500/10 border border-blue-400/30 text-blue-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-500/20 flex items-center space-x-3">
            <FiDownload className="text-lg" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="glass-dark p-6 rounded-2xl border border-white/20 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              {periods.map((period) => (
                <option key={period} value={period} className="bg-gray-800 text-white">
                  {period}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white/80 text-sm font-semibold mb-2">Report Type</label>
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
            >
              {reportTypes.map((type) => (
                <option key={type} value={type} className="bg-gray-800 text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
              <FiDollarSign className="text-xl text-white" />
            </div>
            <div className="text-green-400 text-sm font-semibold flex items-center">
              <FiTrendingUp className="mr-1" />+{salesData.growthRate}%
            </div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-1">Total Sales</p>
            <p className="text-2xl font-bold text-white">
              ${salesData.totalSales.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <FiBarChart className="text-xl text-white" />
            </div>
            <div className="text-cyan-400 text-sm font-semibold">📈</div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-white">
              {salesData.totalOrders.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
              <span className="text-xl text-white">💰</span>
            </div>
            <div className="text-purple-400 text-sm font-semibold">⭐</div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-1">Avg Order Value</p>
            <p className="text-2xl font-bold text-white">${salesData.avgOrderValue}</p>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
              <FiCalendar className="text-xl text-white" />
            </div>
            <div className="text-yellow-400 text-sm font-semibold">📅</div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-1">Period</p>
            <p className="text-lg font-bold text-white">{selectedPeriod}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Sales Chart */}
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white text-glow">Daily Sales Trend</h3>
            <FiEye className="text-cyan-400" />
          </div>
          <div className="space-y-4">
            {dailySales.map((day, index) => (
              <div key={day.day} className="flex items-center space-x-4">
                <div className="w-12 text-white/70 font-medium">{day.day}</div>
                <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(day.sales / 5100) * 100}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                    ${day.sales.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white text-glow">Top Products</h3>
            <FiBarChart className="text-cyan-400" />
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">{product.name}</span>
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      product.growth > 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {product.growth > 0 ? '+' : ''}
                    {product.growth}%
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/60">Sales: </span>
                    <span className="text-cyan-400 font-semibold">
                      ${product.sales.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60">Qty: </span>
                    <span className="text-emerald-400 font-semibold">{product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
