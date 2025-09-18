import React, { useState } from 'react';
import { FiUsers, FiUserPlus, FiSearch, FiMail, FiPhone, FiMapPin, FiStar } from 'react-icons/fi';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      address: '123 Main St, City',
      totalPurchases: 1250.5,
      visits: 24,
      lastVisit: '2025-09-17',
      status: 'VIP',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 234 567 8901',
      address: '456 Oak Ave, City',
      totalPurchases: 890.25,
      visits: 18,
      lastVisit: '2025-09-16',
      status: 'Regular',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1 234 567 8902',
      address: '789 Pine St, City',
      totalPurchases: 2150.75,
      visits: 45,
      lastVisit: '2025-09-18',
      status: 'VIP',
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma@example.com',
      phone: '+1 234 567 8903',
      address: '321 Elm St, City',
      totalPurchases: 560.0,
      visits: 12,
      lastVisit: '2025-09-15',
      status: 'Regular',
    },
    {
      id: 5,
      name: 'Alex Brown',
      email: 'alex@example.com',
      phone: '+1 234 567 8904',
      address: '654 Maple Ave, City',
      totalPurchases: 340.25,
      visits: 8,
      lastVisit: '2025-09-14',
      status: 'New',
    },
  ]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'VIP':
        return { bg: 'bg-purple-400/20', text: 'text-purple-400', border: 'border-purple-400/30' };
      case 'Regular':
        return { bg: 'bg-green-400/20', text: 'text-green-400', border: 'border-green-400/30' };
      case 'New':
        return { bg: 'bg-blue-400/20', text: 'text-blue-400', border: 'border-blue-400/30' };
      default:
        return { bg: 'bg-gray-400/20', text: 'text-gray-400', border: 'border-gray-400/30' };
    }
  };

  const totalCustomers = customers.length;
  const vipCustomers = customers.filter((c) => c.status === 'VIP').length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalPurchases, 0);
  const avgSpending = totalRevenue / totalCustomers;

  return (
    <div className="p-8 min-h-screen pt-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-white text-glow mb-3">Customer Management</h1>
          <p className="text-cyan-300 text-lg">Manage your customer relationships and data</p>
        </div>

        <button className="bg-purple-500/10 border border-purple-400/30 text-purple-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-500/20 flex items-center space-x-3">
          <FiUserPlus className="text-lg" />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="glass-dark p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Customers</p>
              <p className="text-2xl font-bold text-white">{totalCustomers}</p>
            </div>
            <FiUsers className="text-2xl text-cyan-400" />
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-purple-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">VIP Customers</p>
              <p className="text-2xl font-bold text-purple-400">{vipCustomers}</p>
            </div>
            <FiStar className="text-2xl text-purple-400" />
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-green-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
            </div>
            <span className="text-2xl">💰</span>
          </div>
        </div>

        <div className="glass-dark p-6 rounded-2xl border border-yellow-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">Avg Spending</p>
              <p className="text-2xl font-bold text-yellow-400">${avgSpending.toFixed(0)}</p>
            </div>
            <span className="text-2xl">📊</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="glass-dark p-6 rounded-2xl border border-white/20 mb-8">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-lg" />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => {
          const statusStyle = getStatusColor(customer.status);
          return (
            <div
              key={customer.id}
              className="glass-dark p-6 rounded-2xl border border-white/20 transition-all duration-300 hover-scale hover:border-cyan-400/50"
            >
              {/* Customer Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{customer.name}</h3>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}
                    >
                      {customer.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-white/70">
                  <FiMail className="text-cyan-400" />
                  <span className="text-sm">{customer.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FiPhone className="text-emerald-400" />
                  <span className="text-sm">{customer.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <FiMapPin className="text-yellow-400" />
                  <span className="text-sm">{customer.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">
                    ${customer.totalPurchases.toLocaleString()}
                  </p>
                  <p className="text-xs text-white/60">Total Spent</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-400">{customer.visits}</p>
                  <p className="text-xs text-white/60">Visits</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-yellow-400">{customer.lastVisit}</p>
                  <p className="text-xs text-white/60">Last Visit</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-16">
          <div className="text-white/40 text-6xl mb-4">👥</div>
          <p className="text-white/60 text-lg">No customers found matching your search</p>
        </div>
      )}
    </div>
  );
};

export default Customers;
