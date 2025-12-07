# Phase 11: Deployment Guide

## 🚀 Production Deployment on Vercel

This guide will walk you through deploying the Coin Siren Landing Page to production on Vercel.

---

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ A GitHub/GitLab/Bitbucket account
- ✅ A Vercel account (free tier is sufficient)
- ✅ Node.js 18+ installed locally
- ✅ All code committed to your repository

---

## 🔧 Pre-Deployment Checklist

### 1. **Verify Production Build**

```bash
npm run build
```

**Expected Output:**
```
✓ Compiled successfully
✓ Generating static pages (10/10)
Route (app)                              Size     First Load JS
┌ ○ /                                    104 kB          191 kB
```

- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ All pages generated successfully

### 2. **Test Production Build Locally**

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

### 3. **Environment Variables**

Copy the production template:
```bash
cp .env.production.example .env.production
```

Update with your production values:
```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

⚠️ **Note:** `.env.production` is gitignored for security!

---

## 🚀 Deployment Methods

### **Method 1: Deploy via Vercel Dashboard (Recommended)**

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "feat: ready for production deployment"
git push origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

#### Step 3: Configure Project

**Framework Preset:** Next.js (auto-detected)

**Build Command:** `npm run build` (default)

**Output Directory:** `.next` (default)

**Install Command:** `npm install` (default)

#### Step 4: Add Environment Variables

In the Vercel dashboard, go to **Settings** → **Environment Variables**:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_BASE_URL` | `https://your-project.vercel.app` | Production |

Click **"Deploy"**

#### Step 5: Deployment

Vercel will:
1. Install dependencies
2. Run build command
3. Deploy to global CDN
4. Provide deployment URL

⏱️ **Estimated Time:** 2-3 minutes

---

### **Method 2: Deploy via Vercel CLI**

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

**For Production:**
```bash
vercel --prod
```

**For Preview:**
```bash
vercel
```

