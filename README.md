# NutriPlan - Food, Nutrition & Fitness Planner 🍽️

![NutriPlan Banner](src/images/favicon.png)

**NutriPlan** is a modern, responsive web application that helps users discover meals & recipes, scan product barcodes for nutritional information, analyze food nutrition, and track daily food intake with a clean food log system.

Built with vanilla JavaScript (ES6 modules), Tailwind CSS, and powered by a custom API ([nutriplan-api](https://nutriplan-api.vercel.app)), this project focuses on providing a fast, offline-capable, halal-friendly nutrition planning experience.

**Live Demo:** https://nutriplan-route.vercel.app

**GitHub Repo:** https://github.com/Abdelrahman968/nutriplan-route

---

## ✨ Features

### Meals & Recipes Discovery
- Search meals by name
- Filter by category, cuisine (area), and main ingredient
- Browse halal-friendly categories (Pork category automatically excluded)
- Grid/List view toggle
- Detailed meal view with ingredients, instructions, and nutrition analysis

### Product Scanner
- Search grocery products by name
- Barcode lookup for instant product details
- Nutri-Score & Nova Group visualization
- Filter by Nutri-Score grade

### Nutrition Analysis
- Analyze custom recipes by title + ingredient list
- Accurate calorie & macronutrient breakdown using API-powered parsing

### Food Log System
- Log meals or scanned products with custom serving sizes
- Daily totals: Calories, Protein, Carbs, Fat
- Progress bars toward common goals
- LocalStorage persistence
- Weekly overview chart (Plotly.js)

### Fully Responsive Design
- Mobile-first with sidebar navigation
- Smooth loading states and modals (SweetAlert2)

### Offline-First Ready
- No build tools required — pure HTML/CSS/JS
- Fast loading with CDN assets

---

## 📂 Project Structure

```
NutriPlan/
├── index.html                # Main page
├── src/
│   ├── css/
│   │   ├── index.css
│   │   └── style.css
│   ├── images/
│   │   ├── favicon.png
│   │   └── placeholder.png
│   └── js/
│       ├── classes/
│       │   ├── analyze.js       # Recipe nutrition analysis
│       │   ├── barcode.js       # Barcode product lookup
│       │   ├── categories.js    # Fetch halal categories
│       │   ├── filter.js        # Filter meals
│       │   ├── getById.js       # Get single meal details
│       │   ├── nutrients.js     # Individual ingredient nutrition
│       │   ├── product.js       # Product search
│       │   └── search.js        # Meal search + areas
│       ├── ui/
│       │   └── components.js    # UI rendering helpers
│       └── main.js              # App entry point & routing
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for API calls and CDNs)

**No Node.js, npm, or build tools required!**

### Installation & Running Locally

1. **Clone the repository:**

```bash
git clone https://github.com/Abdelrahman968/nutriplan-route.git
cd nutriplan-route
```

2. **Open `index.html` in your browser:**

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# Or just double-click the file
```

**Alternatively, serve it with any local server (recommended to avoid CORS issues):**

```bash
# Using Python
python -m http.server 8000

# Using npx serve
npx serve
```

Then visit: **http://localhost:8000**

---

## 🔌 API

This frontend consumes the following API endpoints:

**Base URL:** `https://nutriplan-api.vercel.app/api`

### Key Endpoints Used:
- `/meals/search` – Search meals
- `/meals/filter` – Filter by category/area/ingredient
- `/meals/categories`, `/meals/areas` – Get available filters
- `/meals/{id}` – Meal details
- `/products/search`, `/products/barcode/{code}` – Product search & barcode lookup
- `/nutrition/analyze` – Recipe analysis (requires API key)

> **Note:** The nutrition analysis endpoint uses a protected API key (currently hardcoded). For production use, consider proxying or environment variables.

---

## 🎨 Technologies Used

- **HTML5** – Structure
- **Tailwind CSS** – Styling (via CDN)
- **Vanilla JavaScript (ES6 Modules)** – Logic
- **Font Awesome 7** – Icons
- **SweetAlert2** – Beautiful alerts/modals
- **Plotly.js** – Weekly chart
- **LocalStorage** – Persistent food log

---

## 📱 Screenshots

*(Add screenshots later by placing them in `/src/images/screenshots/` and linking here)*

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Suggest new features (e.g., user accounts, goal setting, dark mode)

Please follow conventional commit messages and keep code style consistent.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Abdelrahman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Abd El-Rahman**  
GitHub: [@Abdelrahman968](https://github.com/Abdelrahman968)  
X/Twitter: [@Abdelrahman_968](https://twitter.com/Abdelrahman_968)

---

**Enjoy planning your nutrition with NutriPlan!** 🌿
