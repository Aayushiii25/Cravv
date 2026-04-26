# 🍕 Cravv — Food Delivery & Reels

A modern, production-grade food delivery web app inspired by Swiggy/Zomato, featuring a **TikTok-style reels discovery feed** and a full **delivery partner dashboard**.

Built with **React 19 + Vite + Tailwind CSS v4** on the frontend, backed by a **Node.js + Express + MongoDB** API.

---

## ✨ Features

### Customer App
- 🏠 **Home** — Promo carousel, circular food categories, restaurant grid
- 🍽️ **Restaurant Menu** — Add-to-cart with veg/non-veg indicators, bestseller tags
- 🛒 **Cart** — Bill breakdown, promo codes, checkout flow
- 🔐 **Auth** — Email/password login + Phone OTP (connected to backend)

### Reels
- 🎬 **Vertical video feed** — Fullscreen snap-scroll, auto-play/pause via `IntersectionObserver`
- ❤️ Like, save, mute, share overlays

### Delivery Partner App
- 📱 **Partner Login** — Phone OTP authentication
- 📊 **Dashboard** — Online/offline toggle, earnings stats, incoming order cards
- 🛵 **Active Order** — Step-by-step delivery status flow (Accept → Pickup → Deliver)
- 💰 **Earnings** — Weekly bar chart + tips
- 📋 **History** — Filterable order history

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + Vite |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) |
| **Routing** | React Router v7 |
| **HTTP** | Axios (with Vite proxy to backend) |
| **Icons** | React Icons (Feather) |
| **Backend** | Node.js + Express + MongoDB |
| **Auth** | JWT + bcrypt (backend) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/         # Shimmer loaders
│   ├── home/           # PromoBanner, CategoryBar, RestaurantCard
│   └── layout/         # Navbar, BottomNav
├── context/
│   ├── AuthContext.jsx  # JWT auth state
│   └── CartContext.jsx  # Cart state (restaurant-isolated)
├── pages/
│   ├── customer/       # Home, Restaurant, Cart, Login, Register
│   ├── partner/        # Login, Dashboard, ActiveOrder, Earnings, History
│   └── reels/          # ReelsFeed (vertical video)
├── services/
│   ├── api.js          # Axios instance + API functions
│   └── mockData.js     # Mock restaurants, menus, partner data
├── App.jsx             # Router + providers
├── main.jsx            # Entry point
└── index.css           # Design system tokens + utilities
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **MongoDB** running locally or a connection string
- Backend server (see `../backend/`)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The app runs at **http://localhost:5173** (or next available port).

### Backend Proxy

Vite is configured to proxy `/api` requests to the backend at `http://localhost:3000`:

```js
// vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```

Start the backend separately:

```bash
cd ../backend
npm install
npm start
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary** | `#FF5200` (Swiggy orange) |
| **Background** | `#F0F0F5` (light gray) |
| **Cards** | `#FFFFFF` with elevation shadows |
| **Text** | `#1C1C2B` / `#686B78` / `#93959F` |
| **Success** | `#1BA672` (green rating badges) |
| **Font** | Inter (Google Fonts) |
| **Corners** | 2xl (16px) for cards, xl for buttons |

---

## 📦 Build for Production

```bash
npm run build
```

Output is in `dist/` — deploy to Vercel, Netlify, or any static host.

---

## 📄 License

MIT
