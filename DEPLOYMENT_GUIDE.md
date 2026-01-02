# Deployment Guide - DJ RAM Website

Complete guide to deploy your DJ showcase website to popular hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ All customizations are complete
- ✅ Contact information is updated
- ✅ All images are optimized and loaded
- ✅ All links are working (WhatsApp, social media)
- ✅ Site tested on desktop and mobile
- ✅ No console errors in browser

Test build locally:
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## 🚀 Option 1: Deploy to Vercel (Recommended - Easiest)

**Why Vercel?**
- Free hosting for personal sites
- Automatic SSL certificate
- Global CDN (fast worldwide)
- Auto-deploys on git push
- Custom domain support

### Steps:

1. **Sign up at Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub (recommended)

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy from Command Line**:
   ```bash
   cd "c:\Users\abish\OneDrive\Desktop\Dj-ram"
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (choose your account)
   - Link to existing project? **N**
   - Project name? **dj-ram** (or your preferred name)
   - Directory? **./** (press Enter)
   - Override settings? **N**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

5. **Your site will be live at**: `https://dj-ram.vercel.app`

### Adding Custom Domain to Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `djram.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic, ~5 minutes)

---

## 🌐 Option 2: Deploy to Netlify

**Why Netlify?**
- Free hosting with generous limits
- Drag-and-drop deployment
- Form handling (if you add forms later)
- Easy custom domain setup

### Method A: Drag & Drop (Easiest)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Visit Netlify Drop**:
   - Go to https://app.netlify.com/drop

3. **Drag and Drop**:
   - Open File Explorer
   - Navigate to `c:\Users\abish\OneDrive\Desktop\Dj-ram\dist`
   - Drag the entire `dist` folder to the Netlify Drop page

4. **Your site is live!** 
   - You'll get a random URL like `random-name-123.netlify.app`
   - Can change to custom subdomain in settings

### Method B: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   netlify deploy
   ```
   
   Follow prompts:
   - Authorize Netlify account
   - Create new site
   - Build directory: **dist**

3. **Deploy to production**:
   ```bash
   netlify deploy --prod
   ```

### Adding Custom Domain to Netlify:

1. Site Settings → Domain Management → Add Custom Domain
2. Add your domain
3. Configure DNS (provided by Netlify)
4. SSL auto-enabled

---

## 📄 Option 3: Deploy to GitHub Pages

**Why GitHub Pages?**
- Free hosting directly from GitHub
- Version control included
- Good for open-source projects

### Steps:

1. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Name: `dj-ram-website`
   - Create repository

2. **Initialize Git** (if not already):
   ```bash
   cd "c:\Users\abish\OneDrive\Desktop\Dj-ram"
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/dj-ram-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

5. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

6. **Update vite.config.ts**:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/dj-ram-website/',  // Your repo name
   })
   ```

7. **Deploy**:
   ```bash
   npm run deploy
   ```

8. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

9. **Your site will be at**: 
   `https://YOUR-USERNAME.github.io/dj-ram-website/`

### Custom Domain on GitHub Pages:

1. Settings → Pages → Custom Domain
2. Enter your domain (e.g., `djram.com`)
3. Add DNS records with your domain provider:
   - Type: A
   - Name: @
   - Value: GitHub's IP addresses
4. Add CNAME file in `public` folder:
   ```
   djram.com
   ```

---

## ☁️ Option 4: Deploy to Other Platforms

### Cloudflare Pages

1. Go to https://pages.cloudflare.com
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy

### Render

