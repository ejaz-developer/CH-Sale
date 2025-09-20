'use client';
import React from 'react';
import Link from 'next/link';

function page() {
  // Sample data for the dashboard
  const stats = {
    todaySales: 2450.75,
    totalOrders: 47,
    totalCustomers: 156,
    averageOrder: 52.14,
  };

  const recentTransactions = [
    { id: 1, customer: 'John Doe', amount: 89.5, time: '2:45 PM', items: 3 },
    { id: 2, customer: 'Sarah Johnson', amount: 156.25, time: '2:32 PM', items: 7 },
    { id: 3, customer: 'Mike Wilson', amount: 45.0, time: '2:18 PM', items: 2 },
    { id: 4, customer: 'Emily Davis', amount: 78.9, time: '1:55 PM', items: 4 },
  ];

  const topProducts = [
    { name: 'Coffee Beans - Premium', sold: 24, revenue: 480.0 },
    { name: 'Wireless Headphones', sold: 8, revenue: 640.0 },
    { name: 'Notebook Set', sold: 15, revenue: 225.0 },
    { name: 'Energy Drink', sold: 32, revenue: 128.0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#14213d] to-black p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-[#e5e5e5]">
              Welcome back! Here's what's happening with your store today.
            </p>
          </div>
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 bg-[#fca311]/20 hover:bg-[#fca311]/30 text-[#fca311] px-4 py-2 rounded-lg transition-colors border border-[#fca311]/20 hover:shadow-lg hover:shadow-[#fca311]/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-medium">Settings</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#e5e5e5] text-sm">Today's Sales</p>
                <p className="text-2xl font-bold text-white">${stats.todaySales.toFixed(2)}</p>
              </div>
              <div className="bg-[#fca311]/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#fca311]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#e5e5e5] text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-white">{stats.totalOrders}</p>
              </div>
              <div className="bg-[#fca311]/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#fca311]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#e5e5e5] text-sm">Customers</p>
                <p className="text-2xl font-bold text-white">{stats.totalCustomers}</p>
              </div>
              <div className="bg-[#fca311]/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#fca311]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#e5e5e5] text-sm">Avg. Order</p>
                <p className="text-2xl font-bold text-white">${stats.averageOrder.toFixed(2)}</p>
              </div>
              <div className="bg-[#fca311]/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-[#fca311]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Transactions</h2>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-[#fca311]/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#fca311]/20 p-2 rounded-full">
                      <svg
                        className="w-4 h-4 text-[#fca311]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{transaction.customer}</p>
                      <p className="text-[#e5e5e5] text-sm">
                        {transaction.items} items • {transaction.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#fca311] font-semibold">
                    ${transaction.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
            <h2 className="text-xl font-semibold text-white mb-4">Top Products Today</h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-[#fca311]/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#fca311]/20 p-2 rounded-full">
                      <svg
                        className="w-4 h-4 text-[#fca311]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{product.name}</p>
                      <p className="text-[#e5e5e5] text-sm">{product.sold} sold</p>
                    </div>
                  </div>
                  <div className="text-[#fca311] font-semibold">${product.revenue.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-[#fca311]/20 hover:bg-[#fca311]/30 rounded-lg transition-colors border border-[#fca311]/20">
              <svg
                className="w-8 h-8 text-[#fca311] mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="text-white text-sm font-medium">New Sale</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-[#fca311]/20 hover:bg-[#fca311]/30 rounded-lg transition-colors border border-[#fca311]/20">
              <svg
                className="w-8 h-8 text-[#fca311] mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              <span className="text-white text-sm font-medium">Add Product</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-[#fca311]/20 hover:bg-[#fca311]/30 rounded-lg transition-colors border border-[#fca311]/20">
              <svg
                className="w-8 h-8 text-[#fca311] mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-white text-sm font-medium">Manage Staff</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-[#fca311]/20 hover:bg-[#fca311]/30 rounded-lg transition-colors border border-[#fca311]/20">
              <svg
                className="w-8 h-8 text-[#fca311] mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-white text-sm font-medium">View Reports</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
