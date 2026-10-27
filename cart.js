const menu = [
  { id:1, title:"Lagos Jollof & Chicken", cat:"dish", price:4500, rating: "4.8", img:"https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=400&q=80" },
  { id:2, title:"Double Beef Burger", cat:"snack", price:3200, rating: "4.5", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
  { id:3, title:"Spiced Shawarma Wrap", cat:"snack", price:2500, rating: "4.7", img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
  { id:4, title:"Rich Egusi & Semo Combo", cat:"dish", price:5000, rating: "4.9", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
  { id:5, title:"Crispy Fries & BBQ Wings", cat:"snack", price:4000, rating: "4.6", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:6, title:"Natural Fruit Chapman", cat:"drink", price:1500, rating: "4.4", img:"https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80" },
  { id:7, title:"Ice Chilled Coke (Can)", cat:"drink", price:800, rating: "4.9", img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" },
  { id:8, title:"Smoky Party Jollof Rice", cat:"dish", price:3800, rating: "4.8", img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80" },
  { id:9, title:"Pepper Soup with Goat Meat", cat:"dish", price:5200, rating: "4.7", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
  { id:10, title:"Grilled Tilapia & Plantain", cat:"dish", price:6800, rating: "4.9", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80" },
  { id:11, title:"Beef Suya Rice Bowl", cat:"dish", price:4700, rating: "4.6", img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80" },
  { id:12, title:"Ofada Rice & Ayamase", cat:"dish", price:5500, rating: "4.9", img:"https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=400&q=80" },
  { id:13, title:"Efo Riro & Pounded Yam", cat:"dish", price:5000, rating: "4.8", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
  { id:14, title:"Coconut Curry Chicken", cat:"dish", price:4900, rating: "4.7", img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80" },
  { id:15, title:"Grilled Suya Chicken", cat:"dish", price:4300, rating: "4.6", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:16, title:"Fried Rice & Grilled Turkey", cat:"dish", price:5300, rating: "4.8", img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80" },
  { id:17, title:"Seafood Okra & Fufu", cat:"dish", price:6200, rating: "4.9", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
  { id:18, title:"Beans Porridge & Dodo", cat:"dish", price:3000, rating: "4.5", img:"https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=400&q=80" },
  { id:19, title:"Asun & Spicy Jollof", cat:"dish", price:5100, rating: "4.8", img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80" },
  { id:20, title:"Chicken Alfredo Pasta", cat:"dish", price:4800, rating: "4.7", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80" },
  { id:21, title:"Beef Lasagna Slice", cat:"dish", price:4500, rating: "4.6", img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80" },
  { id:22, title:"Classic Margherita Pizza", cat:"snack", price:6000, rating: "4.8", img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80" },
  { id:23, title:"Crispy Chicken Sandwich", cat:"snack", price:2900, rating: "4.5", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
  { id:24, title:"Loaded Cheese Fries", cat:"snack", price:2700, rating: "4.6", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:25, title:"Beef Suya Skewers", cat:"snack", price:3500, rating: "4.9", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:26, title:"Chicken Spring Rolls", cat:"snack", price:1800, rating: "4.4", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:27, title:"Mini Beef Samosas", cat:"snack", price:1700, rating: "4.5", img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80" },
  { id:28, title:"Chicken Shawarma Deluxe", cat:"snack", price:3200, rating: "4.8", img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
  { id:29, title:"Classic Hot Dog", cat:"snack", price:2400, rating: "4.3", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
  { id:30, title:"Crispy Fish Fingers", cat:"snack", price:3100, rating: "4.6", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80" },
  { id:31, title:"Plantain Chips & Dip", cat:"snack", price:1400, rating: "4.4", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:32, title:"Grilled Chicken Tacos", cat:"snack", price:3600, rating: "4.7", img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80" },
  { id:33, title:"BBQ Chicken Pizza Slice", cat:"snack", price:2800, rating: "4.8", img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80" },
  { id:34, title:"Mozzarella Cheese Sticks", cat:"snack", price:2200, rating: "4.5", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" },
  { id:35, title:"Fresh Mango Smoothie", cat:"drink", price:2200, rating: "4.8", img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80" },
  { id:36, title:"Pineapple Ginger Juice", cat:"drink", price:1800, rating: "4.7", img:"https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80" },
  { id:37, title:"Creamy Vanilla Milkshake", cat:"drink", price:2500, rating: "4.6", img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80" },
  { id:38, title:"Iced Mocha Coffee", cat:"drink", price:2600, rating: "4.5", img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" },
  { id:39, title:"Zobo Hibiscus Cooler", cat:"drink", price:1200, rating: "4.8", img:"https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80" },
  { id:40, title:"Fresh Orange Juice", cat:"drink", price:1700, rating: "4.6", img:"https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80" },
  { id:41, title:"Sparkling Lemonade", cat:"drink", price:1600, rating: "4.4", img:"https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80" },
  { id:42, title:"Strawberry Yogurt Smoothie", cat:"drink", price:2400, rating: "4.7", img:"https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80" },
  { id:43, title:"Chocolate Fudge Brownie", cat:"dessert", price:2000, rating: "4.9", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
  { id:44, title:"Classic New York Cheesecake", cat:"dessert", price:3200, rating: "4.8", img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
  { id:45, title:"Warm Apple Crumble", cat:"dessert", price:2800, rating: "4.6", img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
  { id:46, title:"Vanilla Bean Ice Cream", cat:"dessert", price:1800, rating: "4.7", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
  { id:47, title:"Red Velvet Cake Slice", cat:"dessert", price:2500, rating: "4.8", img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
  { id:48, title:"Cinnamon Sugar Doughnuts", cat:"dessert", price:1600, rating: "4.5", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
  { id:49, title:"Lemon Drizzle Cake", cat:"dessert", price:2300, rating: "4.6", img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
  { id:50, title:"Chocolate Chip Cookies", cat:"dessert", price:1400, rating: "4.7", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" }
];

const deliveryFee = 1500;
const storageKey = "chowhubCustomerName";
const ordersStorageKey = "chowhub_orders";
let cart = [];

const foodList = document.getElementById("food-list");
const cartTray = document.getElementById("cart-tray");
const cartCount = document.getElementById("cart-count");
const subtotalElement = document.getElementById("sub-total");
const grandTotalElement = document.getElementById("grand-total");
const welcomeMessage = document.getElementById("welcome-message");
const drawer = document.getElementById("site-drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const menuToggle = document.getElementById("menu-toggle");
const cartToggle = document.getElementById("cart-toggle");
const onboardingBackdrop = document.getElementById("onboarding-backdrop");
const onboardingForm = document.getElementById("onboarding-form");
const onboardingName = document.getElementById("onboarding-name");
const onboardingError = document.getElementById("onboarding-error");
const checkoutForm = document.getElementById("checkout-form");
const checkoutError = document.getElementById("checkout-error");
const drawerMessage = document.getElementById("drawer-message");
const contentModalBackdrop = document.getElementById("content-modal-backdrop");
const contentModal = document.getElementById("content-modal");
const contentModalTitle = document.getElementById("content-modal-title");
const contentModalEyebrow = document.getElementById("content-modal-eyebrow");
const contentModalBody = document.getElementById("content-modal-body");
const assistantToggle = document.getElementById("assistant-toggle");
const assistantPopover = document.getElementById("assistant-popover");
let lastModalTrigger = null;

function formatPrice(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function renderMenu(items) {
  foodList.innerHTML = items.map((item) => `
    <article class="food-card">
      <div class="food-image-wrap">
        <img class="food-image" src="${item.img}" alt="${item.title}" loading="lazy" width="400" height="282">
        <span class="rating" aria-label="${item.rating} out of 5 stars">
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 1.7 2.55 5.17 5.7.83-4.13 4.02.98 5.68L10 14.72l-5.1 2.68.98-5.68L1.75 7.7l5.7-.83L10 1.7Z"></path></svg>
          ${item.rating}
        </span>
      </div>
      <div class="food-details">
        <p class="food-category">${categoryLabel(item.cat)}</p>
        <h3 class="food-title">${item.title}</h3>
        <div class="food-bottom">
          <span class="food-price">${formatPrice(item.price)}</span>
          <button class="add-btn" type="button" data-add-item="${item.id}" aria-label="Add ${item.title} to tray">Add to Tray</button>
        </div>
      </div>
    </article>
  `).join("");
}

function categoryLabel(category) {
  const labels = {
    dish: "Rich meal",
    snack: "Lite bite",
    drink: "Drink",
    dessert: "Dessert"
  };
  return labels[category] || "Menu item";
}

function filterItems(category) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderMenu(category === "all" ? menu : menu.filter((item) => item.cat === category));
}

function addToTray(id) {
  const item = menu.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  const existingItem = cart.find((entry) => entry.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateTray();
}

function changeQty(id, change) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  item.qty += change;
  cart = cart.filter((entry) => entry.qty > 0);
  updateTray();
}

function updateTray() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);

  cartCount.textContent = String(itemCount);
  subtotalElement.textContent = formatPrice(subtotal);
  grandTotalElement.textContent = formatPrice(subtotal + (itemCount > 0 ? deliveryFee : 0));

  if (cart.length === 0) {
    cartTray.innerHTML = '<div class="empty-cart"><strong>Your tray is waiting</strong><span>Add something delicious to get started.</span></div>';
    return;
  }

  cartTray.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <img class="cart-item-image" src="${item.img}" alt="" width="58" height="58">
      <div class="cart-item-info">
        <span class="cart-item-title">${item.title}</span>
        <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
      </div>
      <div class="quantity-controls" aria-label="${item.title} quantity">
        <button type="button" data-quantity-change="-1" data-item-id="${item.id}" aria-label="Remove one ${item.title}">−</button>
        <span>${item.qty}</span>
        <button type="button" data-quantity-change="1" data-item-id="${item.id}" aria-label="Add one ${item.title}">+</button>
      </div>
    </div>
  `).join("");
}

function setWelcome(name) {
  const strong = document.createElement("strong");
  strong.textContent = name.trim();
  welcomeMessage.replaceChildren(document.createTextNode("Welcome, "), strong);
  document.getElementById("cust-name").value = name.trim();
}

function openOnboarding() {
  onboardingBackdrop.hidden = false;
  requestAnimationFrame(() => onboardingBackdrop.classList.add("is-visible"));
  document.body.classList.add("has-open-panel");
  window.setTimeout(() => onboardingName.focus(), 0);
}

function closeOnboarding() {
  menuToggle.focus();
  onboardingBackdrop.classList.remove("is-visible");
  window.setTimeout(() => {
    onboardingBackdrop.hidden = true;
    document.body.classList.remove("has-open-panel");
  }, 220);
}

function openPanel(panel, overlay, toggle) {
  closePanel(drawer, drawerOverlay, menuToggle);
  closePanel(cartPanel, cartOverlay, cartToggle);
  overlay.hidden = false;
  panel.inert = false;
  panel.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
    panel.classList.add("is-open");
  });
  document.body.classList.add("has-open-panel");
  const focusTarget = panel.querySelector("button, a, input, textarea");
  if (focusTarget) {
    window.setTimeout(() => focusTarget.focus(), 0);
  }
}

function closePanel(panel, overlay, toggle) {
  if (panel.contains(document.activeElement)) {
    toggle.focus();
  }
  panel.classList.remove("is-open");
  panel.inert = true;
  panel.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
  overlay.classList.remove("is-visible");
  if (!drawer.classList.contains("is-open") && !cartPanel.classList.contains("is-open") && onboardingBackdrop.hidden) {
    document.body.classList.remove("has-open-panel");
  }
  if (!overlay.hidden) {
    window.setTimeout(() => {
      if (!panel.classList.contains("is-open")) {
        overlay.hidden = true;
      }
    }, 220);
  }
}

function loadOrders() {
  const storedOrders = window.localStorage.getItem(ordersStorageKey);
  if (!storedOrders) {
    return [];
  }
  const orders = JSON.parse(storedOrders);
  if (!Array.isArray(orders)) {
    throw new Error("Saved order history is not in the expected format.");
  }
  return orders;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function closeContentModal() {
  contentModal.classList.remove("is-open");
  contentModal.inert = true;
  contentModal.setAttribute("aria-hidden", "true");
  contentModalBackdrop.classList.remove("is-visible");
  window.setTimeout(() => {
    contentModalBackdrop.hidden = true;
  }, 220);
  document.body.classList.remove("has-open-panel");
  if (lastModalTrigger && lastModalTrigger.isConnected) {
    lastModalTrigger.focus();
  }
}

function openContentModal(title, eyebrow, html, trigger = document.activeElement) {
  lastModalTrigger = trigger;
  contentModalTitle.textContent = title;
  contentModalEyebrow.textContent = eyebrow;
  contentModalBody.innerHTML = html;
  contentModalBackdrop.hidden = false;
  contentModal.inert = false;
  contentModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-open-panel");
  requestAnimationFrame(() => {
    contentModalBackdrop.classList.add("is-visible");
    contentModal.classList.add("is-open");
  });
  document.querySelector(".content-modal-close").focus();
}

function renderOrders() {
  let orders;
  try {
    orders = loadOrders();
  } catch (error) {
    openContentModal("Your orders", "Order history", `<p class="modal-error">Order history could not be loaded: ${escapeHtml(error.message)}</p>`);
    return;
  }

  if (orders.length === 0) {
    openContentModal("Your orders", "Order history", '<div class="modal-empty"><span class="modal-empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 7h14v14H5zM8 7V5a4 4 0 0 1 8 0v2"></path></svg></span><h3>No orders yet</h3><p>Your dispatched orders will appear here.</p></div>');
    return;
  }

  const orderCards = [...orders].reverse().map((order) => {
    const date = new Date(Number(order.timestamp));
    const formattedDate = Number.isNaN(date.getTime()) ? "Date unavailable" : date.toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" });
    const items = Array.isArray(order.items) ? order.items : [];
    return `<article class="order-history-card">
      <div class="order-card-top"><div><span class="order-reference">${escapeHtml(order.id || "ChowHub order")}</span><time>${escapeHtml(formattedDate)}</time></div><strong>${formatPrice(Number(order.total) || 0)}</strong></div>
      <ul>${items.map((item) => `<li>${escapeHtml(item.title)} <span>x${escapeHtml(item.qty)}</span></li>`).join("")}</ul>
      <p class="order-recipient">Buyer: ${escapeHtml(order.name || "Not provided")}</p>
    </article>`;
  }).join("");
  openContentModal("Your orders", "Order history", `<div class="order-history-list">${orderCards}</div>`);
}

function renderTracking() {
  let orders;
  try {
    orders = loadOrders();
  } catch (error) {
    openContentModal("Track your order", "Order tracking", `<p class="modal-error">Order tracking could not be loaded: ${escapeHtml(error.message)}</p>`);
    return;
  }

  const latestOrder = orders.reduce((latest, order) => (
    !latest || Number(order.timestamp) > Number(latest.timestamp) ? order : latest
  ), null);
  if (!latestOrder) {
    openContentModal("Track your order", "Order tracking", '<div class="modal-empty"><span class="modal-empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"></path><circle cx="7.5" cy="18" r="1.5"></circle><circle cx="18" cy="18" r="1.5"></circle></svg></span><h3>No active order</h3><p>Dispatch an order to follow its journey here.</p></div>');
    return;
  }

  const timestamp = Number(latestOrder.timestamp);
  const daysPassed = Number.isFinite(timestamp) ? Math.max(0, Math.floor((Date.now() - timestamp) / 86400000)) : 0;
  const activeStage = daysPassed <= 2 ? 0 : daysPassed <= 5 ? 1 : 2;
  const statusText = activeStage === 0 ? "Processing..." : activeStage === 1 ? "Shipping..." : "Delivered!";
  const progress = [16, 58, 100][activeStage];
  const steps = [
    { title: "Processing", detail: "Your order is being prepared.", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M6 8l1 12h10l1-12M9 8V5a3 3 0 0 1 6 0v3"></path></svg>' },
    { title: "Shipping", detail: "Your order is on its way.", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"></path><circle cx="7.5" cy="18" r="1.5"></circle><circle cx="18" cy="18" r="1.5"></circle></svg>' },
    { title: "Delivered", detail: "Your meal has reached its destination.", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path><circle cx="12" cy="12" r="9"></circle></svg>' }
  ];
  const timeline = steps.map((step, index) => {
    const state = index < activeStage ? "is-complete" : index === activeStage ? "is-current" : "";
    return `<li class="tracking-step ${state}"><span class="tracking-step-icon">${step.icon}</span><span class="tracking-step-copy"><strong>${step.title}</strong><span>${step.detail}</span></span></li>`;
  }).join("");
  const date = new Date(timestamp);
  const orderDate = Number.isNaN(date.getTime()) ? "Date unavailable" : date.toLocaleDateString("en-NG", { dateStyle: "long" });
  openContentModal("Track your order", "Order tracking", `
    <div class="tracking-summary"><span class="tracking-status">${statusText}</span><p>${daysPassed} ${daysPassed === 1 ? "day" : "days"} since dispatch</p><span>Order placed ${escapeHtml(orderDate)}</span></div>
    <div class="tracking-progress" aria-label="Order progress"><span style="width:${progress}%"></span></div>
    <ol class="tracking-timeline">${timeline}</ol>
    <p class="tracking-disclaimer">This tracking timeline is a 7-day delivery estimate.</p>
  `);
}

function submitOrder(event) {
  event.preventDefault();
  checkoutError.hidden = true;
  checkoutError.textContent = "";

  const name = document.getElementById("cust-name").value.trim();
  const address = document.getElementById("cust-addr").value.trim();
  if (cart.length === 0) {
    checkoutError.textContent = "Add at least one item to your tray before dispatching your order.";
    checkoutError.hidden = false;
    return;
  }
  if (!name || !address) {
    checkoutError.textContent = "Enter your full name and delivery address to continue.";
    checkoutError.hidden = false;
    (!name ? document.getElementById("cust-name") : document.getElementById("cust-addr")).focus();
    return;
  }

  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const total = subtotal + deliveryFee;
  const timestamp = Date.now();
  const order = {
    id: `CH-${timestamp}`,
    items: cart.map((item) => ({ id: item.id, title: item.title, price: item.price, qty: item.qty })),
    subtotal,
    deliveryFee,
    total,
    timestamp,
    name,
    address
  };
  let orders;
  try {
    orders = loadOrders();
    orders.push(order);
    window.localStorage.setItem(ordersStorageKey, JSON.stringify(orders));
  } catch (error) {
    checkoutError.textContent = `Your order could not be saved for tracking: ${error.message}`;
    checkoutError.hidden = false;
    return;
  }

  const lines = [
    "Hello, this buyer wants to buy these products on this account:",
    ...cart.map((item) => `- ${item.title} (x${item.qty}) - ${formatPrice(item.price * item.qty)}`),
    `Grand Total: ${formatPrice(total)}`,
    `Buyer Name: ${name}`,
    `Delivery Address: ${address}`,
    "I want to pay the money, please send the account number so I can send the receipt."
  ];
  const whatsappUrl = `https://wa.me/2349030221179?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) {
    filterItems(button.dataset.category);
  }
});

foodList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-item]");
  if (button) {
    addToTray(Number(button.dataset.addItem));
  }
});

cartTray.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity-change]");
  if (button) {
    changeQty(Number(button.dataset.itemId), Number(button.dataset.quantityChange));
  }
});

menuToggle.addEventListener("click", () => openPanel(drawer, drawerOverlay, menuToggle));
cartToggle.addEventListener("click", () => openPanel(cartPanel, cartOverlay, cartToggle));
drawerOverlay.addEventListener("click", () => closePanel(drawer, drawerOverlay, menuToggle));
cartOverlay.addEventListener("click", () => closePanel(cartPanel, cartOverlay, cartToggle));
document.querySelector(".close-drawer").addEventListener("click", () => closePanel(drawer, drawerOverlay, menuToggle));
document.querySelector(".close-cart").addEventListener("click", () => closePanel(cartPanel, cartOverlay, cartToggle));

document.querySelectorAll("[data-drawer-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const destination = link.dataset.drawerLink;
    if (destination === "orders") {
      closePanel(drawer, drawerOverlay, menuToggle);
      renderOrders();
      return;
    }
    if (destination === "tracking") {
      closePanel(drawer, drawerOverlay, menuToggle);
      renderTracking();
      return;
    }
    drawerMessage.textContent = "Your account details are ready to be managed here.";
    drawerMessage.hidden = false;
  });
});

onboardingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = onboardingName.value.trim();
  if (!name) {
    onboardingError.textContent = "Please enter your name to continue.";
    onboardingError.hidden = false;
    onboardingName.focus();
    return;
  }

  try {
    window.localStorage.setItem(storageKey, name);
  } catch (error) {
    onboardingError.textContent = "Your browser could not save your name. Please check your privacy settings and try again.";
    onboardingError.hidden = false;
    return;
  }
  setWelcome(name);
  closeOnboarding();
});

checkoutForm.addEventListener("submit", submitOrder);

document.querySelector(".content-modal-close").addEventListener("click", closeContentModal);
contentModalBackdrop.addEventListener("click", (event) => {
  if (event.target === contentModalBackdrop) {
    closeContentModal();
  }
});

assistantToggle.addEventListener("click", () => {
  const isOpen = !assistantPopover.hidden;
  assistantPopover.hidden = isOpen;
  assistantToggle.setAttribute("aria-expanded", String(!isOpen));
  assistantToggle.setAttribute("aria-label", isOpen ? "Open automated assistant" : "Close automated assistant");
});

assistantPopover.addEventListener("click", (event) => {
  const action = event.target.closest("[data-assistant-action]");
  if (action) {
    assistantPopover.hidden = true;
    assistantToggle.setAttribute("aria-expanded", "false");
    assistantToggle.setAttribute("aria-label", "Open automated assistant");
    if (action.dataset.assistantAction === "cart") {
      openPanel(cartPanel, cartOverlay, cartToggle);
    } else {
      renderTracking(action);
    }
    return;
  }
  if (event.target.closest("a")) {
    assistantPopover.hidden = true;
    assistantToggle.setAttribute("aria-expanded", "false");
    assistantToggle.setAttribute("aria-label", "Open automated assistant");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !onboardingBackdrop.hidden) {
    return;
  }
  if (!contentModalBackdrop.hidden) {
    closeContentModal();
  } else if (!assistantPopover.hidden) {
    assistantPopover.hidden = true;
    assistantToggle.setAttribute("aria-expanded", "false");
    assistantToggle.focus();
  } else if (cartPanel.classList.contains("is-open")) {
    closePanel(cartPanel, cartOverlay, cartToggle);
  } else if (drawer.classList.contains("is-open")) {
    closePanel(drawer, drawerOverlay, menuToggle);
  }
});

renderMenu(menu);
updateTray();

try {
  const savedName = window.localStorage.getItem(storageKey);
  if (savedName && savedName.trim()) {
    setWelcome(savedName);
  } else {
    openOnboarding();
  }
} catch (error) {
  openOnboarding();
  onboardingError.textContent = "Your browser could not access saved information. Please enter your name to continue.";
  onboardingError.hidden = false;
}