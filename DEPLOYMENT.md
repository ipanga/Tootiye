# Deployment Guide for AlwaysData

This guide provides step-by-step instructions for deploying the Tootiye Enterprises website to AlwaysData.

## Prerequisites

- AlwaysData account
- Domain name (tootiye.com) configured
- SSH access to your AlwaysData account
- Git installed on the server (usually pre-installed)
- Node.js and npm installed on the server
- GitHub repository: https://github.com/ipanga/Tootiye.git

## Quick Deployment Steps

### Method 1: Deploy Directly from Git Repository (Recommended)

This method deploys directly from your GitHub repository, allowing for easy updates and version control.

#### Initial Setup

```bash
# 1. Connect to AlwaysData via SSH
ssh your-account@ssh-your-account.alwaysdata.net

# 2. Navigate to your web directory
cd ~/www/

# 3. Clone the repository
git clone https://github.com/ipanga/Tootiye.git tootiye
cd tootiye

# 4. Install dependencies
npm install

# 5. Build the project
npm run build

# 6. Exit SSH
exit
```

#### Configure Site to Use the Built Files

After building, configure your AlwaysData site:

1. Go to **Web > Sites** in AlwaysData admin
2. Edit your site configuration
3. Set **Root directory** to: `/www/tootiye/dist`
4. Save the configuration

#### Updating the Site

When you push changes to GitHub, update your site:

```bash
# 1. SSH into your server
ssh your-account@ssh-your-account.alwaysdata.net

# 2. Navigate to project directory
cd ~/www/tootiye

# 3. Pull latest changes
git pull origin main

# 4. Install any new dependencies
npm install

# 5. Rebuild the project
npm run build

# 6. Exit
exit
```

#### Automated Deployment Script (Optional)

Create a deployment script on the server for easier updates:

```bash
# On your server, create deploy.sh
cat > ~/www/tootiye/deploy.sh << 'EOF'
#!/bin/bash
cd ~/www/tootiye
echo "Pulling latest changes..."
git pull origin main
echo "Installing dependencies..."
npm install
echo "Building project..."
npm run build
echo "Deployment complete!"
EOF

# Make it executable
chmod +x ~/www/tootiye/deploy.sh
```

Then update your site with a single command:
```bash
ssh your-account@ssh-your-account.alwaysdata.net "~/www/tootiye/deploy.sh"
```

### Method 2: Build Locally and Upload

#### 1. Build the Project Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with all static files.

#### 2. Deploy via SSH

```bash
# Connect to AlwaysData via SSH
ssh your-account@ssh-your-account.alwaysdata.net

# Navigate to your web directory
cd ~/www/

# Create a directory for your site (if needed)
mkdir tootiye
cd tootiye

# Exit SSH
exit

# Upload files from local machine
scp -r dist/* your-account@ssh-your-account.alwaysdata.net:~/www/tootiye/
```

### 3. Deploy via FTP/SFTP

1. Use an FTP client (FileZilla, Cyberduck, etc.)
2. Connect with your AlwaysData credentials:
   - **Host**: ssh-your-account.alwaysdata.net
   - **Port**: 22 (SFTP) or 21 (FTP)
   - **Username**: your-account
   - **Password**: your-password

3. Navigate to `/www/tootiye/`
4. Upload all files from the `dist` folder

### 4. Deploy via AlwaysData Web Interface

