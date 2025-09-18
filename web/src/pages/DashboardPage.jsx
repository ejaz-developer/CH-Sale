import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiCreditCard, FiUsers, FiBarChart, FiShoppingCart, FiTrendingUp } from 'react-icons/fi';

const DashboardPage = () => {
  // Demo user data
  const user = { firstName: 'Demo User' };

  const quickActions = [
    {
      icon: FiCreditCard,
      title: 'View Plans',
      description: 'Manage your subscription',
      link: '/plans',
      color: 'from-persian to-saffron'
    },
    {
      icon: FiSettings,
      title: 'Profile Settings',
      description: 'Update your information',
      link: '/profile',
      color: 'from-sandy to-burnt'
    },
    {
      icon: FiUsers,
      title: 'Integration',
      description: 'Connect desktop app',
      link: '/integration',
      color: 'from-charcoal to-persian'
    }
  ];

  const stats = [
    {
      icon: FiShoppingCart,
      title: 'Active Devices',
      value: '2',
      change: '+1 this month'
    },
    {
      icon: FiTrendingUp,
      title: 'Sync Status',
      value: 'Connected',
      change: 'Real-time sync active'
    },
    {
      icon: FiBarChart,
      title: 'Account Type',
      value: 'Free Trial',
      change: '23 days remaining'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-persian rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-saffron rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-sandy rounded-full opacity-50 animate-pulse"></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-radial from-persian/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-radial from-saffron/15 to-transparent rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">₽</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CH Sale</h1>
                <p className="text-xs text-persian">Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-full flex items-center justify-center text-white font-bold">
                DU
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Welcome section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.firstName || 'User'}!
          </h2>
          <p className="text-xl text-slate-300">
            Here's what's happening with your CH Sale account
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-persian/10 to-saffron/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-persian to-saffron rounded-xl flex items-center justify-center">
                    <stat.icon className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-persian text-sm">{stat.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index}
                to={action.link}
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-persian/10 to-saffron/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 group-hover:shadow-glow transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                    <action.icon className="text-white text-xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{action.title}</h4>
                  <p className="text-slate-300">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-persian to-saffron rounded-lg flex items-center justify-center">
                <FiUsers className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <p className="text-white">Account created</p>
                <p className="text-slate-400 text-sm">Welcome to CH Sale!</p>
              </div>
              <div className="text-slate-400 text-sm">Just now</div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-sandy to-burnt rounded-lg flex items-center justify-center">
                <FiCreditCard className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <p className="text-white">Free trial started</p>
                <p className="text-slate-400 text-sm">30 days of premium features</p>
              </div>
              <div className="text-slate-400 text-sm">Just now</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;