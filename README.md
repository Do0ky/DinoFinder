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

**Dino Finder** helps learners and enthusiasts discover dinosaurs through an intuitive, visually engaging UI. The app blends scientific clarity with playful design: searchable data, granular filters, and focused detail views let users explore taxonomy, geologic context, and specimen metrics.

---

## 🚀 Features

- 🔍 **Search & Multi Filter**  
    Search dinosaurs by name, family, location, diet, period, epoch, or geological formation with combined filters that return matches for all selected criteria.
- 🦖 **Dynamic Gallery**   
  Grid of Dino cards with period badges, thumbnails, and quick facts. Responsive layout for desktop and mobile.
- 📘 **Dino Detail Modal**  
  Click a card to open an overlay showing all the information fields with friendly labels.
- 🎛️ **Collapsible Filters**  
  Toggleable filter bar with dropdowns for focused exploration that keeps the UI uncluttered.
- 🛡️ **Type Safe Data Model**  
  Dinosaur shape enforced with TypeScript interfaces for predictable rendering and maintainability.


---

## 🧪 Technologies Used

- **React** with Hooks
- **TypeScript**
- **CSS** (modular/global styles)
- **JSON** as dataset source
- **React Router** *(optional for navigation)*
- **Local Storage** *(future persistence)*
  
---

## 📁 Project Structure
```bash
src/
├── components/
│   ├── DinoCard.tsx
│   ├── DinoList.tsx
│   ├── DinoModal.tsx
│   └── Filters.tsx
├── data/
│   └── dinosaurs.json
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

---

## 👨‍💻 Author
Created by:
- **Claire Peyre**  