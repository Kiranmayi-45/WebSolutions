

## Overview
This is a **responsive  website** built with **React.js**. The project features a modern UI/UX design, API integration, performance optimizations, and a structured component-based architecture. It includes a hero section, service cards, a pricing table, and a contact form.

## Features
- **UI/UX Elements**
  - Hero section with a background image/video
  - Service cards
  - Pricing table
  - Contact form
  
- **API Integration**
  - Fetch and display dummy user data from `https://jsonplaceholder.typicode.com/users`

- **Performance Optimization**
  - Fast load time
  - Lazy loading for images
  
- **Search Algorithm**
  - Debounced search bar for filtering user names dynamically
  - Implemented using **Trie/HashMap** for optimized search

- **Code Quality & Structure**
  - Proper folder structure
  - Clean and modular code
  - Comments for better readability

---

## Project Structure
```
my-app/
│── src/
│   ├── components/
│   │   ├── Contact/
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactForm.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   ├── Layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   ├── Pricing/
│   │   │   ├── PricingTable.jsx
│   │   │   ├── PricingTable.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.css
│   │   ├── Services/
│   │   ├── UserData/
│   │   │   ├── UserCard.jsx
│   │   │   ├── UserCard.css
│   │   │   ├── UserList.jsx
│   │   │   ├── UserList.css
│   ├── utils/
│   │   ├── api.js
│   │   ├── debounce.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│── README.md
```

---

## Components Breakdown
### **1. Layout Components**
- `Navbar.jsx` - Responsive navigation bar with dynamic scrolling effect.
- `Footer.jsx` - Displays quick links and contact details.
- `Layout.jsx` - Wraps the main content with `Navbar` and `Footer`.

### **2. Main Sections**
- `Hero.jsx` - The landing section with a background image/video and CTA.
- `ServicesSection.jsx` - Displays various business services.
- `UserSection.jsx` - Fetches and displays user data from an API.
- `PricingSection.jsx` - Showcases different pricing plans.
- `ContactSection.jsx` - A contact form for user inquiries.

### **3. Utilities**
- `api.js` - Handles API calls.
- `debounce.js` - Implements a debounce function to optimize search.

---

## Responsive Web Design
✅ **Mobile-Friendly** - Adapts seamlessly to different screen sizes.
✅ **Flexbox & Grid Layouts** - Ensures a structured and well-spaced design.
✅ **Media Queries** - Adjusts styles dynamically for better UX.

---

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/your-repo-name.git
   ```
2. Navigate into the project directory:
   ```sh
   cd my-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000/` in your browser.