1. Log in to [AlwaysData Admin](https://admin.alwaysdata.com/)
2. Go to **Web > File Manager**
3. Navigate to your site directory
4. Upload the contents of the `dist` folder

## Site Configuration

### Add/Configure Site in AlwaysData

1. Go to **Web > Sites** in AlwaysData admin
2. Click **Add a site**
3. Configure:
   - **Name**: tootiye.com
   - **Type**: Static/PHP
   - **Addresses**: 
     - tootiye.com
     - www.tootiye.com
   - **Root directory**: /www/tootiye (or your chosen path)

4. Save the configuration

### URL Rewriting (Important!)

The `.htaccess` file in the `public` folder handles client-side routing. Make sure it's uploaded with the other files.

If routing doesn't work:
1. Verify `.htaccess` is in the root directory
2. Ensure Apache `mod_rewrite` is enabled (usually enabled by default)

## SSL Certificate

### Enable HTTPS (Recommended)

1. In AlwaysData admin, go to **Web > Sites**
2. Click on your site (tootiye.com)
3. Under **SSL**, choose:
   - **Let's Encrypt** (free, automatic renewal)
   - Or upload your own certificate

4. Force HTTPS by adding to `.htaccess`:
```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Domain Configuration

### Configure DNS

1. In your domain registrar (where you bought tootiye.com):
2. Update DNS records to point to AlwaysData:
   - **A Record**: Point to AlwaysData IP
   - **CNAME**: www → your-account.alwaysdata.net

3. Get your AlwaysData IP:
   - Go to **Domains** in AlwaysData admin
   - Find your account's IP address

### Example DNS Records:
```
Type    Name    Value
A       @       185.31.40.11 (example IP)
CNAME   www     your-account.alwaysdata.net
```

## Post-Deployment

### Verify Deployment

1. Visit https://tootiye.com
2. Check all pages and sections
3. Test the contact form
4. Verify mobile responsiveness

### Configure EmailJS for Contact Form

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Update in `src/components/Contact.jsx`:
```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

6. Rebuild and redeploy:
```bash
npm run build
# Upload new dist files
```

## Updating the Site

### Using Git Deployment (Recommended)

If you deployed using Method 1 (Git Repository):

```bash
# 1. Make your changes locally and commit
git add .
git commit -m "Your changes description"
git push origin main

# 2. Deploy to server (using the deployment script)
ssh your-account@ssh-your-account.alwaysdata.net "~/www/tootiye/deploy.sh"

# Or manually:
ssh your-account@ssh-your-account.alwaysdata.net
cd ~/www/tootiye
git pull origin main
npm install
npm run build
exit

# 3. Clear browser cache or use Ctrl+F5 to see changes
```

### Using Local Build and Upload

If you deployed using Method 2 (Local Build):

```bash
# 1. Make your changes to the code

# 2. Rebuild
npm run build

# 3. Upload new files
scp -r dist/* your-account@ssh-your-account.alwaysdata.net:~/www/tootiye/dist/

# 4. Clear browser cache or use Ctrl+F5 to see changes
```

## Troubleshooting

### Git Deployment Issues

#### Node.js not found
If you get "npm: command not found":
```bash
# Check Node.js version
node --version
npm --version

# If not installed, contact AlwaysData support to install Node.js
# Or check if Node.js is available in a different location
which node
```

#### Git clone fails with authentication error
If the repository is private:
```bash
# Use SSH URL instead
git clone git@github.com:ipanga/Tootiye.git tootiye

# Or configure GitHub personal access token
git clone https://YOUR_TOKEN@github.com/ipanga/Tootiye.git tootiye
```

#### Build fails with memory errors
If npm build fails due to memory:
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=2048" npm run build
```

#### Permission denied errors
```bash
# Fix file permissions
chmod -R 755 ~/www/tootiye
```

### Pages return 404 errors
- Check `.htaccess` file is present in the `dist` folder
- Verify mod_rewrite is enabled
- Check file permissions (should be 644 for files, 755 for directories)
- Ensure site root directory points to `/www/tootiye/dist`

### CSS/JS not loading
- Clear browser cache
- Check file paths in browser console
- Verify all files uploaded correctly
- Check CORS settings if loading from CDN
- Ensure build completed successfully

### Contact form not working
- Verify EmailJS credentials
- Check browser console for errors
- Test EmailJS directly in their dashboard

### Site not loading
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)
- Verify site configuration in AlwaysData
- Check error logs in AlwaysData admin (**Web > Sites > Logs**)
- Ensure the `dist` folder exists and contains files

## Performance Optimization

### Enable Caching
Already configured in `.htaccess` for:
- Images: 1 year
- CSS/JS: 1 month
- HTML: No cache

### Enable GZIP Compression
Already configured in `.htaccess`

### Monitor Performance
- Use Google PageSpeed Insights
- Monitor with Google Analytics
- Check AlwaysData resource usage

## Backup

### Regular Backups
1. In AlwaysData admin: **Advanced > Backups**
2. Enable automatic daily backups
3. Download backups periodically

### Manual Backup
```bash
# Download all site files
scp -r your-account@ssh-your-account.alwaysdata.net:~/www/tootiye/ ./backup/
```

## Support

### AlwaysData Support
- Documentation: https://help.alwaysdata.com/en/
- Contact: support@alwaysdata.com
- Admin Panel: https://admin.alwaysdata.com/

### Project Support
- Email: contact@tootiye.com
- Phone: 0781050181

---

**Last Updated**: 2024
**Version**: 1.0.0
