# 🪔 DesiDirect — Modern Rural Marketplace

> **Connecting you directly with master artisans. Experience the warmth of tradition paired with the convenience of modern commerce.**

DesiDirect is a full-featured, production-ready e-commerce web platform that bridges the gap between rural artisans and global buyers — ensuring 100% of profits flow directly to creators.

---

## 🌟 Features

### 🛍️ Storefront & Discovery
- **Home Page** — Parallax hero with animated floating cards, live statistics counters, and a curated product showcase
- **Marketplace** — Browse & filter handcrafted products across categories (Ceramics, Textiles, Home Décor, Organic Pantry)
- **Product Details** — Rich product pages with image gallery, artisan credits, and add-to-cart
- **Products Listing** — Full catalogue with category-wise filtering

### 🎨 Artisan Ecosystem
- **Artisans Directory** — Discover verified artisan profiles dynamically loaded from Firestore
- **Producer Dashboard** — Artisans can register, manage their profile & list/edit products
- **Artisan Filtering** — Products filtered by artisan identity across the platform

### 🔐 Authentication (Firebase)
- **Email / Password** Sign-Up & Sign-In
- **Google OAuth** One-click login
- **Phone OTP** Authentication
- **Persistent Sessions** — Auth state synced across all pages via `auth-sync.js`
- **User Account Page** — View profile, orders, and manage account settings

### 🛒 Shopping & Checkout
- **Cart** — Add, remove, and update quantities; totals calculated live
- **Checkout** — Address form with cart summary pulled from `localStorage`
- **Payment Integration (Razorpay)** — Secure payment gateway with live cart data passed to the order
- **Order Confirmation** — Post-payment confirmation page

### 🛡️ Admin Portal
- **Admin Login** — Password-protected entry point (accessible via the subtle footer link or login page)
- **Admin Dashboard** — Manage products, view orders, and oversee artisan registrations
- **Auth Guard** — Unauthenticated users are redirected away from admin pages

---

## 🗂️ Project Structure

```
DesiDirect/
├── index.html              # Home / Landing page
├── marketplace.html        # Product discovery & filtering
├── products.html           # Full product catalogue
├── product-details.html    # Individual product view
├── artisans.html           # Artisan directory
├── cart.html               # Shopping cart
├── checkout.html           # Checkout form
├── payment.html            # Razorpay payment page
├── confirmation.html       # Order confirmation
├── login.html              # User & Admin login
├── signup.html             # New user registration
├── account.html            # User account & profile
├── about.html              # Brand story & sustainability
├── producer-dashboard.html # Artisan self-service portal
├── admin.html              # Admin dashboard
├── admin-login.html        # Admin auth gate
│
├── css/
│   ├── style.css           # Global design system & components
│   ├── animations.css      # Keyframe animations & effects
│   └── admin.css           # Admin panel styles
│
├── js/
│   ├── firebase.js         # Firebase app initialisation & exports
│   ├── auth-sync.js        # Cross-page auth state synchronisation
│   ├── app.js              # Core UI logic (nav, cart badge, etc.)
│   ├── animations.js       # Particle canvas, parallax, counters
│   ├── login.js            # Auth flows (email, Google, phone OTP)
│   ├── register.js         # Sign-up & producer registration
│   ├── products.js         # Product listing & filtering logic
│   ├── artisans.js         # Artisan directory & profile rendering
│   └── admin.js            # Admin dashboard logic & Firestore CRUD
│
└── assets/
    └── images/             # Logo, product images, artisan photos
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (custom design system) |
| Interactivity | Vanilla JavaScript (ES Modules) |
| Backend / Auth | Firebase Authentication |
| Database | Cloud Firestore |
| Payments | Razorpay Payment Gateway |
| Icons | Boxicons 2.x |
| Fonts | Google Fonts — Outfit & Inter |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- A Firebase project with **Authentication** and **Firestore** enabled
- A Razorpay account (test keys for development)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shrutiii450/DesiDirect.git
   cd DesiDirect
   ```

2. **Configure Firebase**

   Open `js/firebase.js` and replace the config object with your own Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Configure Razorpay**

   In `payment.html`, replace the Razorpay key with your test/live key:
   ```javascript
   key: "rzp_test_YOUR_KEY_HERE"
   ```

4. **Run locally**

   Since this is a pure HTML/CSS/JS project, simply open `index.html` in your browser, or serve it with any static file server:
   ```bash
   # Using VS Code Live Server extension (recommended)
   # or
   npx serve .
   ```

---

## 🔑 Admin Access

The admin portal is accessible via a discreet link in the footer (`Admin Portal`) or from the login page.

- Navigate to `/login.html` and use the **Admin** tab
- Valid admin credentials are managed via Firebase Auth
- Unauthenticated access to `/admin.html` is automatically redirected to the admin login

---

## 🌱 Design System

DesiDirect uses a hand-crafted CSS design system with:

- **Glassmorphism** panels (`glass-panel`, `glass-nav`, `glass-footer`)
- **HSL-tuned colour palette** — warm saffron primary, earthy accents
- **Smooth animations** — floating cards, particle canvas background, scroll-triggered counters
- **Micro-interactions** — hover lift effects, wishlist toggles, cart badge updates
- **Responsive layouts** — mobile-first grid and flex layouts

---

## 📄 License

This project is for educational and portfolio purposes.

---

*© 2026 DesiDirect Marketplace. Made with ❤️ for India's artisans.*
