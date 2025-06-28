# 🍽️ CraveBuddy

**CraveBuddy** is a sleek and responsive food-focused web application built with **React**, **Tailwind CSS**, and **React Icons**. It features a fully modular layout with reusable components, a modern product grid, and a vibrant UI — ideal for food delivery, restaurants, or ecommerce platforms.

---

## 🚀 Features

- ✅ Fully responsive layout using Tailwind CSS
- ✅ Animated and interactive components using Framer Motion
- ✅ Brand-themed navigation bar with:
  - Logo icon (`TbChefHat`)
  - Links: Home, Product, About, Shop, Contact
  - Shopping cart icon (`FaCartShopping`)
- ✅ **Home Page** includes:
  - Hero section/banner
  - Informational sections (Why Choose Us, How it Works, etc.)
  - Featured Food Cards
  - Food Menu with category filters
  - Footer with useful links and contact
- ✅ **Product Page** includes:
  - Trending Products heading
  - Filter buttons (Skincare, Electronics, etc.)
  - Dynamic Product Cards
  - Sidebar with sponsored promotions/ads
- ✅ Modern card designs with hover animations
- ✅ Reusable and scalable component-based structure

---

## 🛠️ Tech Stack

| Tech              | Usage                                     |
|-------------------|--------------------------------------------|
| [React](https://reactjs.org/)           | UI Library                           |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling                 |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons and graphics                   |
| [Framer Motion](https://www.framer.com/motion/) | Animations                           |
| [Vite](https://vitejs.dev/)             | Frontend build tool                   |

---

## 📂 Project Structure

```bash
src/
├── assets/              # Images, icons, etc.
├── components/
│   ├── Navbar.jsx       # Top navigation
│   ├── Footer.jsx       # Footer section
│   ├── ProductCard.jsx  # Product display card
│   ├── FoodCard.jsx     # Home page food cards
│   ├── InfoBlock.jsx    # Informational UI blocks
│   └── ...more reusable components
├── pages/
│   ├── Home.jsx         # Homepage layout
│   └── Products.jsx     # Product listing page
├── data/
│   ├── products.js      # Product data for cards
│   └── foodItems.js     # Featured food menu items
├── App.jsx              # App routing and layout
└── main.jsx             # Entry point


# 1. Clone the repository
git clone https://github.com/kalpitagavas/CraveBuddy.git
cd CraveBuddy

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
