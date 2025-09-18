import React from 'react';
import {
  FiTrendingUp,
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiActivity,
  FiTarget,
} from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="p-8 min-h-screen pt-28">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white text-glow mb-3">Dashboard</h1>
        <p className="text-cyan-300 text-lg">Welcome to your Elite POS System overview</p>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="group relative glass-dark p-6 rounded-2xl border border-white/20 hover-scale hover:border-cyan-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-white mb-1">$12,345</p>
              <p className="text-cyan-400 text-sm font-medium">+12% this month</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl glow-persian">
              <FiDollarSign className="text-2xl text-white" />
            </div>
          </div>
        </div>

        <div className="group relative glass-dark p-6 rounded-2xl border border-white/20 hover-scale hover:border-emerald-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Orders Today</p>
              <p className="text-3xl font-bold text-white mb-1">45</p>
              <p className="text-emerald-400 text-sm font-medium">+8 from yesterday</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl glow-saffron">
              <FiShoppingCart className="text-2xl text-white" />
            </div>
          </div>
        </div>

        <div className="group relative glass-dark p-6 rounded-2xl border border-white/20 hover-scale hover:border-yellow-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Revenue Growth</p>
              <p className="text-3xl font-bold text-white mb-1">+23%</p>
              <p className="text-yellow-400 text-sm font-medium">Excellent performance</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl glow-orange">
              <FiTrendingUp className="text-2xl text-white" />
            </div>
          </div>
        </div>

        <div className="group relative glass-dark p-6 rounded-2xl border border-white/20 hover-scale hover:border-purple-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Active Customers</p>
              <p className="text-3xl font-bold text-white mb-1">1,234</p>
              <p className="text-purple-400 text-sm font-medium">+156 this week</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl">
              <FiUsers className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Quick Actions */}
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <h2 className="text-xl font-semibold text-white text-glow mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-between p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200">
              <div className="text-left">
                <h3 className="font-medium text-sm">New Sale</h3>
                <p className="text-cyan-300/70 text-xs">Start a new transaction</p>
              </div>
              <FiTarget className="text-lg" />
            </button>

            <button className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-400/30 rounded-xl text-yellow-400 hover:bg-yellow-500/20 transition-all duration-200">
              <div className="text-left">
                <h3 className="font-medium text-sm">Add Product</h3>
                <p className="text-yellow-300/70 text-xs">Manage your inventory</p>
              </div>
              <FiShoppingCart className="text-lg" />
            </button>

            <button className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-400/30 rounded-xl text-purple-400 hover:bg-purple-500/20 transition-all duration-200">
              <div className="text-left">
                <h3 className="font-medium text-sm">View Reports</h3>
                <p className="text-purple-300/70 text-xs">Analyze your performance</p>
              </div>
              <FiActivity className="text-lg" />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-dark p-8 rounded-2xl border border-white/20">
          <h2 className="text-2xl font-semibold text-white text-glow mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Sale #1234 completed</p>
                <p className="text-white/60 text-sm">$89.50 • 2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">New product added</p>
                <p className="text-white/60 text-sm">Coffee Beans Premium • 5 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Low stock alert</p>
                <p className="text-white/60 text-sm">Energy Drinks • 8 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Customer registered</p>
                <p className="text-white/60 text-sm">John Doe • 15 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="glass-dark p-8 rounded-2xl border border-white/20">
        <h2 className="text-2xl font-semibold text-white text-glow mb-6">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">98.5%</div>
            <div className="text-white/80">System Uptime</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">$2.4M</div>
            <div className="text-white/80">Monthly Revenue</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.8★</div>
            <div className="text-white/80">Customer Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
