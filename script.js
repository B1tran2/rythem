const sections = ['home', 'catalogue', 'cart', 'about'];
const filters = ['All', 'Tees', 'Hoodies', 'Outerwear', 'Accessories', 'Concepts'];
const products = [
  { id: 'origin-tee', name: 'RYTHEM Origin Tee', price: 55, status: 'First Drop', category: 'Tees', real: true, description: 'Founding silhouette. Clean cut, bold pulse print, made to be felt.' },
  { id: 'locked-oversized-tee', name: 'Oversized Tee', price: 62, status: 'Locked Drop', category: 'Tees', description: 'Boxy shape with graffiti-line embroidery, currently in vault preview.' },
  { id: 'spray-hoodie', name: 'Spray Hoodie', price: 95, status: 'Prototype', category: 'Hoodies', description: 'Heavyweight fleece with layered spray gradients and rhythmic stitch paths.' },
  { id: 'metro-shell', name: 'Metro Shell Jacket', price: 140, status: 'Concept Piece', category: 'Outerwear', description: 'Reflective shell with movement mapping seams and tonal urban camo textures.' },
  { id: 'echo-cargo', name: 'Echo Cargo Pants', price: 112, status: 'Archive Preview', category: 'Concepts', description: 'Multi-pocket utility fit with trailing line graphics inspired by long exposure.' },
  { id: 'beat-cap', name: 'Beat Cap', price: 40, status: 'Coming Soon', category: 'Accessories', description: 'Low-profile cap with metronome insignia and adjustable rhythm strap.' },
];

let activeSection = 'home';
let activeFilter = 'All';
let devMode = true;
const cart = {};

const navTabs = document.getElementById('navTabs');
const filtersEl = document.getElementById('filters');
const productGrid = document.getElementById('productGrid');
const cartContent = document.getElementById('cartContent');
const cartMeta = document.getElementById('cartMeta');
const cartFab = document.getElementById('cartFab');
const povToggle = document.getElementById('povToggle');
const modeTag = document.getElementById('modeTag');
const modeLabel = document.getElementById('modeLabel');
const toggleKnob = document.getElementById('toggleKnob');
const devPill = document.getElementById('devPill');

const showSection = (id) => {
  activeSection = id;
  sections.forEach((s) => {
    document.getElementById(s).classList.toggle('active', s === id);
  });
  document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t.dataset.section === id));
};

navTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  showSection(btn.dataset.section);
});

document.querySelectorAll('[data-jump]').forEach((btn) => {
  btn.addEventListener('click', () => showSection(btn.dataset.jump));
});

filters.forEach((filter) => {
  const btn = document.createElement('button');
  btn.className = `filter ${filter === activeFilter ? 'active' : ''}`;
  btn.textContent = filter;
  btn.onclick = () => {
    activeFilter = filter;
    renderFilters();
    renderProducts();
  };
  filtersEl.appendChild(btn);
});

function renderFilters() {
  [...filtersEl.children].forEach((btn) => {
    btn.classList.toggle('active', btn.textContent === activeFilter);
  });
}

function addToCart(id) { cart[id] = (cart[id] || 0) + 1; renderCart(); }
function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id] -= 1;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function renderProducts() {
  productGrid.innerHTML = '';
  products
    .filter((p) => activeFilter === 'All' || p.category === activeFilter)
    .forEach((p) => {
      const card = document.createElement('article');
      card.className = 'card product';
      card.innerHTML = `
        <div class="badge">${p.status}</div>
        <div class="product-media ${p.real ? 'placeholder' : ''}">
          ${p.real ? 'Replace with real shirt image here' : ''}
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-foot">
          <strong>£${p.price}</strong>
          <button class="add" data-add="${p.id}">Add to cart</button>
        </div>
        <p class="dev-only note ${p.real ? '' : 'hidden'}">DEV NOTE: Replace this placeholder with your real T-shirt image.</p>
      `;
      productGrid.appendChild(card);
    });

  productGrid.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.dataset.add));
  });
  updateDevVisibility();
}

function renderCart() {
  const items = Object.entries(cart).map(([id, quantity]) => ({ ...products.find((p) => p.id === id), quantity })).filter(Boolean);
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  cartMeta.textContent = `A clean demo cart for live presentation flow. ${itemCount} item${itemCount === 1 ? '' : 's'} selected.`;
  cartFab.textContent = itemCount ? `Cart (${itemCount})` : 'Cart';

  if (!items.length) {
    cartContent.innerHTML = '<div class="card" style="margin-top:10px;border-style:dashed;color:#52525b">Your rhythm bag is empty. Add a piece from the drop.</div>';
    return;
  }

  cartContent.innerHTML = items.map((item) => `
      <div class="cart-line">
        <div>
          <strong>${item.name}</strong>
          <p class="muted">£${item.price} each</p>
        </div>
        <div class="qty">
          <button class="icon-btn" data-minus="${item.id}">−</button>
          <span>${item.quantity}</span>
          <button class="icon-btn" data-plus="${item.id}">+</button>
        </div>
      </div>
    `).join('') + `
    <div class="cart-summary">
      <div style="display:flex;justify-content:space-between"><span>Demo subtotal</span><strong>£${total}</strong></div>
      <button class="btn" style="width:100%;margin-top:10px;background:#fff">Showcase Checkout (Disabled)</button>
    </div>
  `;

  cartContent.querySelectorAll('[data-plus]').forEach((btn) => btn.onclick = () => addToCart(btn.dataset.plus));
  cartContent.querySelectorAll('[data-minus]').forEach((btn) => btn.onclick = () => removeFromCart(btn.dataset.minus));
}

function updateDevVisibility() {
  document.querySelectorAll('.dev-only').forEach((el) => el.classList.toggle('hidden', !devMode));
  modeTag.textContent = devMode ? 'DEV' : 'CLIENT';
  modeLabel.textContent = devMode ? 'Developer POV' : 'Client POV';
  modeTag.style.background = devMode ? '#ffedd5' : '#f4f4f5';
  modeTag.style.color = devMode ? '#c2410c' : '#3f3f46';
  document.querySelector('.switch').style.background = devMode ? '#fb923c' : '#d4d4d8';
  toggleKnob.style.transform = devMode ? 'translateX(20px)' : 'translateX(0)';
  devPill.style.display = devMode ? 'block' : 'none';
}

povToggle.addEventListener('click', () => {
  devMode = !devMode;
  updateDevVisibility();
});

cartFab.addEventListener('click', () => showSection('cart'));

document.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('cursorGlow');
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

renderFilters();
renderProducts();
renderCart();
updateDevVisibility();
showSection('home');
