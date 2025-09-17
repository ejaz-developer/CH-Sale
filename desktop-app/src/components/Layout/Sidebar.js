import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            path: '/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            badge: null
        },
        {
            id: 'sales',
            label: 'Sales',
            path: '/sales',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            ),
            badge: 'Hot'
        },
        {
            id: 'products',
            label: 'Products',
            path: '/products',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3a1 1 0 011-1h2a1 1 0 011 1v3H8z" clipRule="evenodd" />
                </svg>
            ),
            badge: null
        },
        {
            id: 'inventory',
            label: 'Inventory',
            path: '/inventory',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
            badge: '12'
        },
        {
            id: 'customers',
            label: 'Customers',
            path: '/customers',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            ),
            badge: null
        },
        {
            id: 'transactions',
            label: 'Transactions',
            path: '/transactions',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
            ),
            badge: null
        }
    ];

    const settingsItems = [
        {
            id: 'reports',
            label: 'Reports',
            path: '/reports',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            )
        },
        {
            id: 'settings',
            label: 'Settings',
            path: '/settings',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <div className={`glass-container-dark border-r border-persian-green/20 transition-all duration-300 flex flex-col ${isCollapsed ? 'w-16' : 'w-64'}`}>
            {/* Sidebar Header */}
            <div className="p-4 border-b border-persian-green/20">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div>
                            <h2 className="text-lg font-semibold text-light">Navigation</h2>
                            <p className="text-xs text-muted">POS System</p>
                        </div>
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-charcoal/50 transition-colors text-persian-green"
                    >
                        <svg className={`w-4 h-4 transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 py-4">
                <nav className="space-y-1 px-3">
                    {!isCollapsed && (
                        <p className="text-xs font-medium text-muted uppercase tracking-wider px-3 py-2">Main Menu</p>
                    )}
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                                    isActive
                                        ? 'bg-persian-green/20 text-persian-green border-r-2 border-persian-green'
                                        : 'text-light hover:bg-charcoal/50 hover:text-persian-green'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={`${isActive ? 'text-persian-green' : 'text-muted group-hover:text-persian-green'}`}>
                                        {item.icon}
                                    </span>
                                    {!isCollapsed && (
                                        <>
                                            <span className="ml-3 flex-1 text-left">{item.label}</span>
                                            {item.badge && (
                                                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                                                    item.badge === 'Hot'
                                                        ? 'bg-burnt-sienna text-white'
                                                        : 'bg-saffron/20 text-saffron'
                                                }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Quick Stats */}
            {!isCollapsed && (
                <div className="px-3 py-4 border-t border-persian-green/20">
                    <div className="pos-card p-3">
                        <h3 className="text-xs font-medium text-muted uppercase tracking-wider mb-2">Today's Summary</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-light">Sales</span>
                                <span className="text-sm font-medium text-persian-green">$2,450</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-light">Orders</span>
                                <span className="text-sm font-medium text-saffron">89</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-light">Items</span>
                                <span className="text-sm font-medium text-sandy-brown">234</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Section */}
            <div className="p-3 border-t border-persian-green/20">
                <nav className="space-y-1">
                    {!isCollapsed && (
                        <p className="text-xs font-medium text-muted uppercase tracking-wider px-3 py-2">System</p>
                    )}
                    {settingsItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                                    isActive
                                        ? 'bg-persian-green/20 text-persian-green'
                                        : 'text-light hover:bg-charcoal/50 hover:text-persian-green'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={`${isActive ? 'text-persian-green' : 'text-muted group-hover:text-persian-green'}`}>
                                        {item.icon}
                                    </span>
                                    {!isCollapsed && (
                                        <span className="ml-3">{item.label}</span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;