1. Go to https://render.com
2. New → Static Site
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```
   - Public directory: **dist**
   - Single-page app: **Yes**

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🌍 Custom Domain Setup (General Guide)

### Step 1: Purchase Domain
Popular registrars:
- Namecheap (recommended)
- GoDaddy
- Google Domains
- Cloudflare

### Step 2: Configure DNS

For Vercel/Netlify, add these records:

**A Records** (if available):
```
Type: A
Name: @
Value: (provided by hosting platform)
```

**CNAME Record**:
```
Type: CNAME
Name: www
Value: your-site.vercel.app (or .netlify.app)
```

### Step 3: Wait for Propagation
- DNS changes take 5 minutes to 48 hours
- Usually active within 1-2 hours
- Check status: https://dnschecker.org

---

## 📊 Post-Deployment

### 1. Test Your Live Site

Check on multiple devices:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS, Android)
- Tablet devices

Test all functionality:
- WhatsApp button opens correctly
- Social media links work
- Gallery filtering works
- Modal/lightbox opens
- All images load
- Video plays (if added)

### 2. Add Analytics

**Google Analytics**:
1. Create account at https://analytics.google.com
2. Get tracking ID
3. Add to `index.html` (see CUSTOMIZATION_GUIDE.md)

### 3. Submit to Google

Help Google find your site:
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap (if you create one)

### 4. Social Media Integration

Share your website:
- Add to Instagram bio
- Share on Facebook page
- Add to YouTube channel description
- Include in email signature

### 5. Monitor Performance

Tools to check site speed:
- Google PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- WebPageTest: https://webpagetest.org

Aim for:
- Load time: Under 3 seconds
- Mobile score: 90+
- Desktop score: 90+

---

## 🔄 Updating Your Site

### For Vercel/Netlify with Git:

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Site auto-deploys!

### For Manual Deployments:

1. Make changes
2. Build: `npm run build`
3. Deploy new `dist` folder

---

## ⚠️ Troubleshooting

### Issue: "404 Not Found" on refresh
**Solution**: Configure redirects for single-page app

For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

For Vercel, it's automatic.

### Issue: Images not loading after deployment
**Solution**: Check image paths - use absolute URLs or place in `public` folder

### Issue: CSS not applied
**Solution**: Clear browser cache (Ctrl+Shift+R)

### Issue: Custom domain not working
**Solution**: 
- Wait 24-48 hours for DNS propagation
- Verify DNS settings with `nslookup yourdomain.com`
- Check registrar's DNS management

### Issue: WhatsApp link not working
**Solution**: Ensure format is correct:
```
https://wa.me/919876543210
```
No spaces, no +, include country code

---

## 💰 Cost Breakdown

### Free Tier Limits:

**Vercel Free**:
- 100 GB bandwidth/month
- Unlimited sites
- Custom domain ✅
- SSL certificate ✅

**Netlify Free**:
- 100 GB bandwidth/month
- 300 build minutes/month
- Custom domain ✅
- SSL certificate ✅

**GitHub Pages Free**:
- 1 GB size limit
- 100 GB bandwidth/month
- Custom domain ✅
- SSL certificate ✅

### Paid Domain:
- .com domain: $10-15/year
- .in domain: $5-10/year
- .co domain: $20-30/year

**Total annual cost**: $10-15 (just domain, hosting is free!)

---

## 📞 Getting Help

If you encounter issues:

1. **Check Documentation**:
   - Vercel: https://vercel.com/docs
   - Netlify: https://docs.netlify.com
   - GitHub Pages: https://pages.github.com

2. **Common Solutions**:
   - Clear browser cache
   - Check browser console for errors (F12)
   - Verify all files are committed
   - Ensure build succeeds locally

3. **Community Support**:
   - Stack Overflow
   - Vercel/Netlify Discord
   - GitHub Discussions

---

## ✅ Deployment Complete!

Once deployed, your DJ showcase website will be:
- ✅ Accessible worldwide 24/7
- ✅ Fast and responsive
- ✅ Secure with SSL (HTTPS)
- ✅ Mobile-friendly
- ✅ Professional and impressive

Share your URL and start booking more events! 🎵🎉

---

**Next Steps**:
1. Share website link on social media
2. Add to business cards
3. Include in email signatures
4. Update Google Business profile
5. Share with past clients for referrals
