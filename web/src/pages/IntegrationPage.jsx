import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiKey, FiMonitor, FiSmartphone, FiRefreshCw, FiCheck, FiCopy, FiEye, FiEyeOff } from 'react-icons/fi';

const IntegrationPage = () => {
  // Demo user data
  const user = { firstName: 'Demo User' };
  const [apiKey, setApiKey] = useState('ch_live_sk_123456789abcdef...');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState([
    {
      id: 1,
      name: 'MacBook Pro',
      type: 'desktop',
      lastSync: '2 minutes ago',
      status: 'online'
    },
    {
      id: 2,
      name: 'iPad Pro',
      type: 'tablet',
      lastSync: '1 hour ago',
      status: 'offline'
    }
  ]);

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateNewApiKey = () => {
    const newKey = 'ch_live_sk_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
  };

  const disconnectDevice = (deviceId) => {
    setConnectedDevices(devices => devices.filter(device => device.id !== deviceId));
  };

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
                  <p className="text-xs text-persian">Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Desktop App
            <span className="bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent"> Integration</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect your desktop and mobile devices to sync data in real-time and access your POS system from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Download Section */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-persian to-saffron rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiDownload className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Download Desktop App</h2>
                <p className="text-slate-300">Get the full POS experience on your desktop</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3">
                  <FiMonitor className="text-xl" />
                  <span>Download for Windows</span>
                </button>
                
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-3">
                  <FiMonitor className="text-xl" />
                  <span>Download for macOS</span>
                </button>
                
                <button className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-3">
                  <FiSmartphone className="text-xl" />
                  <span>Download for Mobile</span>
                </button>
              </div>

              <div className="mt-6 p-4 bg-persian/10 border border-persian/30 rounded-xl">
                <h3 className="text-white font-semibold mb-2">System Requirements</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Windows 10+ or macOS 10.15+</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• Internet connection required</li>
                  <li>• 500MB available storage</li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Desktop App Features</h3>
              <div className="space-y-3">
                {[
                  'Offline mode support',
                  'Real-time data synchronization',
                  'Advanced reporting tools',
                  'Barcode scanning support',
                  'Receipt printer integration',
                  'Multi-user access control'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center">
                      <FiCheck className="text-white text-xs" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* API & Connection Section */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-sandy to-burnt rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FiKey className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">API Access</h2>
                <p className="text-slate-300">Use this API key to connect your devices</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Your API Key</label>
                  <div className="relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={apiKey}
                      readOnly
                      className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white pr-20 font-mono text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                      >
                        {showApiKey ? <FiEyeOff /> : <FiEye />}
                      </button>
                      <button
                        onClick={copyApiKey}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                      >
                        <FiCopy />
                      </button>
                    </div>
                  </div>
                  {copied && (
                    <p className="text-green-400 text-sm mt-2">API key copied to clipboard!</p>
                  )}
                </div>

                <button
                  onClick={generateNewApiKey}
                  className="w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
                >
                  <FiRefreshCw className="text-lg" />
                  <span>Generate New Key</span>
                </button>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h4 className="text-yellow-400 font-semibold mb-2">Security Notice</h4>
                <p className="text-yellow-200 text-sm">
                  Keep your API key secure. Don't share it publicly or commit it to version control.
                  If compromised, generate a new key immediately.
                </p>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Connected Devices</h3>
              
              {connectedDevices.length > 0 ? (
                <div className="space-y-3">
                  {connectedDevices.map((device) => (
                    <div key={device.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          device.type === 'desktop' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {device.type === 'desktop' ? <FiMonitor /> : <FiSmartphone />}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{device.name}</h4>
                          <p className="text-slate-400 text-sm">Last sync: {device.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          device.status === 'online' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {device.status}
                        </span>
                        <button
                          onClick={() => disconnectDevice(device.id)}
                          className="text-red-400 hover:text-red-300 transition-colors text-sm"
                        >
                          Disconnect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate-400">No devices connected</p>
                  <p className="text-slate-500 text-sm mt-2">Download and install the desktop app to get started</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Setup Instructions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="text-white font-semibold mb-2">Download</h4>
              <p className="text-slate-300 text-sm">Download the desktop app for your operating system</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="text-white font-semibold mb-2">Install & Login</h4>
              <p className="text-slate-300 text-sm">Install the app and login with your CH Sale account</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">Enter API Key</h4>
              <p className="text-slate-300 text-sm">Copy your API key from above and paste it in the app</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegrationPage;