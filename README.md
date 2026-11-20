# Paradise Nursery Shopping Application

A responsive e-commerce web application for **Paradise Nursery**, where plant lovers can browse, explore, and purchase houseplants. This project was developed as the final capstone for Coursera's Front-End Development specialization.

## Live Demo & Deployment

- **Live URL:** [https://swaraj-theMaster.github.io/paradise-nursery/](https://swaraj-theMaster.github.io/paradise-nursery/)
- **GitHub Repository:** [https://github.com/swaraj-theMaster/paradise-nursery](https://github.com/swaraj-theMaster/paradise-nursery)

---

## Features & Project Structure

### 1. Landing Page (`App.jsx`, `App.css`, `AboutUs.jsx`)
- Full-screen high-resolution botanical background image with overlay.
- Company name (**Paradise Nursery**) and company mission tagline.
- **AboutUs** section detailing the company's background and love for plants.
- **Get Started** button providing seamless navigation to the product catalog.

### 2. Product Listing Page (`ProductList.jsx`, `ProductList.css`)
- Organized into 3 distinct categories:
  - **Air Purifying Plants** (6 unique plants)
  - **Aromatic & Culinary Fragrant Plants** (6 unique plants)
  - **Low Maintenance & Succulents** (6 unique plants)
- Displays 18 unique houseplants, each featuring:
  - High-quality thumbnail image
  - Plant name
  - Botanical description
  - Price tag
  - **Add to Cart** button (dynamically disables and shows "Added to Cart" once selected)
- Navigation bar with direct links to **Home**, **Plants**, and **Cart**.
- Dynamic cart icon displaying real-time quantity badge.

### 3. Shopping Cart Page (`CartItem.jsx`, `CartItem.css`, `CartSlice.jsx`)
- Prominently displays:
  - Total number of plants in the cart
  - Total calculated cart cost
- For each item:
  - Plant thumbnail image, name, and unit cost
  - Quantity controls (`+` and `-`) to increment and decrement quantities
  - Calculated subtotal for the plant
  - **Delete** button to remove the item completely
- **Continue Shopping** button linking back to the plant catalog.
- **Checkout** button displaying "Checkout Coming Soon!" alert.

### 4. Global State Management (Redux Toolkit)
- Configured with `CartSlice.jsx` handling `addItem`, `removeItem`, and `updateQuantity`.
- Global store in `store.js` connected via `react-redux` Provider.

---

## Technology Stack

- **React 19**
- **Redux Toolkit & React-Redux**
- **Vite**
- **HTML5 & Modern CSS3 (Flexbox & Grid)**
- **GitHub Pages for Deployment**

---

## Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/swaraj-theMaster/paradise-nursery.git
   cd paradise-nursery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```
