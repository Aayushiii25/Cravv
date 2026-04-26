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

