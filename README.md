# Tootiye Enterprises Ltd - Corporate Website

A modern, responsive corporate website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Includes meta tags and Open Graph for better search visibility
- **Fast Loading**: Built with Vite for optimal performance
- **Contact Form**: Integrated with EmailJS for direct email submissions
- **Smooth Navigation**: Active section highlighting and smooth scrolling

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **EmailJS** - Email service integration

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure EmailJS (for contact form):**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update the credentials in `src/components/Contact.jsx`:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID'
     const templateId = 'YOUR_TEMPLATE_ID'
     const publicKey = 'YOUR_PUBLIC_KEY'
     ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

Build the static files:
```bash
npm run build
```

The optimized files will be in the `dist` folder.

Preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment to AlwaysData

Follow these steps to deploy your React app to AlwaysData:

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Prepare Files for Upload
1. The `dist` folder contains all the static files needed
2. Compress the `dist` folder contents (not the folder itself) into a ZIP file

### Step 3: Upload to AlwaysData

**Option A: Via SSH/SFTP**
1. Connect to your AlwaysData account via SSH or SFTP
2. Navigate to your site's web directory (usually `~/www/`)
3. Upload all files from the `dist` folder

**Option B: Via File Manager**
1. Log in to your AlwaysData admin panel
2. Go to **Web > Sites**
3. Configure your site to point to the directory where you'll upload files
4. Use the file manager to upload the contents of the `dist` folder

### Step 4: Configure the Site

1. In AlwaysData admin, go to **Web > Sites**
2. Add/Edit your site configuration:
   - **Site name**: tootiye.com
   - **Type**: Static files / PHP
   - **Root directory**: Point to where you uploaded the files

3. **Important**: Configure the server to handle React Router:
   - If using Apache, create/update `.htaccess` in the root directory:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteCond %{REQUEST_FILENAME} !-l
       RewriteRule . /index.html [L]
     </IfModule>
     ```

### Step 5: DNS Configuration
1. Point your domain `tootiye.com` to AlwaysData servers
2. In AlwaysData, go to **Domains** and add your domain
3. Wait for DNS propagation (can take up to 48 hours)

### Additional Resources
- [AlwaysData React Deployment Guide](https://help.alwaysdata.com/en/guides/deploy-react-app/)
- [AlwaysData Documentation](https://help.alwaysdata.com/en/)

## 📁 Project Structure

```
tootiye-enterprises/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
The main colors are defined in `tailwind.config.js`:
- Royal Blue: `#1E3A8A`
- Gold: `#FACC15`

### Content
Update content in the respective component files:
- **Company Info**: `src/components/About.jsx`
- **Services**: `src/components/Services.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`

### SEO
Update meta tags in `index.html` for better search engine optimization.

## 📞 Company Information

**Tootiye Enterprises Ltd**
- **Address**: Kalungu Road, Kampala Town, Kampala Central, Uganda
- **P.O. Box**: 191852
- **Phone**: 0781050181
- **Email**: contact@tootiye.com
- **Website**: https://tootiye.com
- **CEO**: Valery Kamoji Ipanga

## 📝 License

© 2024 Tootiye Enterprises Ltd. All rights reserved.

## 🤝 Support

For technical support or inquiries, please contact:
- Email: contact@tootiye.com
- Phone: 0781050181

---

Built with ❤️ by Tootiye Enterprises Ltd
