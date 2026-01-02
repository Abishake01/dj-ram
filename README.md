# DJ RAM - Professional DJ Showcase Website

A stunning, modern DJ showcase website built with React, TypeScript, and Vite. Features a dark theme with neon accents, smooth animations, and an immersive user experience.

## 🎵 Features

- **Full-Screen Hero Section** with video background and animated branding
- **About Section** highlighting experience and expertise
- **Events & Experience** showcase with multiple event types
- **Professional Equipment** display with high-quality images
- **Interactive Gallery** with filtering and lightbox modal
- **Music Styles** section showcasing genre versatility
- **Client Testimonials** and social proof
- **Contact Section** with social media links and WhatsApp integration
- **Fully Responsive** design optimized for all devices
- **Dark Theme** with neon purple, blue, pink, and green accents
- **Smooth Animations** and transitions throughout
- **Fixed WhatsApp Button** for easy contact

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\Users\abish\OneDrive\Desktop\Dj-ram"
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with video background
│   ├── About.tsx         # About section
│   ├── Events.tsx        # Events and experience showcase
│   ├── Equipment.tsx     # DJ equipment showcase
│   ├── Gallery.tsx       # Interactive photo gallery
│   ├── MusicStyles.tsx   # Music genres and specialties
│   ├── Testimonials.tsx  # Client testimonials
│   └── Contact.tsx       # Contact information and social links
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind configuration
```

## 🎨 Customization Guide

### 1. Update Contact Information

Edit the WhatsApp number in multiple locations:

**Hero Component** (`src/components/Hero.tsx`):
```tsx
// Line 58 and 88
href="https://wa.me/YOUR_PHONE_NUMBER"
```

**Contact Component** (`src/components/Contact.tsx`):
```tsx
// Phone number display
<a href="tel:+91XXXXXXXXXX">+91 XXX XXX XXXX</a>

// Email address
<a href="mailto:your@email.com">your@email.com</a>

// WhatsApp link
href="https://wa.me/YOUR_PHONE_NUMBER"
```

### 2. Replace Images and Videos

**Hero Video Background** (`src/components/Hero.tsx`):
- Replace `/hero-video.mp4` with your actual video file
- Update the fallback image URL in line 21

**Gallery Images** (`src/components/Gallery.tsx`):
- Replace the Unsplash placeholder URLs with your actual event photos
- Update the `images` array starting at line 13

**Equipment Images** (`src/components/Equipment.tsx`):
- Replace equipment image URLs in the `equipment` array

**About Section Image** (`src/components/About.tsx`):
- Replace the DJ image URL around line 34

### 3. Update Text Content

**Brand Name**: Search for "DJ RAM" throughout the project and replace with your brand name

**Tagline** (`src/components/Hero.tsx`, line 52):
```tsx
<p>Your Custom Tagline Here</p>
```

**About Text** (`src/components/About.tsx`):
- Update the description paragraphs
- Change years of experience and event count

**Testimonials** (`src/components/Testimonials.tsx`):
- Replace with real client testimonials
- Update client names and roles

### 4. Customize Social Media Links

**Contact Component** (`src/components/Contact.tsx`):
```tsx
// Update all social media URLs:
href="https://instagram.com/YOUR_HANDLE"
href="https://youtube.com/YOUR_CHANNEL"
href="https://facebook.com/YOUR_PAGE"
href="https://twitter.com/YOUR_HANDLE"
```

### 5. Update SEO & Meta Tags

**index.html**:
```html
<title>Your DJ Brand - Description</title>
<meta name="description" content="Your custom description" />
```

### 6. Modify Colors

**tailwind.config.js** - Adjust neon accent colors:
```js
neon: {
  purple: '#bf40bf',  // Change to your preferred colors
  blue: '#00d4ff',
  pink: '#ff10f0',
  green: '#39ff14',
}
```

### 7. Add More Gallery Items

In `src/components/Gallery.tsx`, add to the `images` array:
```tsx
{
  url: 'YOUR_IMAGE_URL',
  title: 'Your Event Name',
  category: 'event' | 'crowd' | 'setup' | 'night',
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add to `vite.config.ts`:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

## 🎯 Performance Optimization Tips

1. **Optimize Images**: Use WebP format and compress images before uploading
2. **Lazy Loading**: Large images are automatically lazy-loaded
3. **Video Optimization**: Compress hero video to reduce file size
4. **Code Splitting**: Already handled by Vite's build process

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - CSS keyframes and transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Support

For customization help or questions, contact:
- Email: contact@djram.com
- WhatsApp: +91 123 456 7890

## 📄 License

This project is free to use for personal and commercial purposes.

---

**Built with ❤️ for DJ RAM**

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
