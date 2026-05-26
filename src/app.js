/* Aurora Skin - Functional Engine */

// Sample Product Dataset
const PRODUCTS = [
  {
    id: "rad-serum",
    name: "Radiance Serum",
    category: "serums",
    skinType: "glow",
    price: 78,
    bestseller: true,
    tagline: "Glow Enhancement",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTppWXgi9rc0VfJVnK4oi29mo1xVHft5yiTpGHWo8zdn7TzRt_azVEDrhxSgV4DXwV-xh1lKfUmDue-R1J6RGuC7S2hagsXvj1wWPpCPM8Z5ZpCAroUSdQHwEMtso11Mcu-vybXe7JfKO_q5gkjml3pk-TCJCMxtShrDRNIIqAbE60mye7Vcd6nFMxl65qMIk2AbrmyLJ3sG-kt5NTKPpD8_LbozwQIKYw_IVN8VieU1TABiPfy5XuTSG8uOCuBluIegLxRVgFvc",
    description: "Our signature multi-active formulation designed to instantly boost natural luminosity, refine texture, and even tone with plant-derived antioxidants and bioactive gold extracts.",
    ingredients: "Organic Aloe Vera, Gold Root Botanical Ferments, Niacinamide (Vitamin B3), Sea Buckthorn Seed Co2 extract, Camellia Flower hydrosol, Tremella Snow Mushroom extract.",
    directions: "Apply 3-4 drops onto cleansed damp skin mornings and evenings. Gently press in, then follow up with your customized moisturizer ritual."
  },
  {
    id: "lum-cream",
    name: "Lumière Eye Cream",
    category: "creams",
    skinType: "dry",
    price: 54,
    bestseller: false,
    tagline: "Awakening Ritual",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-m6DwAU7qsbadNo0LBsPlcQhrI3QDnPNML2quNaOq0ZSQ167XkuUQejaYvEGkE-CbBhUpkUl-UbJj4AUCl5P770vdas7N6s9HYE-r4tq8-3biz-9TZauZnak4q_jom2NrD5tzV7O9RTkSsQVu2DfcMYxUJfwMTcmX9Hz_PF534rw2ppQxhf5kqpFQ2lqPIKUy1FqvwQ4xkhlI3lJrp3PxhNM2Yt0LPytwEj1mJx8b3LdKiTa2BNWIzh-Q-ek1UFGBVch6mR6WukU",
    description: "An incredibly decadent yet lightweight awakening treatment. Specially designed to depuff tired under-eyes, reduce fine expression lines, and deeply nourish delicate skin layer.",
    ingredients: "Rose Geranium Hydrosol, Green Coffee Bean Extract, Cold-Pressed Avocado Oil, Organic Shea Butter, Botanical Hyaluronic Acid, Rosehip Seed CO2.",
    directions: "Dab a tiny pearled amount gently around the orbital bones using your ring-finger. Tap with featherlight pressure until absorbed completely."
  },
  {
    id: "vel-oil",
    name: "Velvet Cleansing Oil",
    category: "oils",
    skinType: "sensitive",
    price: 42,
    bestseller: false,
    tagline: "Silk Purification",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBL6ILuQGlwMu7Q_kZp9FCAxYONsLhOQ2g3ompHLCuzYWKXwE5FnRKMU8-BTpJNiZmeTlBPn0BD4wz5h7_rkmkB6evUEIUhRJF85lsV4_bRmI5S7kzOPZSxnZZg_uDQRgJhb4gZq8bI92jG48DvIEE13Nx5NwJAKuV596ABZSoy96fmSAEGGtn7Ph2e9jYpvuJd5TEKsNNXxVerwxAtC6WpOpUgWGf0JBCb_jC0uUke1URDpmeMncskx1GO_uG9G5G-IfyqufkDDU",
    description: "A transformative, micro-emulsifying oil cleanser that melts stubborn sunblocks, pollutants, and heavy foundations on contact. Rinses off clean leaving skin baby silky-soft.",
    ingredients: "Golden Jojoba Oil, Safflower Extract, Olive-derived Squalane, Vitamin E (Alpha-tocopherol), Sweet Orange essential scent, Rosemary Bark extract.",
    directions: "Massage 2-3 pumps onto dry face with warmth of your fingers. Add a splash of lukewarm water to transform into a milky emulsion. Rinse thoroughly."
  },
  {
    id: "clar-nectar",
    name: "Clarifying Nectar Mask",
    category: "masks",
    skinType: "glow",
    price: 65,
    bestseller: false,
    tagline: "Purifying Balance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9iSiMq86FrL22l6AbuUV28uzKTnGB5otr6baktCRqPQFQMor4ETEYLB5CGMpWLg6cwFKpuTLbSY_nBMyDWrkb6ZPHuft9oCFpVpote0Dt1-1C36zcSrHLLzXf2vhsNMrUXe1npUEk2OVI-mgvV-_w7iFIBwUvnJYJxyRvhuny20vlltyCLCVgKNbZ5tDE8vg7jughRDLG3wYVOnjSa-5Fs5bY4d6YGkSw2tep0pfvF2jfnNeZ7afs6e7jlGTXHQa39777YKbbuaE",
    description: "An intensive botanical clay-based treatment that extracts impurities, detoxifies clogged pores, and restores visual vitality to tired, stressed, oily skin contours.",
    ingredients: "French Pink Clay, Bio-Active Manuka Honey, Organic Matcha Tea dust, Salicylic Acid (Willow extract), Calendula petal macerate, Ylang Ylang essential complex.",
    directions: "Paint a rich smooth layout over cleanse skin, avoiding eye circles. Relax for 10-15 minutes until dry, then scrub off gently with warm wet flannel cloth."
  },
  {
    id: "jade-cream",
    name: "Nourishing Jade Cream",
    category: "creams",
    skinType: "dry",
    price: 88,
    bestseller: true,
    tagline: "Fortified Hydration",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTppWXgi9rc0VfJVnK4oi29mo1xVHft5yiTpGHWo8zdn7TzRt_azVEDrhxSgV4DXwV-xh1lKfUmDue-R1J6RGuC7S2hagsXvj1wWPpCPM8Z5ZpCAroUSdQHwEMtso11Mcu-vybXe7JfKO_q5gkjml3pk-TCJCMxtShrDRNIIqAbE60mye7Vcd6nFMxl65qMIk2AbrmyLJ3sG-kt5NTKPpD8_LbozwQIKYw_IVN8VieU1TABiPfy5XuTSG8uOCuBluIegLxRVgFvc",
    description: "A rich, nutrient-dense moisturizer mimicking natural skin barrier lipids. Locks in vital dew levels, protects from elemental cell stress, and plumps fine dry surface areas.",
    ingredients: "Squalane, Evening Primrose Lipid Extracts, Licorice Root brightening concentrate, Organic Gotu Kola, Sandalwood Essential Hydrosol, Hyaluronic peptide.",
    directions: "Warm a pea-sized amount between palms. Press gently onto face, neck, and chest in delicate upward lines. Beautiful for day defense and night rejuvenation."
  },
  {
    id: "bot-mist",
    name: "Botanical Mist Tonic",
    category: "tonics",
    skinType: "sensitive",
    price: 38,
    bestseller: false,
    tagline: "Hydration Surge",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBL6ILuQGlwMu7Q_kZp9FCAxYONsLhOQ2g3ompHLCuzYWKXwE5FnRKMU8-BTpJNiZmeTlBPn0BD4wz5h7_rkmkB6evUEIUhRJF85lsV4_bRmI5S7kzOPZSxnZZg_uDQRgJhb4gZq8bI92jG48DvIEE13Nx5NwJAKuV596ABZSoy96fmSAEGGtn7Ph2e9jYpvuJd5TEKsNNXxVerwxAtC6WpOpUgWGf0JBCb_jC0uUke1URDpmeMncskx1GO_uG9G5G-IfyqufkDDU",
    description: "A weightless micro-fine mist that instantly charges cells with soothing moisture, calms redness, and primes your complexion for serums and treatments.",
    ingredients: "Alpine Rosewater, Organic Cucumber Hydrosol, Centella Asiatica plant-cells, Panthenol (Vitamin B5), Sacred Frankincense Oil.",
    directions: "Mist overhead and let drift organically onto warm skin pre-serums, or spray throughout the day over makeup to refresh skin's dewy bloom."
  }
];

