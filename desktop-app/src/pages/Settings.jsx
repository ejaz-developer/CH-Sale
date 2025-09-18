import React, { useState } from 'react';
import {
  FiSettings,
  FiUser,
  FiShield,
  FiDatabase,
  FiBell,
  FiMonitor,
  FiSave,
  FiRefreshCw,
} from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [settings, setSettings] = useState({
    storeName: 'POS System Skardu',
    storeAddress: '123 Main Street, Skardu, Pakistan',
    currency: 'USD',
    taxRate: 8.0,
    theme: 'dark',
    notifications: true,
    autoBackup: true,
    lowStockAlert: true,
    receiptPrinting: true,
  });

  const tabs = [
    { id: 'General', icon: FiSettings, label: 'General' },
    { id: 'Store', icon: FiUser, label: 'Store Info' },
    { id: 'Security', icon: FiShield, label: 'Security' },
    { id: 'Data', icon: FiDatabase, label: 'Data & Backup' },
    { id: 'Notifications', icon: FiBell, label: 'Notifications' },
    { id: 'Appearance', icon: FiMonitor, label: 'Appearance' },
  ];

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">Store Name</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => handleSettingChange('storeName', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleSettingChange('currency', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
              >
                <option value="USD" className="bg-gray-800">
                  USD - US Dollar
                </option>
                <option value="PKR" className="bg-gray-800">
                  PKR - Pakistani Rupee
                </option>
                <option value="EUR" className="bg-gray-800">
                  EUR - Euro
                </option>
                <option value="GBP" className="bg-gray-800">
                  GBP - British Pound
                </option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">Tax Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={settings.taxRate}
                onChange={(e) => handleSettingChange('taxRate', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>
        );

      case 'Store':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                Store Address
              </label>
              <textarea
                value={settings.storeAddress}
                onChange={(e) => handleSettingChange('storeAddress', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="store@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        );

      case 'Notifications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold">Push Notifications</h4>
                <p className="text-white/60 text-sm">Receive notifications for important events</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-400/25 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold">Low Stock Alerts</h4>
                <p className="text-white/60 text-sm">Get notified when products are running low</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.lowStockAlert}
                  onChange={(e) => handleSettingChange('lowStockAlert', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-400/25 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
          </div>
        );

      case 'Data':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <h4 className="text-white font-semibold">Auto Backup</h4>
                <p className="text-white/60 text-sm">Automatically backup data daily</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoBackup}
                  onChange={(e) => handleSettingChange('autoBackup', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-400/25 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>

            <div className="space-y-4">
              <button className="w-full p-4 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl text-blue-400 font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                <FiDatabase className="text-xl" />
                <span>Create Backup Now</span>
              </button>

              <button className="w-full p-4 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 rounded-xl text-green-400 font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                <FiRefreshCw className="text-xl" />
                <span>Restore from Backup</span>
              </button>
            </div>
          </div>
        );

      default:
        return <div className="text-white/60">Select a settings category</div>;
    }
  };

  return (
    <div className="p-8 min-h-screen pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white text-glow mb-3">Settings</h1>
        <p className="text-cyan-300 text-lg">Configure your POS system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Tabs */}
        <div className="lg:col-span-1">
          <div className="glass-dark rounded-2xl border border-white/20 p-6">
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="glass-dark rounded-2xl border border-white/20 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-white text-glow">{activeTab} Settings</h2>
              <button className="bg-green-500/10 border border-green-400/30 text-green-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-green-500/20 flex items-center space-x-3">
                <FiSave className="text-lg" />
                <span>Save Changes</span>
              </button>
            </div>

            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
