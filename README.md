# 🦈 EL TIBURÓN AUTO AI - Enhanced Edition

**Automotive Intelligence Platform with Advanced Car Customization**

A comprehensive single-page web application for automotive diagnostics, vehicle catalog browsing, and **advanced vehicle customization** with real-time preview.

🔗 **Live Demo**: [Open in Browser](https://github.com/tiburon178506/tiburon-auto-ai-enhanced)

---

## ✨ Features

### 📊 Core Modules
- **Dashboard** - Overview with metrics and quick access
- **Vehicle Catalog** - 100+ cars from 30+ brands (1985-2026)
- **My Garage** - Personal vehicle management
- **OBD-II Scanner** - Simulated diagnostics with DTC codes
- **AI Mechanic** - Rule-based diagnostic analysis
- **Technical Manual** - Procedural guidance for repairs
- **Workshop Management** - Work order tracking
- **Reports** - PDF export and data downloads

### 🎨 Advanced Customization System (NEW!)
- **Live Car Images** - Real vehicle photos with fallbacks
- **8 Color Options** with visual preview:
  - Azul Tiburón (Shark Blue)
  - Negro Obsidiana (Obsidian Black)
  - Blanco Perla (Pearl White)
  - Rojo Carmesí (Crimson Red)
  - Plata Metálica (Metallic Silver)
  - Oro Champagne (Champagne Gold)
  - Verde Bosque (Forest Green)
  - Púrpura Nocturno (Midnight Purple)

- **6 Rim Styles**:
  - Classic 16"
  - Sport 17"
  - Luxury 18"
  - Off-road 19"
  - Chrome Polish
  - Matte Black

- **8 Accessories**:
  - Alerón Deportivo (Sport Spoiler)
  - Parachoques Reforzado (Reinforced Bumper)
  - Luces LED (LED Lights)
  - Kit Turbo (Turbo Kit)
  - Bajo de Piso (Undertray)
  - Banda Lateral (Side Stripe)
  - Techo Panorámico (Panoramic Roof)
  - Sistema Escape Deportivo (Sport Exhaust)

- **5 Finish Options**:
  - Brillo Brillante (Glossy Shine)
  - Mate Suave (Matte Soft)
  - Metálico Espejo (Metallic Mirror)
  - Carbono (Carbon)
  - Perla Premium (Premium Pearl)

- **Save & Export** - Store customizations locally as JSON
- **Gallery** - View all saved customizations

---

## 🚀 Quick Start

### Installation
1. Clone the repository:
```bash
git clone https://github.com/tiburon178506/tiburon-auto-ai-enhanced.git
cd tiburon-auto-ai-enhanced
```

2. Open `index.html` in your browser
3. Login with demo credentials:
   - **Email**: `admin@tiburonauto.ai`
   - **Password**: `Tiburon2026`

### No Build Required
This is a **pure frontend application** - no npm, build tools, or server needed!

---

## 📁 File Structure

```
tiburon-auto-ai-enhanced/
├── index.html              # Main HTML & styles
├── data.js                 # Vehicle catalog with image URLs
├── customization.js        # Customization system logic
├── app.js                  # Core app functionality
└── README.md              # This file
```

### File Sizes
- `index.html` - 23 KB (styles + HTML)
- `data.js` - 15 KB (130+ vehicles with metadata)
- `customization.js` - 11 KB (customization engine)
- `app.js` - 21 KB (all core logic)
- **Total**: ~70 KB (fully functional, no dependencies)

---

## 🎯 How to Use

### 1. Browse Catalog
- Go to **Catálogo** (Catalog)
- Search by brand
- Click a model to see details and **customize**

### 2. Customize a Vehicle
- From catalog, click **🎨 Ver** on any model
- Adjust **Colors**, **Rims**, **Accessories**, and **Finish**
- Watch live preview update in real-time
- Save or export your design

### 3. View Saved Customizations
- In Auto Studio, click on saved builds in the gallery
- Edit and re-save customizations
- Delete unwanted designs

### 4. Run Diagnostics
- Go to **Scanner OBD-II**
- Enter vehicle details
- Get simulated DTC codes
- Analyze with **Mecánico IA** (AI Mechanic)

### 5. Manage Your Fleet
- **Mi Garaje** (My Garage) stores your vehicles
- Quick access to diagnostics for each car
- Persistent storage in browser

---

## 💾 Data Persistence

All data is stored locally in browser **LocalStorage**:
- Garage vehicles
- Scan history
- Work orders
- **Customizations** (NEW!)
- User preferences

**Export Everything**: Reports → Exportar datos (Export Data)

---

## 🔒 Security & Privacy

- ✅ No server communication required
- ✅ All data stays in your browser
- ✅ No tracking or external APIs
- ✅ Credentials are demo-only (for testing)

---

## 🎨 Customization Deep Dive

### How It Works

1. **Color Selection** - Choose from 8 preset colors
2. **Real-time Preview** - Image updates instantly with hue rotation filters
3. **Accessories Toggle** - Add/remove up to 8 customization items
4. **Finish Effects** - Apply CSS filters for material appearance
5. **Save Locally** - Store builds in browser storage
6. **Export JSON** - Download customization file

### Technical Implementation

```javascript
// Current customization state
currentCustomization = {
  modelId: "m42",
  color: { name: "Azul Tiburón", hex: "#16d9ff", rgb: "22, 217, 255" },
  rims: { name: "Sport 17\"", id: "sport-17" },
  accessories: { "led-lights": true, "turbo-kit": true },
  finish: { name: "Metálico Espejo", id: "metallic", filter: "brightness(1.2) contrast(1.1)" }
}
```

---

## 🌐 Image Sources

Vehicle images are loaded from **Unsplash** (free, high-quality car photos):
- Responsive image sizing
- Fallback to emoji if loading fails
- No image storage required

---

## 🔄 Feature Roadmap

### Phase 2 (Coming Soon)
- [ ] 3D car customizer with WebGL
- [ ] More color options with gradients
- [ ] Custom texture uploads
- [ ] Social sharing of builds
- [ ] Real-time collaboration

### Phase 3
- [ ] Backend API integration
- [ ] Multi-user accounts
- [ ] Real OBD-II data connection
- [ ] AI training on user data
- [ ] Mobile app (React Native)

---

## 🛠️ Customization for Developers

### Adding New Colors

Edit `data.js`:
```javascript
const COLORS = [
  { name: "Tu Color", hex: "#RRGGBB", rgb: "R, G, B" },
  // ...
];
```

### Adding New Accessories

Edit `data.js`:
```javascript
const ACCESSORIES = [
  { name: "Mi Accesorio", id: "my-accessory", enabled: true },
  // ...
];
```

### Changing Car Images

Edit the 7th element in vehicle data (image URL):
```javascript
["Toyota","Corolla","E90/E100",1987,1997,"Sedán","YOUR_IMAGE_URL"]
```

### Modifying Styles

All CSS is in `<style>` tag in `index.html`. Key sections:
- `:root` - Color variables
- `.card` - Card styling
- `.preview` - Preview area
- `.color-grid` - Customization UI

---

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (responsive design)

---

## 🎓 Learning Resources

This project demonstrates:
- **Vanilla JavaScript** - No frameworks
- **CSS Grid & Flexbox** - Responsive layouts
- **LocalStorage API** - Data persistence
- **Dynamic DOM manipulation** - Real-time updates
- **Filter effects** - CSS visual transforms
- **Modal systems** - Dialog management
- **Form handling** - User input validation

Perfect for learning frontend development! 📚

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add more vehicles to the catalog
- Create new color options
- Improve UI/UX
- Fix bugs
- Add translations

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/tiburon178506/tiburon-auto-ai-enhanced/issues)
- **Email**: admin@tiburonauto.ai
- **Demo Login**: `admin@tiburonauto.ai` / `Tiburon2026`

---

## 🎉 Credits

Built with ❤️ by **EL TIBURÓN AUTO AI Team**

- Frontend: Pure HTML/CSS/JavaScript
- Images: Unsplash (free license)
- Icons: Unicode emojis

---

**Version**: 2.0.0 - Enhanced with Advanced Customization  
**Last Updated**: 2026-09-12  
**Status**: ✅ Production Ready