// Initialize Cart State from LocalStorage
let cart = JSON.parse(localStorage.getItem('aurora_cart')) || [];

// Save Cart to LocalStorage and Update All UI Aspects
function updateCart() {
  localStorage.setItem('aurora_cart', JSON.stringify(cart));
  renderCartUI();
  updateHeaderBadges();
}

// Update the Cart Counter Bubble in Top bar
function updateHeaderBadges() {
  const badgeCounts = document.querySelectorAll('.cart-badge-count');
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);
  badgeCounts.forEach(b => {
    b.textContent = totalQty;
    if (totalQty > 0) {
      b.classList.remove('d-none');
    } else {
      b.classList.add('d-none');
    }
  });
}

// Add Item To Cart
function addToCart(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      tagline: prod.tagline,
      quantity: qty
    });
  }

  updateCart();
  showToast(`${prod.name} added to your Ritual Bag.`);
  
  // Open the slide drawer so user gets visual feedback
  openCartDrawer();
}

// Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Change Quantity
function changeQuantity(productId, offset) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += offset;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCart();
  }
}

// Render Side-Cart Drawer UI
function renderCartUI() {
  const cartContainer = document.querySelector('.cart-items-list');
  const cartSubtotalEl = document.querySelector('.cart-subtotal');
  
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center h-100 text-center py-5">
        <span class="material-symbols-outlined text-muted fs-1 mb-3">auto_awesome_motion</span>
        <h5 class="serif-font mb-2">Your Ritual Bag is Empty</h5>
        <p class="text-muted small px-4">Begin your transformation by exploring our essential formulas.</p>
        <a href="shop.html" class="btn-primary-custom py-3 px-4 mt-3 text-white text-decoration-none">Shop Collection</a>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = "$0.00";
    
    // Disable Checkout button if empty
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  // Render items
  let html = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    html += `
      <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
        <div class="d-flex align-items-center gap-3">
          <img src="${item.image}" alt="${item.name}" class="object-cover border" style="width: 70px; height: 85px;">
          <div>
            <h6 class="serif-font mb-0 text-truncate" style="max-width: 170px;">${item.name}</h6>
            <p class="text-muted small mb-1">${item.tagline}</p>
            <div class="d-flex align-items-center border" style="width: max-content;">
              <button class="btn btn-sm py-0 px-2" onclick="changeQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
              <span class="px-2 small">${item.quantity}</span>
              <button class="btn btn-sm py-0 px-2" onclick="changeQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
        <div class="text-end">
          <p class="mb-1 font-weight-bold">$${itemTotal}</p>
          <button class="btn btn-link btn-sm text-decoration-none p-0 text-muted" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
            <small>Remove</small>
          </button>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = html;
  if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  
  const checkoutBtn = document.querySelector('.btn-checkout');
  if (checkoutBtn) checkoutBtn.disabled = false;
}

// Toast Controller
function showToast(message) {
  let container = document.querySelector('.toast-container-custom');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-custom';
  toast.innerHTML = `
    <span>${message}</span>
    <span class="material-symbols-outlined fs-6" style="cursor: pointer;" onclick="this.parentElement.remove()">close</span>
  `;

  container.appendChild(toast);

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    toast.style.animation = 'slideInToast 0.3s ease reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4100);
}

// Search input autocomplete handler
function handleProductSearch(query) {
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  if (!query || query.trim() === '') {
    resultsContainer.innerHTML = '';
    return;
  }

  const filtered = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.tagline.toLowerCase().includes(query.toLowerCase()) || 
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No botanical solutions match "${query}"</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(p => {
    html += `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="d-flex align-items-center gap-3 p-3 bg-white border" style="cursor: pointer;" onclick="triggerQuickview('${p.id}'); closeSearchOverlay();">
          <img src="${p.image}" alt="${p.name}" class="object-cover border" style="width: 50px; height: 60px;">
          <div>
            <h6 class="serif-font mb-0">${p.name}</h6>
            <p class="text-muted small mb-0">${p.tagline} • $${p.price}</p>
          </div>
        </div>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
}

