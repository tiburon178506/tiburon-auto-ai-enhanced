# 🚀 Quick Start Guide - EL TIBURÓN AUTO AI

## Installation (30 seconds)

### Option 1: Direct Download
1. Download all files from GitHub
2. Open `index.html` in your browser
3. Done! No server or build tools needed

### Option 2: Git Clone
```bash
git clone https://github.com/tiburon178506/tiburon-auto-ai-enhanced.git
cd tiburon-auto-ai-enhanced
# Open index.html in your browser
```

---

## Login Credentials

```
📧 Email: admin@tiburonauto.ai
🔐 Password: Tiburon2026
```

---

## 🎨 How to Customize a Car (3 Steps)

### Step 1: Browse Catalog
1. Click **🚗 Catálogo** (Catalog) in sidebar
2. Search for a brand (e.g., "Toyota")
3. Find a model and click **🎨 Ver** (View)

### Step 2: Open Customizer
1. In the modal, click **🎨 Personalizar** (Customize)
2. You'll be taken to **Auto Studio**

### Step 3: Customize
- **Colors** - Click any color square (8 options)
- **Rims** - Select wheel style (6 options)
- **Accessories** - Click to toggle add-ons (8 options)
- **Watch** - Real-time preview updates instantly!

### Step 4: Save or Export
- Click **💾 Guardar personalización** to save locally
- Click **📸 Exportar diseño** to download as JSON

---

## 📋 Main Menu Overview

| Icon | Name | What It Does |
|------|------|--------------|
| 🏠 | Dashboard | Overview & stats |
| 🚗 | Catálogo | Browse 100+ cars & customize |
| 🅿️ | Mi Garaje | Your personal vehicles |
| 📡 | Scanner OBD-II | Simulated diagnostics |
| 🧠 | Mecánico IA | AI analysis of codes |
| 📘 | Manual Técnico | Repair procedures |
| 🎨 | Auto Studio | **Customization center** |
| 🔧 | Taller | Workshop management |
| 📄 | Reportes | Export & print reports |

---

## 🎯 Popular Features

### Add a Vehicle to Garage
1. Go to **🅿️ Mi Garaje**
2. Click **＋ Agregar vehículo**
3. Enter Make, Model, Year, License Plate
4. Click **Guardar vehículo**

### Run OBD-II Scanner
1. Go to **📡 Scanner OBD-II**
2. Select brand and enter model details
3. Click **📡 Ejecutar diagnóstico**
4. Get DTC code and sensor readings

### Analyze with AI Mechanic
1. Go to **🧠 Mecánico IA**
2. Enter DTC code (e.g., P0420)
3. Describe symptoms
4. Click **🧠 Analizar**
5. Get analysis & next steps

### Export Everything
1. Go to **📄 Reportes**
2. Click **💾 Exportar datos**
3. JSON file downloads automatically
4. Contains all your data

---

## 💾 Where Is My Data Stored?

**Browser LocalStorage** (100% private, no cloud upload):
- All vehicles in garage
- All scan history
- All work orders
- **All customizations**
- Preferences & settings

**Clear Data**: Open browser DevTools → Application → LocalStorage → Clear All

---

## 🎨 Customization Colors Available

| Color | Hex Code | Look |
|-------|----------|------|
| Azul Tiburón | #16d9ff | Bright Cyan |
| Negro Obsidiana | #0a0e14 | Deep Black |
| Blanco Perla | #f5f5f5 | Pure White |
| Rojo Carmesí | #ff5d73 | Vibrant Red |
| Plata Metálica | #c0c0c0 | Silver |
| Oro Champagne | #f4d03f | Gold |
| Verde Bosque | #1b4332 | Dark Green |
| Púrpura Nocturno | #9b7bff | Purple |

---

## 🛞 Rims Catalog

- **Classic 16"** - Standard sedan wheels
- **Sport 17"** - Performance look
- **Luxury 18"** - Premium appearance
- **Off-road 19"** - Rugged style
- **Chrome Polish** - Shiny finish
- **Matte Black** - Modern aesthetic

---

## ✨ Available Accessories

Toggle any combination:
1. 🏁 Alerón Deportivo (Sport Spoiler)
2. 🛡️ Parachoques Reforzado (Bumper)
3. 💡 Luces LED (LED Lights)
4. ⚡ Kit Turbo (Performance)
5. 🛏️ Bajo de Piso (Undertray)
6. 🎯 Banda Lateral (Side Stripe)
7. 🪟 Techo Panorámico (Roof)
8. 🔊 Sistema Escape Deportivo (Exhaust)

---

## 🎨 Finish Types

- **Brillo Brillante** - Shiny, reflective
- **Mate Suave** - Soft, matte appearance
- **Metálico Espejo** - Mirror-like, metallic
- **Carbono** - Dark, carbon fiber look
- **Perla Premium** - Pearl effect

---

## 🐛 Troubleshooting

### Images Not Loading?
- Check internet connection (using Unsplash)
- Refresh page
- Fallback emoji will display if image fails

### Data Lost?
- Browser storage cleared? Check LocalStorage
- Try a private/incognito window
- Export before clearing cache

### Can't Login?
- Use exactly: `admin@tiburonauto.ai` / `Tiburon2026`
- No typos!
- Try different browser if stuck

### Customizations Not Saving?
- Check browser allows LocalStorage
- Disable private/incognito mode
- Check browser storage isn't full

---

## 📱 Mobile Tips

✅ **Fully Responsive** - Works on phones & tablets
- Sidebar collapses to hamburger menu ☰
- Touch-friendly buttons
- Optimized grids

**Best Experience**: Landscape mode on mobile for preview

---

## 🔐 Privacy & Security

✅ **100% Private**
- No data sent to servers
- No tracking
- No cookies (except LocalStorage)
- All processing happens in browser

✅ **Your Data, Your Control**
- Download everything as JSON
- Delete anytime
- Never shared

---

## 🎓 Advanced Tips

### Batch Export All Customizations
1. Go to **Reports** → **Exportar datos**
2. Opens JSON with all your designs
3. Share with friends or backup

### Restore from JSON Backup
1. Download JSON from previous export
2. Open browser DevTools
3. Paste into LocalStorage manually
4. Refresh page

### Customize Catalog URLs
Edit `data.js` line by line:
```javascript
["Make","Model","Gen",startYear,endYear,"Category","IMAGE_URL"]
```

### Add New Colors
Edit `data.js` COLORS array:
```javascript
{ name: "Mi Color", hex: "#AABBCC", rgb: "170, 187, 204" }
```

---

## 🚀 Next Steps

1. **Explore the Catalog** - Browse all 100+ vehicles
2. **Customize a Car** - Design your dream vehicle
3. **Add to Garage** - Create your collection
4. **Run Diagnostics** - Try the OBD-II scanner
5. **Export Data** - Backup your work

---

## 📚 File Reference

| File | Size | Purpose |
|------|------|---------|
| `index.html` | 23 KB | UI & Styles |
| `data.js` | 15 KB | Vehicle data & options |
| `customization.js` | 11 KB | Customizer engine |
| `app.js` | 21 KB | Core logic |
| **Total** | **~70 KB** | **Fully functional!** |

---

## 🎉 You're Ready!

1. Open `index.html`
2. Login with demo credentials
3. Go to **Catálogo** 
4. Click a car
5. Click **🎨 Personalizar**
6. Have fun customizing!

---

**Questions?** Check GitHub Issues or email admin@tiburonauto.ai

**Enjoy EL TIBURÓN AUTO AI! 🦈**