Follow the prompts:
1. Set up and deploy? **Yes**
2. Which scope? **Select your account**
3. Link to existing project? **No** (first time)
4. Project name? **coin-siren** (or your choice)
5. Directory? **./** (default)

---

## ⚙️ Vercel Configuration

### **vercel.json**

Already configured with:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [...]
}
```

**Key Settings:**
- **Region:** Seoul (icn1) for Korean users
- **Security Headers:** XSS protection, frame options
- **Cache Headers:** 1 year for static assets

---

## 🌐 Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `yourdomain.com`)

### Step 2: Configure DNS

Add the following DNS records at your domain registrar:

**For Root Domain (`yourdomain.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (`www.yourdomain.com`):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Verify

Vercel will automatically verify and issue SSL certificate.

⏱️ **Propagation Time:** Up to 48 hours (usually < 1 hour)

---

## 🔐 Environment Variables

### **Production Variables**

Set in Vercel Dashboard → **Settings** → **Environment Variables**:

#### Required:
```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

#### Optional (Analytics):
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### **Variable Scopes**

- **Production:** Used in `vercel --prod` deployments
- **Preview:** Used in PR preview deployments
- **Development:** Used in local `vercel dev`

---

## 📊 Build & Deployment Settings

### **Vercel Auto-Configuration**

Vercel automatically detects:
- ✅ Next.js 14 framework
- ✅ App Router
- ✅ API Routes
- ✅ Static assets
- ✅ Image optimization

### **Build Output**

```
Route (app)                              Size     First Load JS
┌ ○ /                                    104 kB          191 kB
├ ○ /api/data                            0 B                0 B
└ [other routes...]

○  (Static)  prerendered as static content
```

**Characteristics:**
- Static generation for main page
- ISR (Incremental Static Regeneration) enabled
- API routes as serverless functions

---

## 🔄 Continuous Deployment

### **Automatic Deployments**

Vercel automatically deploys when you push to Git:

**Production Deployment:**
```bash
git push origin main
```
→ Deploys to production domain

**Preview Deployment:**
```bash
git push origin feature-branch
```
→ Deploys to unique preview URL

### **Preview Deployments**

Every PR gets a unique URL:
```
https://coin-siren-git-feature-branch-username.vercel.app
```

**Benefits:**
- Test before merging
- Share with stakeholders
- QA on real environment

---

## 🎯 Performance Optimization

### **Vercel Features Used**

1. **Edge Network:**
   - Global CDN
   - 40+ regions worldwide
   - Seoul (ICN1) primary region

2. **Image Optimization:**
   - Automatic WebP/AVIF conversion
   - Responsive image serving
   - Lazy loading

3. **Caching:**
   - Static assets: 1 year cache
   - API routes: configurable
   - ISR: 1 hour revalidation

4. **Compression:**
   - Automatic Gzip/Brotli
   - Minified JavaScript
   - Tree shaking

---

## 📈 Monitoring & Analytics

### **Vercel Analytics** (Optional)

Enable in dashboard:
1. **Analytics** → **Enable**
2. View:
   - Page views
   - User sessions
   - Performance metrics
   - Core Web Vitals

### **Vercel Speed Insights** (Optional)

Enable real user monitoring:
```bash
npm install @vercel/speed-insights
```

Add to `layout.tsx`:
```typescript
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## 🛡️ Security Headers

Already configured in `vercel.json`:

```json
{
  "headers": [
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"
    },
    {
      "key": "X-Frame-Options",
      "value": "DENY"
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin-when-cross-origin"
    }
  ]
}
```

**Protection Against:**
- ✅ XSS attacks
- ✅ Clickjacking
- ✅ MIME sniffing
- ✅ Referrer leakage

---

## 🔍 SEO Verification

### **Post-Deployment Checklist**

1. **View Page Source** (Ctrl+U)
   - ✅ Meta tags present
   - ✅ Content in HTML
   - ✅ Structured data

2. **Open Graph**
   - Test on [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Verify image and description

3. **Twitter Cards**
   - Test on [Twitter Card Validator](https://cards-dev.twitter.com/validator)

4. **Google Search Console**
   - Submit sitemap
   - Request indexing

---

## 🐛 Troubleshooting

### **Build Fails**

**Issue:** Build command fails
```bash
npm run build
```

**Solution:**
1. Check error logs in Vercel dashboard
2. Run build locally first
3. Ensure all dependencies in `package.json`
4. Check Node.js version compatibility

### **Environment Variables Not Working**

**Issue:** `process.env.NEXT_PUBLIC_BASE_URL` is undefined

**Solution:**
1. Add to Vercel dashboard
2. Redeploy after adding variables
3. Prefix client-side variables with `NEXT_PUBLIC_`

### **404 on Custom Domain**

**Issue:** Domain shows 404

**Solution:**
1. Verify DNS records
2. Wait for DNS propagation (up to 48h)
3. Check domain is added in Vercel

### **Images Not Loading**

**Issue:** Images return 404

**Solution:**
1. Verify images in `public/` directory
2. Check image paths (case-sensitive)
3. Ensure images committed to Git

---

## 📱 Post-Deployment Testing

### **1. Functional Testing**

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Mobile menu opens
- [ ] Carousel scrolls
- [ ] Footer links work
- [ ] API routes respond

### **2. Performance Testing**

Use [PageSpeed Insights](https://pagespeed.web.dev/):
- Target: 90+ score
- Check Core Web Vitals
- Verify mobile performance

### **3. SEO Testing**

Use [Google Rich Results Test](https://search.google.com/test/rich-results):
- Verify structured data
- Check meta tags
- Test social sharing

### **4. Cross-Browser Testing**

Test on:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile browsers

---

## 🔄 Rollback Procedure

### **If Deployment Has Issues**

#### Via Dashboard:
1. Go to **Deployments**
2. Find previous working deployment
3. Click **"..."** → **"Promote to Production"**

#### Via CLI:
```bash
vercel rollback
```

---

## 📊 Deployment Metrics

### **Expected Performance**

- **Build Time:** 2-3 minutes
- **Deploy Time:** < 1 minute
- **TTFB:** < 200ms
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

### **Bundle Size**

```
First Load JS: 191 kB
Main Route: 104 kB
Shared Chunks: 87.3 kB
```

All within recommended limits! ✅

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Site accessible on production URL
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Mobile responsive working
- [ ] Forms functional (if any)
- [ ] API routes working
- [ ] SSL certificate active
- [ ] SEO meta tags present
- [ ] Performance scores good
- [ ] No console errors

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 🚀 Quick Start Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

## ✨ Summary

**Deployment Status:** ✅ Ready for Production

**What's Deployed:**
- Next.js 14 application
- Server Components with ISR
- API routes as serverless functions
- Optimized images and assets
- Security headers
- SEO optimization

**Deployment Time:** ~3 minutes
**Build Status:** Clean ✅
**Performance:** Optimized ✅
**Security:** Headers configured ✅
**SEO:** Fully optimized ✅

Your application is production-ready and can be deployed to Vercel with zero configuration! 🎉
