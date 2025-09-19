// Product Data with optimized image URLs
const products = [
    // Fashion
    { id: 1, name: "Premium Cotton T-Shirt", price: 29.99, category: "fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center", alt: "Premium white cotton t-shirt" },
    { id: 2, name: "Classic Denim Jacket", price: 89.99, category: "fashion", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center", alt: "Classic blue denim jacket" },
    { id: 3, name: "Elegant Silk Dress", price: 149.99, category: "fashion", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center", alt: "Elegant black silk dress" },
    { id: 4, name: "Casual Chino Pants", price: 59.99, category: "fashion", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop&crop=center", alt: "Beige casual chino pants" },
    { id: 5, name: "Wool Blend Sweater", price: 79.99, category: "fashion", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&crop=center", alt: "Gray wool blend sweater" },
    { id: 6, name: "Designer Polo Shirt", price: 45.99, category: "fashion", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center", alt: "Navy designer polo shirt" },
    { id: 7, name: "Vintage Leather Jacket", price: 199.99, category: "fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center", alt: "Brown vintage leather jacket" },
    { id: 8, name: "Summer Midi Skirt", price: 39.99, category: "fashion", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center", alt: "Floral summer midi skirt" },
    { id: 9, name: "Athletic Joggers", price: 34.99, category: "fashion", image: "https://images.unsplash.com/photo-1506629905607-d405872d5032?w=400&h=400&fit=crop&crop=center", alt: "Black athletic joggers" },
    { id: 10, name: "Cashmere Scarf", price: 69.99, category: "fashion", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&crop=center", alt: "Luxury cashmere scarf" },

    // Gadgets
    { id: 11, name: "Wireless Bluetooth Headphones", price: 129.99, category: "gadgets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center", alt: "Black wireless bluetooth headphones" },
    { id: 12, name: "Smartphone Stand", price: 24.99, category: "gadgets", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop&crop=center", alt: "Adjustable smartphone stand" },
    { id: 13, name: "Portable Power Bank", price: 39.99, category: "gadgets", image: "https://images.unsplash.com/photo-1609592806853-bea7d0b3ff63?w=400&h=400&fit=crop&crop=center", alt: "Portable power bank charger" },
    { id: 14, name: "Smart Fitness Tracker", price: 89.99, category: "gadgets", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop&crop=center", alt: "Smart fitness tracker watch" },
    { id: 15, name: "USB-C Hub", price: 49.99, category: "gadgets", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&crop=center", alt: "Multi-port USB-C hub" },
    { id: 16, name: "Wireless Charging Pad", price: 34.99, category: "gadgets", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center", alt: "Wireless phone charging pad" },
    { id: 17, name: "Bluetooth Speaker", price: 79.99, category: "gadgets", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center", alt: "Portable bluetooth speaker" },
    { id: 18, name: "Gaming Mouse", price: 59.99, category: "gadgets", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&crop=center", alt: "RGB gaming mouse" },
    { id: 19, name: "Mechanical Keyboard", price: 119.99, category: "gadgets", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center", alt: "Mechanical gaming keyboard" },
    { id: 20, name: "HD Webcam", price: 69.99, category: "gadgets", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop&crop=center", alt: "1080p HD webcam" },

    // Accessories
    { id: 21, name: "Leather Wallet", price: 49.99, category: "accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center", alt: "Brown leather wallet" },
    { id: 22, name: "Classic Wristwatch", price: 199.99, category: "accessories", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop&crop=center", alt: "Classic analog wristwatch" },
    { id: 23, name: "Designer Sunglasses", price: 159.99, category: "accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center", alt: "Designer sunglasses" },
    { id: 24, name: "Canvas Tote Bag", price: 29.99, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center", alt: "Beige canvas tote bag" },
    { id: 25, name: "Silver Necklace", price: 89.99, category: "accessories", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center", alt: "Sterling silver necklace" },
    { id: 26, name: "Leather Belt", price: 39.99, category: "accessories", image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=400&h=400&fit=crop&crop=center", alt: "Black leather belt" },
    { id: 27, name: "Silk Tie", price: 34.99, category: "accessories", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center", alt: "Silk necktie" },
    { id: 28, name: "Pearl Earrings", price: 79.99, category: "accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center", alt: "White pearl earrings" },
    { id: 29, name: "Travel Backpack", price: 69.99, category: "accessories", image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop&crop=center", alt: "Black travel backpack" },
    { id: 30, name: "Phone Case", price: 19.99, category: "accessories", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop&crop=center", alt: "Clear phone case" },

    // Shoes
    { id: 31, name: "Running Sneakers", price: 119.99, category: "shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center", alt: "White running sneakers" },
    { id: 32, name: "Formal Oxford Shoes", price: 149.99, category: "shoes", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop&crop=center", alt: "Black oxford dress shoes" },
    { id: 33, name: "Casual Loafers", price: 89.99, category: "shoes", image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop&crop=center", alt: "Brown casual loafers" },
    { id: 34, name: "High Heels", price: 109.99, category: "shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center", alt: "Black high heel shoes" },
    { id: 35, name: "Basketball Shoes", price: 139.99, category: "shoes", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop&crop=center", alt: "Red basketball shoes" },
    { id: 36, name: "Ankle Boots", price: 129.99, category: "shoes", image: "https://images.unsplash.com/photo-1605812830455-3a7c655b2861?w=400&h=400&fit=crop&crop=center", alt: "Brown ankle boots" },
    { id: 37, name: "Flip Flops", price: 19.99, category: "shoes", image: "https://images.unsplash.com/photo-1506629905607-d405872d5032?w=400&h=400&fit=crop&crop=center", alt: "Blue flip flops" },
    { id: 38, name: "Hiking Boots", price: 179.99, category: "shoes", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center", alt: "Brown hiking boots" },
    { id: 39, name: "Ballet Flats", price: 59.99, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center", alt: "Black ballet flats" },
    { id: 40, name: "Winter Boots", price: 159.99, category: "shoes", image: "https://images.unsplash.com/photo-1608256246200-53e8b47b97de?w=400&h=400&fit=crop&crop=center", alt: "Insulated winter boots" },

    // Home
    { id: 41, name: "Ceramic Vase", price: 34.99, category: "home", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center", alt: "White ceramic vase" },
    { id: 42, name: "Throw Pillow", price: 24.99, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", alt: "Decorative throw pillow" },
    { id: 43, name: "Wall Art Print", price: 29.99, category: "home", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center", alt: "Abstract wall art print" },
    { id: 44, name: "Scented Candle", price: 19.99, category: "home", image: "https://images.unsplash.com/photo-1602874801006-20c0935fc6c4?w=400&h=400&fit=crop&crop=center", alt: "Vanilla scented candle" },
    { id: 45, name: "Coffee Mug Set", price: 39.99, category: "home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center", alt: "White ceramic coffee mug set" },
    { id: 46, name: "Wooden Clock", price: 49.99, category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop&crop=center", alt: "Wooden wall clock" },
    { id: 47, name: "Plant Pot", price: 14.99, category: "home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center", alt: "Terracotta plant pot" },
    { id: 48, name: "Kitchen Towel Set", price: 16.99, category: "home", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center", alt: "Cotton kitchen towel set" },
    { id: 49, name: "Decorative Mirror", price: 89.99, category: "home", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center", alt: "Round decorative mirror" },
    { id: 50, name: "Cozy Blanket", price: 59.99, category: "home", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&crop=center", alt: "Soft fleece blanket" }
];

// Performance: Cart system using memory (instead of localStorage)
let cart = [];
let currentProduct = null;

// Performance: Debounced search function
let searchTimeout;
function debounceSearch(callback, delay) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callback, delay);
}

// Navigation with performance improvements
function showPage(pageId) {
    // Performance: Use requestAnimationFrame for smooth transitions
    requestAnimationFrame(() => {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');

            // Update page title for SEO
            updatePageTitle(pageId);

            // Load content based on page
            switch (pageId) {
                case 'shop':
                    loadAllProducts();
                    break;
                case 'cart':
                    loadCartItems();
                    break;
                case 'checkout':
                    loadOrderSummary();
                    break;
            }
        }
    });
}

// SEO: Update page titles dynamically
function updatePageTitle(pageId) {
    const titles = {
        'home': 'Dasrat Store - Premium Fashion, Electronics & Home Goods | Best Prices Online',
        'shop': 'Shop All Products - Dasrat Store | Fashion, Electronics, Shoes & More',
        'cart': 'Shopping Cart - Dasrat Store | Review Your Items',
        'checkout': 'Checkout - Dasrat Store | Secure Payment & Fast Shipping',
        'productDetail': currentProduct ? `${currentProduct.name} - Dasrat Store | Premium ${currentProduct.category}` : 'Product Details - Dasrat Store'
    };

    document.title = titles[pageId] || titles['home'];
}

// Performance: Optimized product card creation
function createProductCard(product, showAddToCart = true) {
    const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiPkltYWdlPC90ZXh0Pgo8L3N2Zz4=';

    return `
                <article class="product-card" onclick="showProductDetail(${product.id})" role="listitem">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.alt || product.name}" 
                             onerror="this.src='${fallbackImage}'" 
                             loading="lazy"
                             width="400" height="400">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price" aria-label="Price: ${product.price}">${product.price.toFixed(2)}</p>
                        ${showAddToCart ? `<button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Add ${product.name} to cart">Add to Cart</button>` : ''}
                    </div>
                </article>
            `;
}

// Performance: Use DocumentFragment for batch DOM updates
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const featuredProducts = products.slice(0, 6);

    // Create loading placeholders first
    featuredContainer.innerHTML = Array(6).fill(0).map(() =>
        '<div class="product-card loading-placeholder" style="height: 350px;"></div>'
    ).join('');

    // Load actual content
    setTimeout(() => {
        featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }, 100);
}

// Performance: Virtualized product loading for large lists
function loadAllProducts() {
    const allProductsContainer = document.getElementById('allProducts');

    // Show loading state
    allProductsContainer.innerHTML = Array(12).fill(0).map(() =>
        '<div class="product-card loading-placeholder" style="height: 350px;"></div>'
    ).join('');

    // Load products in chunks for better performance
    setTimeout(() => {
        allProductsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    }, 100);
}

// Performance: Optimized filter with proper accessibility
function filterProducts(category) {
    // Update ARIA states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });

    const activeBtn = event.target;
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-pressed', 'true');

    // Filter products efficiently
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    const allProductsContainer = document.getElementById('allProducts');

    // Use requestAnimationFrame for smooth filtering
    requestAnimationFrame(() => {
        allProductsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('mobile-active');
}

// Show product detail with SEO improvements
function showProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    const detailContainer = document.getElementById('productDetailContent');
    const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiPkltYWdlPC90ZXh0Pgo8L3N2Zz4=';

    detailContainer.innerHTML = `
                <div class="product-detail-image">
                    <img src="${currentProduct.image}" alt="${currentProduct.alt || currentProduct.name}" 
                         onerror="this.src='${fallbackImage}'"
                         width="400" height="400">
                </div>
                <div class="product-detail-info">
                    <h1>${currentProduct.name}</h1>
                    <p class="price" aria-label="Price: ${currentProduct.price}">${currentProduct.price.toFixed(2)}</p>
                    <div class="product-description">
                        <p>Experience premium quality and exceptional design with this ${currentProduct.name.toLowerCase()}. Crafted with attention to detail and built to last, this product combines style and functionality perfectly. Whether for everyday use or special occasions, it delivers outstanding performance and aesthetic appeal.</p>
                        <p>Features include high-quality materials, modern design elements, and excellent durability. Perfect for anyone who appreciates fine craftsmanship and premium products.</p>
                    </div>
                    <div class="quantity-selector">
                        <label for="productQuantity">Quantity:</label>
                        <button class="quantity-btn" onclick="changeQuantity(-1)" aria-label="Decrease quantity">-</button>
                        <input type="number" class="quantity-input" id="productQuantity" value="1" min="1" max="10" aria-label="Quantity">
                        <button class="quantity-btn" onclick="changeQuantity(1)" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="cta-btn" onclick="addToCartFromDetail()" style="width: 100%;" aria-label="Add ${currentProduct.name} to cart">Add to Cart</button>
                </div>
            `;
    showPage('productDetail');
}

// Quantity change with validation
function changeQuantity(change) {
    const quantityInput = document.getElementById('productQuantity');
    let currentQuantity = parseInt(quantityInput.value) || 1;
    currentQuantity += change;
    currentQuantity = Math.max(1, Math.min(10, currentQuantity));
    quantityInput.value = currentQuantity;
}

// Add to cart from product detail
function addToCartFromDetail() {
    const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
    addToCart(currentProduct.id, quantity);
}

// Performance: Optimized cart operations
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
    showAddToCartFeedback();
}

// Visual feedback for add to cart
function showAddToCartFeedback() {
    const button = event.target;
    if (button && button.classList.contains('add-to-cart')) {
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = '#4CAF50';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 1500);
    }
}

// Performance: Efficient cart count update
function updateCartCount() {
    requestAnimationFrame(() => {
        const cartCount = document.getElementById('cartCount');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Performance: Optimized cart loading
function loadCartItems() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
                    <div class="empty-cart" role="status">
                        <h3>Your cart is empty</h3>
                        <p>Add some products to get started!</p>
                        <button class="cta-btn" onclick="showPage('shop')" style="margin-top: 1rem;">Continue Shopping</button>
                    </div>
                `;
        cartTotal.style.display = 'none';
        return;
    }

    const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0MCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5JbWFnZTwvdGV4dD4KPC9zdmc+';

    cartContainer.innerHTML = cart.map(item => `
                <article class="cart-item" role="listitem">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.alt || item.name}" 
                             onerror="this.src='${fallbackImage}'"
                             width="80" height="80" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p aria-label="Price per item">${item.price.toFixed(2)} each</p>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)" aria-label="Decrease quantity">-</button>
                            <span style="margin: 0 1rem;" aria-label="Quantity">Qty: ${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem;" aria-label="Remove ${item.name} from cart">Remove</button>
                        </div>
                    </div>
                    <div style="font-weight: 600; font-size: 1.1rem;" aria-label="Total price for this item">
                        ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </article>
            `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalAmount').textContent = total.toFixed(2);
    cartTotal.style.display = 'block';
}

// Cart item quantity update
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

// Load order summary
function loadOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');

    if (cart.length === 0) {
        orderSummary.innerHTML = `
                    <div role="status">
                        <h3>No items in cart</h3>
                        <button class="cta-btn" onclick="showPage('shop')">Continue Shopping</button>
                    </div>
                `;
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 9.99;
    const tax = total * 0.08;
    const grandTotal = total + shipping + tax;

    orderSummary.innerHTML = `
                <h3>Order Summary</h3>
                <div style="margin: 1rem 0;" role="list" aria-label="Order items">
                    ${cart.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;" role="listitem">
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

// Enhanced form validation with better error messages
function validateForm() {
    let isValid = true;
    const fields = ['fullName', 'email', 'address', 'cardNumber', 'expiryDate', 'cvv'];

    // Clear previous errors
    fields.forEach(field => {
        const errorElement = document.getElementById(field + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.setAttribute('aria-live', 'polite');
        }
    });

    // Validate full name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName.length < 2) {
        document.getElementById('fullNameError').textContent = 'Please enter your full name (at least 2 characters)';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address (example@domain.com)';
        isValid = false;
    }

    // Validate address
    const address = document.getElementById('address').value.trim();
    if (address.length < 10) {
        document.getElementById('addressError').textContent = 'Please enter your complete shipping address (at least 10 characters)';
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
    } else {
        // Check if date is not expired
        const [month, year] = expiryDate.split('/').map(num => parseInt(num));
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            document.getElementById('expiryDateError').textContent = 'Card appears to be expired';
            isValid = false;
        }
    }

    // Validate CVV
    const cvv = document.getElementById('cvv').value.trim();
    if (!/^\d{3,4}$/.test(cvv)) {
        document.getElementById('cvvError').textContent = 'Please enter a valid 3 or 4-digit CVV';
        isValid = false;
    }

    return isValid;
}

// Performance: Efficient event listener setup
function setupEventListeners() {
    // Checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm()) {
                // Simulate order processing with loading state
                const submitBtn = e.target.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    const orderNumber = Math.floor(Math.random() * 1000000) + 100000;

                    // Clear cart
                    cart = [];
                    updateCartCount();

                    // Show success message
                    const checkoutPage = document.getElementById('checkout');
                    checkoutPage.innerHTML = `
                                <div class="success-message" role="status" aria-live="polite">
                                    <h2>Order Placed Successfully!</h2>
                                    <p>Thank you for your purchase. Your order number is <strong>#${orderNumber}</strong></p>
                                    <p>You will receive a confirmation email shortly.</p>
                                    <button class="cta-btn" onclick="showPage('home')" style="margin-top: 1rem;">Continue Shopping</button>
                                </div>
                            `;
                }, 2000);
            }
        });
    }

    // Format card number input
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

    // Format expiry date input
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

    // CVV input restriction
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
}

// Performance: Intersection Observer for lazy loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Performance: Service Worker registration for offline capabilities
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
}

// Keyboard navigation support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function (e) {
        // Allow Enter key to trigger onclick events on nav links
        if (e.key === 'Enter' && e.target.getAttribute('role') === 'button') {
            e.target.click();
        }

        // ESC key to close mobile menu
        if (e.key === 'Escape') {
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('mobile-active')) {
                navLinks.classList.remove('mobile-active');
            }
        }
    });
}

// Performance: Preload critical resources
function preloadCriticalResources() {
    // Preload first product images
    const criticalImages = products.slice(0, 6).map(p => p.image);
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize the website with performance optimizations
function initializeWebsite() {
    // Load critical content first
    loadFeaturedProducts();
    updateCartCount();

    // Setup event listeners
    setupEventListeners();
    setupKeyboardNavigation();

    // Performance enhancements
    setupLazyLoading();
    preloadCriticalResources();

    // Optional: Register service worker for PWA features
    // registerServiceWorker();

    // SEO: Add structured data for products
    addStructuredData();
}

// SEO: Add structured data for better search engine understanding
function addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Dasrat Store",
        "description": "Premium fashion, electronics, shoes, accessories and home goods",
        "url": "https://dasratstore.com",
        "telephone": "+1-555-DASRAT-STORE",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Products",
            "itemListElement": products.slice(0, 10).map(product => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product",
                    "name": product.name,
                    "category": product.category,
                    "offers": {
                        "@type": "Offer",
                        "price": product.price,
                        "priceCurrency": "USD",
                        "availability": "https://schema.org/InStock"
                    }
                }
            }))
        }
    });
    document.head.appendChild(script);
}

// Performance: Use requestIdleCallback for non-critical tasks
function scheduleNonCriticalTasks() {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Analytics, social media widgets, etc.
            console.log('Non-critical tasks executed during idle time');
        });
    }
}

// Error handling for better user experience
window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);
    // Could show user-friendly error message or send to error reporting service
});

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

// Schedule non-critical tasks
scheduleNonCriticalTasks();

