# Quick Customization Guide for DJ RAM Website

This document provides step-by-step instructions to customize your DJ showcase website.

## 🔧 Essential Customizations

### Step 1: Update Contact Information

**1.1 WhatsApp Number**
Replace `1234567890` with your actual WhatsApp number (with country code, no + or spaces):

Files to update:
- `src/components/Hero.tsx` (lines 58, 88)
- `src/components/Contact.tsx` (line 139)

Example: If your number is +91 98765 43210, use: `919876543210`

**1.2 Phone Number**
Update in `src/components/Contact.tsx` (line 40):
```tsx
<a href="tel:+919876543210">+91 987 654 3210</a>
```

**1.3 Email Address**
Update in `src/components/Contact.tsx` (line 56):
```tsx
<a href="mailto:yourname@email.com">yourname@email.com</a>
```

### Step 2: Update Brand Name

Search and replace "DJ RAM" with your brand name in all files:
- `src/components/Hero.tsx` (line 49)
- `src/components/About.tsx` (line 9)
- `index.html` (line 12)

### Step 3: Update Social Media Links

In `src/components/Contact.tsx`, update these links:
- **Instagram**: Line 84 - `https://instagram.com/yourhandle`
- **YouTube**: Line 100 - `https://youtube.com/yourchannel`
- **Facebook**: Line 116 - `https://facebook.com/yourpage`
- **Twitter**: Line 132 - `https://twitter.com/yourhandle`

### Step 4: Replace Images

#### Hero Background
`src/components/Hero.tsx`:
1. Place your video file in the `public` folder as `hero-video.mp4`
2. Or update line 21 with a new background image URL

#### Gallery Images
`src/components/Gallery.tsx` (starting line 13):
Replace each `url` with your event photos. Use high-quality images (1920x1080 recommended).

#### Equipment Photos
`src/components/Equipment.tsx` (starting line 7):
Replace image URLs with photos of your actual equipment.

#### About Section
`src/components/About.tsx` (line 36):
Replace with a professional photo of yourself or your DJ setup.

### Step 5: Update Text Content

**About Section** (`src/components/About.tsx`):
- Line 17-18: Update years of experience
- Lines 17-24: Rewrite your story and expertise

**Testimonials** (`src/components/Testimonials.tsx`):
- Lines 10-32: Replace with real client testimonials
- Update names, roles, and testimonial content

**Tagline** (`src/components/Hero.tsx`, line 51):
```tsx
<p>Your Custom Tagline - Make it Powerful!</p>
```

## 🎨 Design Customizations

### Change Neon Colors

Edit `tailwind.config.js` (lines 7-12):
```js
neon: {
  purple: '#your-color',  // Main accent color
  blue: '#your-color',    // Secondary accent
  pink: '#your-color',    // Tertiary accent
  green: '#your-color',   // CTA color (buttons)
}
```

Use a color picker to find hex codes: https://htmlcolorcodes.com/

### Adjust Animation Speed

In `src/index.css`, modify animation durations:
```css
animation: {
  'glow': 'glow 3s ease-in-out infinite alternate',  // Change 2s to 3s
}
```

## 📝 Content Updates

### Add More Event Types

`src/components/Events.tsx` (line 11), add new items:
```tsx
{
  title: 'Your Event Type',
  description: 'Description of this event type',
  icon: '🎊',  // Choose an emoji
  gradient: 'from-blue-500 to-cyan-500',
}
```

### Add More Music Genres

`src/components/MusicStyles.tsx` (line 9), add genres:
```tsx
{
  name: 'Techno',
  icon: '🎹',
  description: 'Underground beats and basslines',
}
```

### Add More Gallery Images

`src/components/Gallery.tsx` (line 13), add images:
```tsx
{
  url: 'https://your-image-url.com/photo.jpg',
  title: 'Event Name',
  category: 'event',  // Options: 'event', 'crowd', 'setup', 'night'
}
```

### Update Brands/Clients

`src/components/Testimonials.tsx` (line 37), edit the brands array:
```tsx
const brands = [
  'Your Client 1', 'Your Client 2', 'Your Client 3'
];
```

### Change Service Area

`src/components/Contact.tsx` (line 74):
```tsx
<p>Your City & Service Areas</p>
```

## 🚀 Testing Your Changes

After making changes:

1. Save all files
2. Check the browser - Vite auto-reloads
3. Test on mobile by pressing F12 and toggling device toolbar
4. Test all links (WhatsApp, social media, etc.)

## 📱 Mobile Responsiveness

The website is already mobile-responsive, but test these:
- Hero section displays correctly
- Gallery grid adjusts to screen size
- Contact buttons are easily tappable
- Text is readable on small screens

## 🔍 SEO Optimization

### Update Meta Tags

`index.html` (line 8):
```html
<meta name="description" content="Your DJ services description for Google" />
<title>Your Name - Professional DJ | City Name</title>
```

### Add Keywords (optional)

Add this line in `index.html`:
```html
<meta name="keywords" content="DJ, Wedding DJ, Party DJ, Your City, Event Music" />
```

## 🎥 Video Recommendations

For the hero video:
- Duration: 10-30 seconds (looping)
- Resolution: 1920x1080 (Full HD)
- Format: MP4 (H.264 codec)
- File size: Under 10MB (compress using HandBrake or similar)
- Content: DJ performance, crowd energy, lighting effects

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## ⚠️ Common Issues

**Issue**: Images not loading
- **Solution**: Check image URLs are correct and accessible

**Issue**: WhatsApp link not working
- **Solution**: Ensure number format is correct (country code + number, no spaces)

**Issue**: Video not playing
- **Solution**: Check file path and ensure video is in `public` folder

**Issue**: Colors not changing
- **Solution**: After editing `tailwind.config.js`, restart dev server

## 📦 Before Going Live

Checklist:
- [ ] All contact information updated
- [ ] All placeholder images replaced
- [ ] All social media links working
- [ ] WhatsApp button tested
- [ ] Text content reviewed for typos
- [ ] Mobile responsiveness tested
- [ ] All links working
- [ ] SEO meta tags updated

## 🚢 Deploy Checklist

1. Run `npm run build` - ensure no errors
2. Test the build locally: `npm run preview`
3. Choose deployment platform (Vercel/Netlify recommended)
4. Connect your domain (optional)
5. Test live site on multiple devices

---

Need help? Refer to the main README.md for detailed technical documentation.
