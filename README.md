# 🦕 DINO FINDER

![Static Badge](https://img.shields.io/badge/React-blue?style=plastic&logo=react&color=61DBFB)
![Static Badge](https://img.shields.io/badge/TypeScript-blue?style=plastic&logo=typescript)
![Static Badge](https://img.shields.io/badge/npm-red?style=plastic&logo=npm&color=CB3837)
![Static Badge](https://img.shields.io/badge/CSS3-blue?style=plastic&logo=css&color=2965f1)
![Static Badge](https://img.shields.io/badge/Git-blue?style=plastic&logo=git&color=f14e32)

An interactive React and TypeScript gallery of dinosaur species.
Search, multi‑filter, sort, and open detailed modal views to explore paleontological facts in an accessible, educational interface.

---

## 🌍 Project Vision

**Dino Finder** helps learners and enthusiasts discover dinosaurs through an intuitive, visually engaging UI. The app blends scientific clarity with playful design: searchable data, color-coded epochs, badge-style visuals, and immersive overlays make paleontology accessible and memorable.

---

## 🚀 Features

- 🔍 **Search & Multi Filter**  
    Search dinosaurs by name, family, location, diet, period, epoch, or geological formation and use combined filters for precise results.
- 🦖 **Dynamic Gallery**   
  Responsive grid of Dino cards with color-coded backgrounds and badge overlays by period, and faint vintage-style image watermarks.
- 📘 **Dino Detail Modal**  
  Click any card to open a modal with full specimen info, styled labels, and accessible layout.
- 🎛️ **Collapsible Filters**  
  Toggleable filter bar with dropdowns for focused exploration that keeps the UI uncluttered.
- 🛡️ **Type Safe Data Model**  
  Dinosaur shape enforced with TypeScript interfaces for predictable rendering and maintainability.
- 💌 **DinoLetter Subscription**  
  A dedicated page with a form to subscribe to monthly fossil updates. Includes name/email input, success feedback, and a trust disclaimer.
- ♿ **Accessibility Features**  
  Screen reader support, keyboard navigation, semantic HTML, and clear visual hierarchy.
- 🎨 **Badge & Epoch Styling System**  
  Cards and badges reflect geologic time visually: Triassic, Jurassic, and Cretaceous periods are color-coded and styled for clarity and immersion.


---

## 🧪 Technologies Used

- **React** with Hooks
- **TypeScript**
- **CSS** (modular/global styles)
- **JSON** dataset
- **React Globe**
- **React Portal**
- **React Router**
  
---

## 📁 Project Structure
```bash
src/
├── assets/
│   └── images
├── components/
│   ├── DinoCard.tsx
│   ├── DinoList.tsx
│   ├── DinoModal.tsx
│   └── Filters.tsx
├── data/
│   └── dinosaurs.json
├── pages/
│   ├── About.tsx
│   ├── Home.tsx
│   ├── Landing.tsx
│   └── Dinoletter.tsx
├── App.tsx
├── index.tsx
└── App.css
```
---

## 📚 Data Sources and inspirations

- [Wikipedia](https://www.wikipedia.org)
- [Natural History Museum: The Dino Directory](https://www.nhm.ac.uk/discover/dino-directory.html)
- [DinoNews : Liste alphabétique des dinosaures](https://dinonews.net/index/liste_alpha.php)

---

## 🛠️ Installation & Setup
```bash
git clone https://github.com/Do0ky/DinoFinder.git 
cd DinoFinder
npm install
npm start
```
---

## 💡 Potential Future Enhancements
- 🖼️ Images and artist renditions for each specimen
- 🌐 API integration to fetch an expanded, curated dataset
- ♿ Accessibility audit and keyboard navigation improvements
- 📒 Field notes and personal collection saved to local storage or user accounts
- 🔍 Advanced sorting and taxonomy filters
- 🧠 Quiz mode for learners

---

## 👩‍💻 Author
Created by:
- **Claire Peyre**  