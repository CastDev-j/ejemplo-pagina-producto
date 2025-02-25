<div align="center">

# Mobile App Landing Page 🚀

[![Astro](https://img.shields.io/badge/Astro-5.3.0-FF5D01.svg?style=flat-square&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg?style=flat-square&logo=react)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.7-38B2AC.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

> Modern, responsive landing page template for mobile applications 📱

### 🌟 [Demo](https://landing.bohd4n.dev)

</div>

## ✨ Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🚀 Built with Astro and React
- 🎯 SEO-friendly
- 📝 Markdown support for Privacy & Terms
- 🖼️ Interactive screenshot gallery with device switching (iPhone/iPad)
- 🔧 Easy to customize
- 📦 Zero configuration deployment

## 🚀 Quick Start

1. **Clone this repository:**
   ```bash
   git clone https://github.com/bohd4nx/mobile-landing-page.git
   ```

2. **Install dependencies:**
   ```bash
   cd mobile-landing-page
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Customization

### 📝 Content

1. **Main Configuration** (`src/data/appData.ts`):
   ```typescript
   // Update app information
   title: "Your App Name"
   description: "Your app description"
   screenshots: {
     iphone: [
       "/assets/screenshots/iphone/1.png",
       // Add more iPhone screenshots
     ],
     ipad: [
       "/assets/screenshots/ipad/1.png",
       // Add more iPad screenshots
     ]
   }
   features: [] // Add your features
   faqs: [] // Add your FAQs
   storeLinks: {
     apple: "your-app-store-link",
     google: "your-play-store-link"
   }
   socialLinks: [
     {
       url: "https://instagram.com/your-account",
       icon: RiInstagramFill,
       label: "Instagram"
     },
     // Add more social links
   ]
   ```

2. **Legal Pages** (`src/content/`):
   - `privacy.md` - Privacy Policy
   - `terms.md` - Terms of Service

3. **Images & Assets** (`public/assets/`):
   - `logo.png` - Your app icon (160x160px recommended)
   - `screenshots/iphone/` - iPhone screenshots (9:16 ratio recommended)
   - `screenshots/ipad/` - iPad screenshots (4:3 ratio recommended)

2. **Layout & Components**:
   - Main layout: `src/layouts/Layout.astro`
   - Components: `src/components/`
   - Pages: `src/pages/`


## 📝 License

This project is MIT licensed. See LICENSE for more information.

## 🌟 Support

If you find this project useful:

- Give it a star ⭐
- Share with others 🔄
- Consider contributing 🛠️

---

<div align="center">
    <h4>Built with ❤️ by <a href="https://t.me/bohd4nx" target="_blank">Bohdan</a></h4>
</div>