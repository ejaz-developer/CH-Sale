'use client';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import useUserStore from '@/stores/userStore';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

function SettingsPage() {
  const { user, isLoaded } = useUser();
  const { userData, loading, setUserData } = useUserStore();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    storeName: '',
    storeAddress: '',
    currency: 'USD',
    timezone: 'America/New_York',
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
  });

  React.useEffect(() => {
    if (isLoaded && user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.primaryPhoneNumber?.phoneNumber || '',
      }));
    }

    // Update form with additional data from userData
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        storeName: userData.storeName || '',
        storeAddress: userData.storeAddress || '',
        currency: userData.currency || 'USD',
        timezone: userData.timezone || 'America/New_York',
      }));
    }
  }, [isLoaded, user, userData, loading]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'profile') {
        await user.update({
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        setUserData({
          ...userData,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        toast.success('Profile updated successfully!');
      } else {
        // Handle other settings updates here
        toast.success('Settings updated successfully!');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      toast.error('Error updating settings. Please try again.');
    }
  };

  const tabs = [
    {
      id: 'profile',
      name: 'Profile',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      id: 'store',
      name: 'Store',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    },
    {
      id: 'security',
      name: 'Security',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    },
  ];

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#14213d] to-black p-6 pt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-[#e5e5e5]">Manage your account and store preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-4 border border-[#fca311]/20">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#fca311]/20 text-[#fca311] border border-[#fca311]/30'
                        : 'text-[#e5e5e5] hover:bg-black/20 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={tab.icon}
                      />
                    </svg>
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* User Profile Card */}
            {loading && !userData && (
              <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">Profile Overview</h2>
                <div className="flex items-center justify-center py-8">
                  <div className="text-[#e5e5e5]">Loading user data...</div>
                </div>
              </div>
            )}

            {!loading && !userData && (
              <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">Profile Overview</h2>
                <div className="flex items-center justify-center py-8">
                  <div className="text-red-400">
                    Unable to load user data. Please refresh the page.
                  </div>
                </div>
              </div>
            )}

            {userData && (
              <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20 mb-6">
                <h2 className="text-xl font-semibold text-white mb-4">Profile Overview</h2>
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    {userData.avatar ? (
                      <img
                        src={userData.avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-2 border-[#fca311]/50 object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-20 h-20 rounded-full border-2 border-[#fca311]/50 bg-[#fca311]/20 flex items-center justify-center ${
                        userData.avatar ? 'hidden' : ''
                      }`}
                    >
                      <svg
                        className="w-10 h-10 text-[#fca311]"
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
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {userData.firstName && userData.lastName
                        ? `${userData.firstName} ${userData.lastName}`
                        : userData.firstName || userData.lastName || 'No Name Set'}
                    </h3>
                    <p className="text-[#e5e5e5] mb-2">@{userData.username || 'No Username'}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-[#e5e5e5]">Plan:</span>
                        <span
                          className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                            userData.plan === 'free'
                              ? 'bg-gray-500/20 text-gray-300'
                              : userData.plan === 'pro'
                              ? 'bg-[#fca311]/20 text-[#fca311]'
                              : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {userData.plan ? userData.plan.toUpperCase() : 'FREE'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#e5e5e5]">Status:</span>
                        <span
                          className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                            userData.isActive
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {userData.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#e5e5e5]">Last Login:</span>
                        <p className="text-white text-xs">
                          {userData.lastLogin
                            ? new Date(userData.lastLogin).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })
                            : 'Never'}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#e5e5e5]">Member Since:</span>
                        <p className="text-white text-xs">
                          {userData.createdAt
                            ? new Date(userData.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })
                            : 'Unknown'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-[#14213d]/80 backdrop-blur-lg rounded-lg p-6 border border-[#fca311]/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled
                          className="w-full px-4 py-3 bg-black/10 border border-[#fca311]/20 rounded-lg text-gray-400 cursor-not-allowed"
                          placeholder="Your email address"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          Email cannot be changed here. Please contact support.
                        </p>
                      </div>
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Store Tab */}
                {activeTab === 'store' && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">Store Settings</h2>

                    {/* Account Information */}
                    <div className="mb-8 p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                      <h3 className="text-lg font-medium text-white mb-4">Account Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-[#e5e5e5]">User ID:</span>
                          <p className="text-white font-mono text-xs break-all">{userData?.id}</p>
                        </div>
                        <div>
                          <span className="text-[#e5e5e5]">Clerk ID:</span>
                          <p className="text-white font-mono text-xs break-all">
                            {userData?.clerkId}
                          </p>
                        </div>
                        <div>
                          <span className="text-[#e5e5e5]">Role:</span>
                          <p className="text-white capitalize">{userData?.role}</p>
                        </div>
                        <div>
                          <span className="text-[#e5e5e5]">Email:</span>
                          <p className="text-white">{userData?.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          Store Name
                        </label>
                        <input
                          type="text"
                          name="storeName"
                          value={formData.storeName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          placeholder="Enter your store name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                          Store Address
                        </label>
                        <textarea
                          name="storeAddress"
                          value={formData.storeAddress}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          placeholder="Enter your store address"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                            Currency
                          </label>
                          <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          >
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound</option>
                            <option value="CAD">CAD - Canadian Dollar</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#e5e5e5] text-sm font-medium mb-2">
                            Timezone
                          </label>
                          <select
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-black/20 border border-[#fca311]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fca311]/50 focus:border-[#fca311]"
                          >
                            <option value="America/New_York">Eastern Time</option>
                            <option value="America/Chicago">Central Time</option>
                            <option value="America/Denver">Mountain Time</option>
                            <option value="America/Los_Angeles">Pacific Time</option>
                          </select>
                        </div>
                      </div>

                      {/* Plan Upgrade Section */}
                      <div className="p-4 bg-gradient-to-r from-[#fca311]/10 to-[#fca311]/5 rounded-lg border border-[#fca311]/20">
                        <h3 className="text-lg font-medium text-white mb-2">
                          Current Plan: {userData?.plan?.toUpperCase()}
                        </h3>
                        <p className="text-[#e5e5e5] text-sm mb-4">
                          {userData?.plan === 'free'
                            ? 'Upgrade to unlock more features and increase your store limits'
                            : 'You have access to all premium features'}
                        </p>
                        {userData?.plan === 'free' && (
                          <button
                            type="button"
                            className="bg-gradient-to-r from-[#fca311] to-[#fca311]/80 hover:from-[#fca311]/90 hover:to-[#fca311]/70 text-black px-4 py-2 rounded-lg font-medium transition-all duration-200"
                          >
                            Upgrade Plan
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">
                      Notification Preferences
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <div>
                          <h3 className="text-white font-medium">Email Notifications</h3>
                          <p className="text-[#e5e5e5] text-sm">
                            Receive notifications about orders, updates, and alerts
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={formData.emailNotifications}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <div>
                          <h3 className="text-white font-medium">SMS Notifications</h3>
                          <p className="text-[#e5e5e5] text-sm">
                            Receive text messages for urgent updates
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="smsNotifications"
                            checked={formData.smsNotifications}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <div>
                          <h3 className="text-white font-medium">Marketing Emails</h3>
                          <p className="text-[#e5e5e5] text-sm">
                            Receive promotional content and feature updates
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="marketingEmails"
                            checked={formData.marketingEmails}
                            onChange={handleInputChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#fca311]"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
                    <div className="space-y-6">
                      <div className="p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <h3 className="text-white font-medium mb-2">Two-Factor Authentication</h3>
                        <p className="text-[#e5e5e5] text-sm mb-4">
                          Add an extra layer of security to your account
                        </p>
                        <button
                          type="button"
                          className="bg-[#fca311]/20 hover:bg-[#fca311]/30 text-[#fca311] px-4 py-2 rounded-lg transition-colors border border-[#fca311]/20"
                        >
                          Configure 2FA
                        </button>
                      </div>
                      <div className="p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <h3 className="text-white font-medium mb-2">Active Sessions</h3>
                        <p className="text-[#e5e5e5] text-sm mb-4">
                          Manage your active login sessions
                        </p>
                        <button
                          type="button"
                          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors border border-red-500/20"
                        >
                          View Sessions
                        </button>
                      </div>
                      <div className="p-4 bg-black/20 rounded-lg border border-[#fca311]/10">
                        <h3 className="text-white font-medium mb-2">Password</h3>
                        <p className="text-[#e5e5e5] text-sm mb-4">Change your account password</p>
                        <button
                          type="button"
                          className="bg-[#fca311]/20 hover:bg-[#fca311]/30 text-[#fca311] px-4 py-2 rounded-lg transition-colors border border-[#fca311]/20"
                        >
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                {activeTab !== 'security' && (
                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#fca311] to-[#fca311]/80 hover:from-[#fca311]/90 hover:to-[#fca311]/70 text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#fca311]/25"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
