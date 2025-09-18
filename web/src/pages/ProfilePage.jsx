import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiSettings, FiCreditCard, FiShield, FiMail, FiPhone } from 'react-icons/fi';

const ProfilePage = () => {
  // Demo user data
  const user = { 
    firstName: 'Demo', 
    fullName: 'Demo User', 
    imageUrl: '/api/placeholder/80/80',
    emailAddresses: [{ emailAddress: 'demo@chsale.com', verification: { status: 'verified' } }],
    phoneNumbers: [{ verification: { status: 'verified' } }],
    createdAt: new Date()
  };
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      icon: FiUser,
      description: 'Manage your personal information'
    },
    {
      id: 'account',
      label: 'Account',
      icon: FiSettings,
      description: 'Account settings and preferences'
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: FiCreditCard,
      description: 'Billing information and history'
    },
    {
      id: 'security',
      label: 'Security',
      icon: FiShield,
      description: 'Security settings and privacy'
    }
  ];

  const accountStats = [
    {
      icon: FiMail,
      title: 'Email Verified',
      value: user?.emailAddresses?.[0]?.verification?.status === 'verified' ? 'Yes' : 'No',
      status: user?.emailAddresses?.[0]?.verification?.status === 'verified' ? 'success' : 'warning'
    },
    {
      icon: FiPhone,
      title: 'Phone Verified',
      value: user?.phoneNumbers?.[0]?.verification?.status === 'verified' ? 'Yes' : 'No',
      status: user?.phoneNumbers?.[0]?.verification?.status === 'verified' ? 'success' : 'warning'
    },
    {
      icon: FiShield,
      title: '2FA Enabled',
      value: 'Not Set',
      status: 'warning'
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
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group"
              >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Dashboard</span>
              </Link>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-lg">₽</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">CH Sale</h1>
                  <p className="text-xs text-persian">Profile Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <img
                  src={user?.imageUrl || '/api/placeholder/80/80'}
                  alt={user?.fullName || 'User'}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-persian"
                />
                <h3 className="text-xl font-bold text-white">{user?.fullName || 'User'}</h3>
                <p className="text-slate-400">{user?.emailAddresses?.[0]?.emailAddress}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-persian to-saffron text-white shadow-glow'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="text-lg" />
                    <div>
                      <div className="font-semibold">{tab.label}</div>
                      <div className="text-xs opacity-75">{tab.description}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Profile Information</h2>
                    <p className="text-slate-300">Manage your personal information and preferences</p>
                  </div>

                  {/* Account Status Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {accountStats.map((stat, index) => (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            stat.status === 'success' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            <stat.icon className="text-lg" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{stat.title}</p>
                            <p className={`text-sm ${
                              stat.status === 'success' ? 'text-green-400' : 'text-yellow-400'
                            }`}>
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Demo Profile Form */}
                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2">First Name</label>
                          <input 
                            type="text" 
                            value="Demo"
                            className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            value="User"
                            className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white"
                            readOnly
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-slate-300 mb-2">Email</label>
                          <input 
                            type="email" 
                            value="demo@chsale.com"
                            className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Tab */}
              {activeTab === 'account' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Account Settings</h2>
                    <p className="text-slate-300">Manage your account preferences and settings</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Account Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 mb-2">Account Type</label>
                          <div className="bg-charcoal border border-white/20 rounded-lg p-3 text-white">
                            Free Trial
                          </div>
                        </div>
                        <div>
                          <label className="block text-slate-300 mb-2">Member Since</label>
                          <div className="bg-charcoal border border-white/20 rounded-lg p-3 text-white">
                            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Preferences</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Email Notifications</h4>
                            <p className="text-slate-400 text-sm">Receive updates about your account</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-persian peer-checked:to-saffron"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Marketing Communications</h4>
                            <p className="text-slate-400 text-sm">Receive tips and product updates</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-persian peer-checked:to-saffron"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Billing & Subscription</h2>
                    <p className="text-slate-300">Manage your subscription and billing information</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Current Plan</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Free Trial</h4>
                          <p className="text-slate-400">23 days remaining</p>
                        </div>
                        <Link
                          to="/plans"
                          className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                        >
                          Upgrade Plan
                        </Link>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Billing History</h3>
                      <div className="text-center py-8">
                        <p className="text-slate-400">No billing history available</p>
                        <p className="text-slate-500 text-sm mt-2">Your billing history will appear here once you upgrade to a paid plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Security Settings</h2>
                    <p className="text-slate-300">Manage your account security and privacy settings</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Authentication</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Two-Factor Authentication</h4>
                            <p className="text-slate-400 text-sm">Add an extra layer of security to your account</p>
                          </div>
                          <button className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                            Enable 2FA
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Login Sessions</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">Current Session</h4>
                            <p className="text-slate-400 text-sm">Web Browser • Active now</p>
                          </div>
                          <span className="text-green-400 text-sm">Active</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Privacy</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Data Export</h4>
                            <p className="text-slate-400 text-sm">Download a copy of your data</p>
                          </div>
                          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 border border-white/20">
                            Export Data
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">Delete Account</h4>
                            <p className="text-slate-400 text-sm">Permanently delete your account and all data</p>
                          </div>
                          <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300 border border-red-400/30">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;