# 🍽️ Yummy - Recipe Discovery Application

A dynamic, interactive web application for discovering and exploring recipes from around the world. Built with vanilla JavaScript and powered by TheMealDB API.

![Yummy Banner](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [License](#license)

## ✨ Features

### 🔍 Smart Search Functionality
- **Search by Name**: Find recipes by typing meal names
- **Search by First Letter**: Quick alphabetical search
- **Real-time Results**: Instant search results as you type

### 🗂️ Browse & Filter
- **Categories**: Explore meals by category (Chicken, Seafood, Dessert, etc.)
- **Areas**: Discover cuisines from different regions (Italian, Chinese, Mexican, etc.)
- **Ingredients**: Filter meals by specific ingredients

### 📖 Detailed Recipe Information
- Complete cooking instructions
- Ingredient lists with measurements
- Nutritional categories and meal origins
- Direct links to recipe sources and video tutorials

### 🎨 User Interface
- Responsive design for all devices
- Smooth animations and transitions
- Interactive hover effects
- Custom loading animation
- Collapsible sidebar navigation

### ✅ Contact Form with Validation
- Real-time input validation
- Regex-based field verification
- Password strength requirements
- Email format validation
- Phone number validation
- Age verification

## 🚀 Demo

[Live Demo](https://amd2trk.github.io/yummy_js/)

## 🛠️ Technologies Used

- **Frontend**: 
  - HTML5
  - CSS3 (Custom animations)
  - JavaScript (ES6+)
  - Bootstrap 5
  - Font Awesome Icons

- **API**: 
  - [TheMealDB API](https://www.themealdb.com/api.php)

- **Tools**:
  - VS Code
  - Git & GitHub

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amd2trk/yummy_js.git
   cd yummy_js
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred browser
   - Or use a local server like Live Server (VS Code extension)

3. **No additional dependencies required!**
   - All libraries are loaded via CDN
   - No npm install needed

## 💻 Usage

### Navigation
Click the hamburger menu icon to expand the sidebar and access different sections:
- **Search**: Find recipes by name or first letter
- **Categories**: Browse by meal category
- **Area**: Explore cuisines by country
- **Ingredients**: Filter by ingredients
- **Contact Us**: Get in touch via the contact form

### Viewing Recipe Details
1. Click on any meal card to view detailed information
2. See complete instructions, ingredients, and measurements
3. Access source links and YouTube tutorials

### Search Tips
- Use the name search for specific dishes (e.g., "pasta", "chicken")
- Use first letter search for quick alphabetical browsing
- Both search fields work independently and update in real-time

## 📁 Project Structure

```
yummy_js/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Custom styles and animations
│   ├── bootstrap.min.css  # Bootstrap framework
│   └── all.min.css        # Font Awesome icons
├── js/
│   ├── index.js           # Main JavaScript logic
│   └── bootstrap.bundle.min.js
├── webfonts/              # Font Awesome font files
│   ├── fa-regular-400.woff2
│   └── fa-v4compatibility.woff2
└── images/
    └── logo.png           # Application logo
```

## 🔌 API Reference

This project uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data, including meal details, categories, cuisines, and ingredients.


## 🎯 Key Features Implementation

### Custom Loading Animation
- Unique pan and egg animation while fetching data
- CSS3 animations with 3D transforms
- Automatic hiding when content loads

### Form Validation
- Real-time validation using regex patterns
- Visual feedback with Bootstrap validation classes
- Dynamic submit button state based on form validity
- Password matching verification

### Responsive Sidebar
- Smooth slide-in/out animation
- Staggered menu item animations
- Mobile-friendly collapsible design

### API Integration
- Async/await for clean asynchronous code
- Error handling for failed requests
- Efficient data fetching and display
- Duplicate prevention in search results

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [Font Awesome](https://fontawesome.com/) for the icon library
- Design inspiration from modern food applications


⭐ If you found this project helpful, please consider giving it a star!

Made with ❤️ by Ahmed Tarek Aziz