// Quick View Modal System
function triggerQuickview(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  // Insert structured details inside Quickview Modal Elements
  const modalImage = document.getElementById('qvImage');
  const modalName = document.getElementById('qvName');
  const modalTagline = document.getElementById('qvTagline');
  const modalPrice = document.getElementById('qvPrice');
  const modalDesc = document.getElementById('qvDesc');
  const modalIngredients = document.getElementById('qvIngredients');
  const modalDirections = document.getElementById('qvDirections');
  const qvAddBtn = document.getElementById('qvAddBtn');

  if (modalImage) modalImage.src = p.image;
  if (modalImage) modalImage.alt = p.name;
  if (modalName) modalName.textContent = p.name;
  if (modalTagline) modalTagline.textContent = p.tagline;
  if (modalPrice) modalPrice.textContent = `$${p.price}.00`;
  if (modalDesc) modalDesc.textContent = p.description;
  if (modalIngredients) modalIngredients.textContent = p.ingredients;
  if (modalDirections) modalDirections.textContent = p.directions;
  
  if (qvAddBtn) {
    // Rebind action with current product ID
    qvAddBtn.onclick = () => {
      addToCart(p.id);
      // Close Bootstrap modal programmatically or via trigger
      const modalEl = document.getElementById('quickviewModal');
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    };
  }

  // Show Modal using Bootstrap classes
  const modalEl = document.getElementById('quickviewModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// DOM Loading Events
document.addEventListener('DOMContentLoaded', () => {
  // Update badges on load
  updateHeaderBadges();
  renderCartUI();

  // Setup generic listeners
  const openCartButtons = document.querySelectorAll('.trigger-cart-open');
  openCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  const closeCartButton = document.querySelector('.trigger-cart-close');
  if (closeCartButton) {
    closeCartButton.addEventListener('click', closeCartDrawer);
  }

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartDrawer);
  }

  // Scroll animations / reveal elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

  // Newsletter Submit Listener
  const newsletterForms = document.querySelectorAll('.newsletter-form-submit');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        showToast(`Welcome! Curated skin insights sent to ${emailInput.value.trim()}`);
        emailInput.value = '';
      }
    });
  });
});

// Expose relevant handlers to window so static onclick attributes function correctly
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.triggerQuickview = triggerQuickview;
window.triggerCheckout = triggerCheckout;
