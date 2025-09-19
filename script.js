// Product Data with working image URLs
const products = [
    // Fashion
    { id: 1, name: "Premium Cotton T-Shirt", price: 29.99, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center" },
    { id: 2, name: "Classic Denim Jacket", price: 89.99, category: "fashion", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center" },
    { id: 3, name: "Elegant Silk Dress", price: 149.99, category: "fashion", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center" },
    { id: 4, name: "Casual Chino Pants", price: 59.99, category: "fashion", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop&crop=center" },
    { id: 5, name: "Wool Blend Sweater", price: 79.99, category: "fashion", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center" },
    { id: 6, name: "Designer Polo Shirt", price: 45.99, category: "fashion", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center" },
    { id: 7, name: "Vintage Leather Jacket", price: 199.99, category: "fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center" },
    { id: 8, name: "Summer Midi Skirt", price: 39.99, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center" },
    { id: 9, name: "Athletic Joggers", price: 34.99, category: "fashion", image: "https://images.unsplash.com/photo-1506629905607-d405872d5032?w=400&h=400&fit=crop&crop=center" },
    { id: 10, name: "Cashmere Scarf", price: 69.99, category: "fashion", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&crop=center" },

    // Gadgets
    { id: 11, name: "Wireless Bluetooth Headphones", price: 129.99, category: "gadgets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center" },
    { id: 12, name: "Smartphone Stand", price: 24.99, category: "gadgets", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop&crop=center" },
    { id: 13, name: "Portable Power Bank", price: 39.99, category: "gadgets", image: "https://images.unsplash.com/photo-1609592806853-bea7d0b3ff63?w=400&h=400&fit=crop&crop=center" },
    { id: 14, name: "Smart Fitness Tracker", price: 89.99, category: "gadgets", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center" },
    { id: 15, name: "USB-C Hub", price: 49.99, category: "gadgets", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&crop=center" },
    { id: 16, name: "Wireless Charging Pad", price: 34.99, category: "gadgets", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center" },
    { id: 17, name: "Bluetooth Speaker", price: 79.99, category: "gadgets", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center" },
    { id: 18, name: "Gaming Mouse", price: 59.99, category: "gadgets", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&crop=center" },
    { id: 19, name: "Mechanical Keyboard", price: 119.99, category: "gadgets", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center" },
    { id: 20, name: "HD Webcam", price: 69.99, category: "gadgets", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop&crop=center" },

    // Accessories
    { id: 21, name: "Leather Wallet", price: 49.99, category: "accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center" },
    { id: 22, name: "Classic Wristwatch", price: 199.99, category: "accessories", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&crop=center" },
    { id: 23, name: "Designer Sunglasses", price: 159.99, category: "accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center" },
    { id: 24, name: "Canvas Tote Bag", price: 29.99, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center" },
    { id: 25, name: "Silver Necklace", price: 89.99, category: "accessories", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center" },
    { id: 26, name: "Leather Belt", price: 39.99, category: "accessories", image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=400&h=400&fit=crop&crop=center" },
    { id: 27, name: "Silk Tie", price: 34.99, category: "accessories", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center" },
    { id: 28, name: "Pearl Earrings", price: 79.99, category: "accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center" },
    { id: 29, name: "Travel Backpack", price: 69.99, category: "accessories", image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop&crop=center" },
    { id: 30, name: "Phone Case", price: 19.99, category: "accessories", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop&crop=center" },

    // Shoes
    { id: 31, name: "Running Sneakers", price: 119.99, category: "shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center" },
    { id: 32, name: "Formal Oxford Shoes", price: 149.99, category: "shoes", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop&crop=center" },
    { id: 33, name: "Casual Loafers", price: 89.99, category: "shoes", image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop&crop=center" },
    { id: 34, name: "High Heels", price: 109.99, category: "shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center" },
    { id: 35, name: "Basketball Shoes", price: 139.99, category: "shoes", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop&crop=center" },
    { id: 36, name: "Ankle Boots", price: 129.99, category: "shoes", image: "https://images.unsplash.com/photo-1605812830455-3a7c655b2861?w=400&h=400&fit=crop&crop=center" },
    { id: 37, name: "Flip Flops", price: 19.99, category: "shoes", image: "https://images.unsplash.com/photo-1506629905607-d405872d5032?w=400&h=400&fit=crop&crop=center" },
    { id: 38, name: "Hiking Boots", price: 179.99, category: "shoes", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center" },
    { id: 39, name: "Ballet Flats", price: 59.99, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center" },
    { id: 40, name: "Winter Boots", price: 159.99, category: "shoes", image: "https://images.unsplash.com/photo-1608256246200-53e8b47b97de?w=400&h=400&fit=crop&crop=center" },

    // Home
    { id: 41, name: "Ceramic Vase", price: 34.99, category: "home", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center" },
    { id: 42, name: "Throw Pillow", price: 24.99, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center" },
    { id: 43, name: "Wall Art Print", price: 29.99, category: "home", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center" },
    { id: 44, name: "Scented Candle", price: 19.99, category: "home", image: "https://images.unsplash.com/photo-1602874801006-20c0935fc6c4?w=400&h=400&fit=crop&crop=center" },
    { id: 45, name: "Coffee Mug Set", price: 39.99, category: "home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center" },
    { id: 46, name: "Wooden Clock", price: 49.99, category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop&crop=center" },
    { id: 47, name: "Plant Pot", price: 14.99, category: "home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center" },
    { id: 48, name: "Kitchen Towel Set", price: 16.99, category: "home", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center" },
    { id: 49, name: "Decorative Mirror", price: 89.99, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center" },
    { id: 50, name: "Cozy Blanket", price: 59.99, category: "home", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center" }
];

// Cart system using memory (instead of localStorage)
let cart = [];
let currentProduct = null;

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    if (pageId === 'shop') {
        loadAllProducts();
    } else if (pageId === 'cart') {
        loadCartItems();
    } else if (pageId === 'checkout') {
        loadOrderSummary();
    }
}

// Product rendering
function createProductCard(product, showAddToCart = true) {
    return `
                <div class="product-card" onclick="showProductDetail(${product.id})">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiPkltYWdlPC90ZXh0Pgo8L3N2Zz4='" />
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">${product.price}</p>
                        ${showAddToCart ? `<button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>` : ''}
                    </div>
                </div>
            `;
}

// Load featured products (first 6)
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const featuredProducts = products.slice(0, 6);
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load all products
function loadAllProducts() {
    const allProductsContainer = document.getElementById('allProducts');
    allProductsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Filter products by category
function filterProducts(category) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter products
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    const allProductsContainer = document.getElementById('allProducts');
    allProductsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Show product detail
function showProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    const detailContainer = document.getElementById('productDetailContent');
    detailContainer.innerHTML = `
                <div class="product-detail-image">
                    <img src="${currentProduct.image}" alt="${currentProduct.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiPkltYWdlPC90ZXh0Pgo8L3N2Zz4='" />
                </div>
                <div class="product-detail-info">
                    <h1>${currentProduct.name}</h1>
                    <p class="price">${currentProduct.price}</p>
                    <div class="product-description">
                        <p>Experience premium quality and exceptional design with this ${currentProduct.name.toLowerCase()}. Crafted with attention to detail and built to last, this product combines style and functionality perfectly. Whether for everyday use or special occasions, it delivers outstanding performance and aesthetic appeal.</p>
                        <p>Features include high-quality materials, modern design elements, and excellent durability. Perfect for anyone who appreciates fine craftsmanship and premium products.</p>
                    </div>
                    <div class="quantity-selector">
                        <label>Quantity:</label>
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" id="productQuantity" value="1" min="1" max="10">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    <button class="cta-btn" onclick="addToCartFromDetail()" style="width: 100%;">Add to Cart</button>
                </div>
            `;
    showPage('productDetail');
}

// Change quantity in product detail
function changeQuantity(change) {
    const quantityInput = document.getElementById('productQuantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1;
    if (currentQuantity > 10) currentQuantity = 10;
    quantityInput.value = currentQuantity;
}

// Add to cart from product detail page
function addToCartFromDetail() {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    addToCart(currentProduct.id, quantity);
}

// Add to cart function
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCartCount();

    // Show feedback
    const button = event.target;
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = '#4CAF50';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1000);
    }
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Load cart items
function loadCartItems() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <h3>Your cart is empty</h3>
                        <p>Add some products to get started!</p>
                        <button class="cta-btn" onclick="showPage('shop')" style="margin-top: 1rem;">Continue Shopping</button>
                    </div>
                `;
        cartTotal.style.display = 'none';
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5JbWFnZTwvdGV4dD4KPC9zdmc+'" />
                    </div>
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.price.toFixed(2)} each</p>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                            <span style="margin: 0 1rem;">Qty: ${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem;">Remove</button>
                        </div>
                    </div>
                    <div style="font-weight: 600; font-size: 1.1rem;">
                        ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').textContent = total.toFixed(2);
    cartTotal.style.display = 'block';
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    updateCartCount();
    loadCartItems();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    loadCartItems();
}

// Load order summary for checkout
function loadOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');

    if (cart.length === 0) {
        orderSummary.innerHTML = `
                    <h3>No items in cart</h3>
                    <button class="cta-btn" onclick="showPage('shop')">Continue Shopping</button>
                `;
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 9.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

    orderSummary.innerHTML = `
                <h3>Order Summary</h3>
                <div style="margin: 1rem 0;">
                    ${cart.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>${item.name} (×${item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <hr style="border-color: #333; margin: 1rem 0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Shipping:</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <hr style="border-color: #333; margin: 1rem 0;">
                <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 1.2rem;">
                    <span>Total:</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
            `;
}

// Form validation
function validateForm() {
    let isValid = true;
    const fields = ['fullName', 'email', 'address', 'cardNumber', 'expiryDate', 'cvv'];

    // Clear previous errors
    fields.forEach(field => {
        document.getElementById(field + 'Error').textContent = '';
    });

    // Validate full name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName.length < 2) {
        document.getElementById('fullNameError').textContent = 'Please enter a valid full name';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate address
    const address = document.getElementById('address').value.trim();
    if (address.length < 10) {
        document.getElementById('addressError').textContent = 'Please enter a complete address';
        isValid = false;
    }

    // Validate card number
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById('cardNumberError').textContent = 'Please enter a valid 16-digit card number';
        isValid = false;
    }

    // Validate expiry date
    const expiryDate = document.getElementById('expiryDate').value.trim();
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        document.getElementById('expiryDateError').textContent = 'Please enter expiry date in MM/YY format';
        isValid = false;
    }

    // Validate CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter a valid 3-digit CVV';
        isValid = false;
    }

    return isValid;
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm()) {
                // Simulate order processing
                const orderNumber = Math.floor(Math.random() * 1000000) + 100000;

                // Clear cart
                cart = [];
                updateCartCount();

                // Show success message
                const checkoutPage = document.getElementById('checkout');
                checkoutPage.innerHTML = `
                            <div class="success-message">
                                <h2>Order Placed Successfully!</h2>
                                <p>Thank you for your purchase. Your order number is <strong>#${orderNumber}</strong></p>
                                <p>You will receive a confirmation email shortly.</p>
                                <button class="cta-btn" onclick="showPage('home')" style="margin-top: 1rem;">Continue Shopping</button>
                            </div>
                        `;
            }
        });
    }
});

// Format card number input
document.addEventListener('DOMContentLoaded', function () {
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
            if (formattedValue.length <= 19) { // 16 digits + 3 spaces
                e.target.value = formattedValue;
            }
        });
    }

    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
});

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    loadFeaturedProducts();
    updateCartCount();
});

// Mobile menu toggle (basic implementation)
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function () {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(0, 0, 0, 0.95)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '1rem';
                navLinks.style.borderTop = '1px solid #333';
            }
        });
    }
});