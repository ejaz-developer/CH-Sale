import React, { useState } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Update time every second
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <header className="glass-container-dark px-6 py-4 flex items-center justify-between border-b border-persian-green/20 sticky top-0 z-50">
            {/* Left Section - Logo and Store Info */}
            <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-persian-green to-persian-green-light rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-light">POS Master</h1>
                        <p className="text-sm text-muted">Point of Sale System</p>
                    </div>
                </div>

                {/* Store Info */}
                <div className="hidden md:block">
                    <p className="text-sm text-muted">Store ID: #001</p>
                    <p className="text-sm text-persian-green">Terminal: Main Counter</p>
                </div>
            </div>

            {/* Center Section - Search Bar */}
            <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products, customers..."
                        className="w-full bg-charcoal-darkest/50 border border-persian-green/30 rounded-lg pl-10 pr-4 py-2 text-light placeholder-muted focus:border-persian-green focus:ring-1 focus:ring-persian-green focus:outline-none"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {/* Right Section - Time, Notifications, and User */}
            <div className="flex items-center space-x-6">
                {/* Date and Time */}
                <div className="hidden lg:block text-right">
                    <p className="text-sm font-medium text-light">{formatTime(currentTime)}</p>
                    <p className="text-xs text-muted">{formatDate(currentTime)}</p>
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button className="p-2 rounded-lg bg-charcoal/50 hover:bg-charcoal transition-colors">
                        <svg className="w-5 h-5 text-light" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                    <span className="absolute -top-1 -right-1 bg-burnt-sienna text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </div>

                {/* Quick Actions */}
                <div className="flex space-x-2">
                    <button className="btn-primary px-3 py-2 text-sm">
                        New Sale
                    </button>
                    <button className="btn-secondary px-3 py-2 text-sm">
                        Quick Pay
                    </button>
                </div>

                {/* User Profile */}
                <div className="relative">
                    <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-charcoal/50 transition-colors"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-saffron to-sandy-brown rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-charcoal-darkest">ED</span>
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-sm font-medium text-light">Ejaz Developer</p>
                            <p className="text-xs text-muted">Cashier</p>
                        </div>
                        <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* User Dropdown Menu */}
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 glass-container-dark border border-persian-green/20 rounded-lg shadow-lg py-2 z-50">
                            <a href="#" className="block px-4 py-2 text-sm text-light hover:bg-charcoal/50 transition-colors">
                                Profile Settings
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-light hover:bg-charcoal/50 transition-colors">
                                Shift Summary
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-light hover:bg-charcoal/50 transition-colors">
                                Reports
                            </a>
                            <hr className="my-1 border-persian-green/20" />
                            <a href="#" className="block px-4 py-2 text-sm text-burnt-sienna hover:bg-charcoal/50 transition-colors">
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;