import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [salesData, setSalesData] = useState({
        todayTotal: 2450.75,
        yesterdayTotal: 2100.50,
        weekTotal: 12850.25,
        monthTotal: 45600.80
    });

    const [recentTransactions] = useState([
        { id: 'TXN001', customer: 'John Doe', amount: 45.50, time: '10:45 AM', items: 3, status: 'completed' },
        { id: 'TXN002', customer: 'Sarah Smith', amount: 128.75, time: '10:42 AM', items: 7, status: 'completed' },
        { id: 'TXN003', customer: 'Mike Johnson', amount: 67.25, time: '10:38 AM', items: 4, status: 'completed' },
        { id: 'TXN004', customer: 'Emma Wilson', amount: 89.00, time: '10:35 AM', items: 5, status: 'refunded' },
        { id: 'TXN005', customer: 'David Brown', amount: 156.80, time: '10:30 AM', items: 9, status: 'completed' }
    ]);

    const [topProducts] = useState([
        { name: 'Premium Coffee Beans', sold: 45, revenue: 675.00, trend: 'up' },
        { name: 'Artisan Chocolate', sold: 32, revenue: 480.00, trend: 'up' },
        { name: 'Organic Tea Set', sold: 28, revenue: 420.00, trend: 'down' },
        { name: 'Fresh Pastries', sold: 67, revenue: 402.00, trend: 'up' },
        { name: 'Specialty Smoothies', sold: 23, revenue: 345.00, trend: 'stable' }
    ]);

    const [alerts] = useState([
        { id: 1, type: 'warning', message: 'Low stock: Premium Coffee Beans (5 units left)', time: '2 mins ago' },
        { id: 2, type: 'info', message: 'Daily backup completed successfully', time: '1 hour ago' },
        { id: 3, type: 'success', message: 'Payment gateway sync completed', time: '2 hours ago' }
    ]);

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const getIconBackgroundClass = (color) => {
        const backgroundClasses = {
            'persian-green': 'bg-persian-green/20',
            'saffron': 'bg-saffron/20',
            'sandy-brown': 'bg-sandy-brown/20',
            'burnt-sienna': 'bg-burnt-sienna/20'
        };
        return backgroundClasses[color] || 'bg-persian-green/20';
    };

    const StatCard = ({ title, value, change, icon, trend, color = 'persian-green' }) => (
        <div className="pos-card hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <p className="text-sm text-muted font-medium">{title}</p>
                    <p className="text-2xl font-bold text-light mt-1">{value}</p>
                    {change && (
                        <div className={`flex items-center mt-2 text-sm ${
                            trend === 'up' ? 'text-persian-green' :
                                trend === 'down' ? 'text-burnt-sienna' : 'text-saffron'
                        }`}>
                            {trend === 'up' && (
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                            {trend === 'down' && (
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                            <span>{change}</span>
                        </div>
                    )}
                </div>
                <div className={`p-3 rounded-lg ${getIconBackgroundClass(color)}`}>
                    {icon}
                </div>
            </div>
        </div>
    );

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'text-persian-green';
            case 'refunded': return 'text-burnt-sienna';
            case 'pending': return 'text-saffron';
            default: return 'text-muted';
        }
    };

    const getAlertColor = (type) => {
        switch (type) {
            case 'success': return 'border-persian-green bg-persian-green/10';
            case 'warning': return 'border-saffron bg-saffron/10';
            case 'error': return 'border-burnt-sienna bg-burnt-sienna/10';
            case 'info': return 'border-charcoal-light bg-charcoal-light/10';
            default: return 'border-muted bg-muted/10';
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-light">Welcome back, Ejaz!</h1>
                    <p className="text-muted mt-1">Here's what's happening with your store today.</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <div className="text-right">
                        <p className="text-sm text-muted">Current Time</p>
                        <p className="text-lg font-semibold text-light">
                            {currentTime.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            })}
                        </p>
                    </div>
                    <button className="btn-primary flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        New Sale
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Today's Sales"
                    value={formatCurrency(salesData.todayTotal)}
                    change="+12.5%"
                    trend="up"
                    icon={
                        <svg className="w-6 h-6 text-persian-green" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    }
                />
                <StatCard
                    title="Total Orders"
                    value="89"
                    change="+8.2%"
                    trend="up"
                    color="saffron"
                    icon={
                        <svg className="w-6 h-6 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                    }
                />
                <StatCard
                    title="Average Order"
                    value={formatCurrency(27.53)}
                    change="+3.8%"
                    trend="up"
                    color="sandy-brown"
                    icon={
                        <svg className="w-6 h-6 text-sandy-brown" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                    }
                />
                <StatCard
                    title="Active Customers"
                    value="24"
                    change="-2.1%"
                    trend="down"
                    color="burnt-sienna"
                    icon={
                        <svg className="w-6 h-6 text-burnt-sienna" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                    }
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Transactions */}
                <div className="pos-card">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-light">Recent Transactions</h2>
                        <button className="text-persian-green hover:text-persian-green-light text-sm font-medium">
                            View All
                        </button>
                    </div>
                    <div className="space-y-3">
                        {recentTransactions.map((transaction) => (
                            <div key={transaction.id} className="flex items-center justify-between p-3 bg-charcoal-darkest/30 rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-persian-green/20 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-persian-green" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-light">{transaction.customer}</p>
                                            <p className="text-sm text-muted">{transaction.time} • {transaction.items} items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-light">{formatCurrency(transaction.amount)}</p>
                                    <p className={`text-sm capitalize ${getStatusColor(transaction.status)}`}>
                                        {transaction.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products */}
                <div className="pos-card">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-light">Top Products Today</h2>
                        <button className="text-persian-green hover:text-persian-green-light text-sm font-medium">
                            View Inventory
                        </button>
                    </div>
                    <div className="space-y-3">
                        {topProducts.map((product, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-charcoal-darkest/30 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-saffron/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-saffron">#{index + 1}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-light">{product.name}</p>
                                        <p className="text-sm text-muted">{product.sold} sold • {formatCurrency(product.revenue)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {product.trend === 'up' && (
                                        <svg className="w-4 h-4 text-persian-green" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {product.trend === 'down' && (
                                        <svg className="w-4 h-4 text-burnt-sienna" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {product.trend === 'stable' && (
                                        <svg className="w-4 h-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Alerts and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* System Alerts */}
                <div className="lg:col-span-2 pos-card">
                    <h2 className="text-xl font-semibold text-light mb-4">System Alerts</h2>
                    <div className="space-y-3">
                        {alerts.map((alert) => (
                            <div key={alert.id} className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0">
                                        {alert.type === 'warning' && (
                                            <svg className="w-5 h-5 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {alert.type === 'success' && (
                                            <svg className="w-5 h-5 text-persian-green" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {alert.type === 'info' && (
                                            <svg className="w-5 h-5 text-charcoal-light" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-light">{alert.message}</p>
                                        <p className="text-xs text-muted mt-1">{alert.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="pos-card">
                    <h2 className="text-xl font-semibold text-light mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full btn-primary flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                            Process Sale
                        </button>
                        <button className="w-full btn-secondary flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fillRule="evenodd" d="M3 8a2 2 0 012-2v9a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" clipRule="evenodd" />
                            </svg>
                            Add Product
                        </button>
                        <button className="w-full btn-accent flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            View Reports
                        </button>
                        <button className="w-full text-light hover:text-persian-green transition-colors text-left px-3 py-2 rounded-lg hover:bg-charcoal/50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Export Data
                        </button>
                        <button className="w-full text-light hover:text-persian-green transition-colors text-left px-3 py-2 rounded-lg hover:bg-charcoal/50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;