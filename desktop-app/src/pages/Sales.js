import React, { useState, useEffect } from 'react';

const Sales = () => {
    const [cart, setCart] = useState([]);
    const [products] = useState([
        { id: 1, name: 'Premium Coffee Beans', price: 15.99, category: 'Beverages', stock: 45, image: '☕' },
        { id: 2, name: 'Artisan Chocolate', price: 8.50, category: 'Confectionery', stock: 32, image: '🍫' },
        { id: 3, name: 'Organic Tea Set', price: 12.75, category: 'Beverages', stock: 28, image: '🍵' },
        { id: 4, name: 'Fresh Pastries', price: 4.25, category: 'Bakery', stock: 67, image: '🥐' },
        { id: 5, name: 'Specialty Smoothie', price: 6.99, category: 'Beverages', stock: 23, image: '🥤' },
        { id: 6, name: 'Gourmet Sandwich', price: 9.99, category: 'Food', stock: 15, image: '🥪' },
        { id: 7, name: 'Energy Drink', price: 3.50, category: 'Beverages', stock: 89, image: '⚡' },
        { id: 8, name: 'Protein Bar', price: 2.99, category: 'Snacks', stock: 56, image: '🍫' }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [discount, setDiscount] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);

    const categories = ['All', 'Beverages', 'Food', 'Bakery', 'Snacks', 'Confectionery'];

    // Filter products based on search and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Add product to cart
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // Remove from cart
    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // Update quantity
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * (discount / 100);
    const tax = (subtotal - discountAmount) * 0.08; // 8% tax
    const total = subtotal - discountAmount + tax;

    // Process sale
    const processSale = async () => {
        if (cart.length === 0) return;

        setIsProcessing(true);

        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Clear cart and reset form
        setCart([]);
        setCustomerInfo({ name: '', email: '', phone: '' });
        setDiscount(0);
        setIsProcessing(false);

        alert('Sale processed successfully!');
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className="p-6 h-full">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
                {/* Left Side - Products */}
                <div className="lg:w-2/3">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-light mb-2">Point of Sale</h1>
                        <p className="text-muted">Select products to add to cart</p>
                    </div>

                    {/* Search and Filter */}
                    <div className="pos-card mb-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-charcoal-darkest/50 border border-persian-green/30 rounded-lg pl-10 pr-4 py-2 text-light placeholder-muted focus:border-persian-green focus:ring-1 focus:ring-persian-green focus:outline-none"
                                    />
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="sm:w-48">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full bg-charcoal-darkest/50 border border-persian-green/30 rounded-lg px-4 py-2 text-light focus:border-persian-green focus:ring-1 focus:ring-persian-green focus:outline-none"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="pos-card hover:border-persian-green/40 transition-all duration-200 cursor-pointer" onClick={() => addToCart(product)}>
                                <div className="text-center">
                                    <div className="text-4xl mb-2">{product.image}</div>
                                    <h3 className="font-semibold text-light text-sm mb-1">{product.name}</h3>
                                    <p className="text-muted text-xs mb-2">{product.category}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-persian-green font-bold">{formatCurrency(product.price)}</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            product.stock > 20 ? 'bg-persian-green/20 text-persian-green' :
                                                product.stock > 5 ? 'bg-saffron/20 text-saffron' :
                                                    'bg-burnt-sienna/20 text-burnt-sienna'
                                        }`}>
                                            {product.stock} left
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Cart */}
                <div className="lg:w-1/3">
                    <div className="pos-card h-fit lg:sticky lg:top-6">
                        <h2 className="text-xl font-semibold text-light mb-4">Shopping Cart</h2>

                        {/* Cart Items */}
                        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                            {cart.length === 0 ? (
                                <p className="text-muted text-center py-8">Cart is empty</p>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex items-center justify-between p-3 bg-charcoal-darkest/30 rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-light text-sm">{item.name}</h4>
                                            <p className="text-muted text-xs">{formatCurrency(item.price)} each</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-6 h-6 rounded-full bg-charcoal/50 text-light hover:bg-persian-green/20 transition-colors flex items-center justify-center text-sm"
                                            >
                                                -
                                            </button>
                                            <span className="text-light w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 rounded-full bg-charcoal/50 text-light hover:bg-persian-green/20 transition-colors flex items-center justify-center text-sm"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="w-6 h-6 rounded-full bg-burnt-sienna/20 text-burnt-sienna hover:bg-burnt-sienna/30 transition-colors flex items-center justify-center text-sm ml-2"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <>
                                {/* Customer Info */}
                                <div className="mb-4 space-y-2">
                                    <h3 className="text-sm font-medium text-light">Customer Information (Optional)</h3>
                                    <input
                                        type="text"
                                        placeholder="Customer name"
                                        value={customerInfo.name}
                                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                                        className="w-full bg-charcoal-darkest/50 border border-persian-green/30 rounded px-3 py-1 text-light text-sm placeholder-muted focus:border-persian-green focus:outline-none"
                                    />
                                    <div className="flex space-x-2">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={customerInfo.email}
                                            onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                                            className="flex-1 bg-charcoal-darkest/50 border border-persian-green/30 rounded px-3 py-1 text-light text-sm placeholder-muted focus:border-persian-green focus:outline-none"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            value={customerInfo.phone}
                                            onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                                            className="flex-1 bg-charcoal-darkest/50 border border-persian-green/30 rounded px-3 py-1 text-light text-sm placeholder-muted focus:border-persian-green focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Discount */}
                                <div className="mb-4">
                                    <label className="text-sm font-medium text-light mb-2 block">Discount (%)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={discount}
                                        onChange={(e) => setDiscount(Math.max(0, Math.min(100, parseFloat(e.target.value) || 0)))}
                                        className="w-full bg-charcoal-darkest/50 border border-persian-green/30 rounded px-3 py-2 text-light placeholder-muted focus:border-persian-green focus:outline-none"
                                    />
                                </div>

                                {/* Payment Method */}
                                <div className="mb-4">
                                    <label className="text-sm font-medium text-light mb-2 block">Payment Method</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['cash', 'card', 'digital'].map(method => (
                                            <button
                                                key={method}
                                                onClick={() => setPaymentMethod(method)}
                                                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                                    paymentMethod === method
                                                        ? 'bg-persian-green text-white'
                                                        : 'bg-charcoal/50 text-light hover:bg-charcoal'
                                                }`}
                                            >
                                                {method.charAt(0).toUpperCase() + method.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Totals */}
                                <div className="space-y-2 py-4 border-t border-persian-green/20">
                                    <div className="flex justify-between text-light">
                                        <span>Subtotal:</span>
                                        <span>{formatCurrency(subtotal)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-saffron">
                                            <span>Discount ({discount}%):</span>
                                            <span>-{formatCurrency(discountAmount)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-light">
                                        <span>Tax (8%):</span>
                                        <span>{formatCurrency(tax)}</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-persian-green pt-2 border-t border-persian-green/20">
                                        <span>Total:</span>
                                        <span>{formatCurrency(total)}</span>
                                    </div>
                                </div>

                                {/* Process Sale Button */}
                                <button
                                    onClick={processSale}
                                    disabled={isProcessing}
                                    className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            Process Sale ({formatCurrency(total)})
                                        </>
                                    )}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;