# 🚀 Quick Start Guide

## ⚡ Getting Started (1 Minute)

### Run the Development Server
```bash
npm install     # Already done ✅
npm run dev     # Currently running at http://localhost:5173 ✅
```

### Build for Production
```bash
npm run build
```

---

## 📋 Pre-Deployment Checklist

### Before deploying to AlwaysData:

- [ ] **Configure EmailJS** (Optional but recommended)
  - Sign up at https://www.emailjs.com/
  - Get Service ID, Template ID, and Public Key
  - Update `src/components/Contact.jsx` (lines 50-52)
  - Rebuild: `npm run build`

- [ ] **Verify All Content**
  - Company information
  - CEO details
  - Projects/portfolio items
  - Contact information

- [ ] **Test Contact Form**
  - Fill out the form
  - Check console for demo mode message
  - Verify form validation works

- [ ] **Build the Project**
  - Run `npm run build`
  - Verify `dist/` folder is created
  - Check file sizes are reasonable

---

## 🌐 Deploy to AlwaysData (5 Minutes)

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload Files
**Via SSH:**
```bash
scp -r dist/* your-account@ssh-your-account.alwaysdata.net:~/www/tootiye/
```

**Via SFTP:**
- Use FileZilla/Cyberduck
- Connect to `ssh-your-account.alwaysdata.net`
- Upload all files from `dist/` folder

### Step 3: Configure Site
1. Go to AlwaysData Admin Panel
2. Navigate to **Web > Sites**
3. Add/edit site:
   - Domain: `tootiye.com`
   - Type: Static/PHP
   - Root: `/www/tootiye`
4. Enable SSL (Let's Encrypt)

### Step 4: Point DNS
Update at your domain registrar:
- **A Record**: `@` → AlwaysData IP
- **CNAME**: `www` → `your-account.alwaysdata.net`

---

## 🎯 Key Files Reference

| File | Purpose |
|------|---------|
| `src/components/Contact.jsx` | Contact form + EmailJS config |
| `src/components/About.jsx` | Company info, CEO profile |
| `src/components/Projects.jsx` | Portfolio items |
| `tailwind.config.js` | Colors and styling |
| `public/.htaccess` | Server configuration |
| `dist/` | Production build output |

---

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'royal-blue': '#1E3A8A',  // Change here
  'gold': '#FACC15',        // Change here
}
```

Then rebuild: `npm run build`

---

## 📧 EmailJS Setup (3 Minutes)

1. **Sign up**: https://www.emailjs.com/
2. **Add Email Service** (Gmail/Outlook)
3. **Create Template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. **Get Credentials** from dashboard
5. **Update** `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'service_xxxxxx'
   const templateId = 'template_xxxxxx'
   const publicKey = 'your_public_key'
   ```
6. **Rebuild**: `npm run build`
7. **Redeploy** to AlwaysData

---

## 🔍 Troubleshooting

### Site not loading?
- Check DNS propagation: https://www.whatsmydns.net/
- Verify files uploaded to correct directory
- Check AlwaysData error logs

### Contact form not working?
- In demo mode? Configure EmailJS
- Check browser console for errors
- Verify EmailJS credentials

### Styling looks wrong?
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Verify all files uploaded
- Check `.htaccess` is present

### 404 errors on pages?
- Ensure `.htaccess` is in root directory
- Verify mod_rewrite is enabled on server

---

## 📚 Documentation Files

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **PROJECT_SUMMARY.md** - Project overview
- **QUICK_START.md** - This file

---

## ✅ Current Status

✅ **Development server running** at http://localhost:5173
✅ **All components built** and working
✅ **Production build ready** - Run `npm run build`
⚠️ **EmailJS** - Demo mode (needs configuration)
⚠️ **Deployment** - Ready to deploy to AlwaysData

---

## 🎉 You're Ready!

The website is complete and ready to deploy. Follow the steps above or check DEPLOYMENT.md for detailed instructions.

**Questions?** Contact: contact@tootiye.com | 0781050181
