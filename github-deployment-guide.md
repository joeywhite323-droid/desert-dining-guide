# GitHub Deployment Guide

Follow these steps to host Desert Dining Guide on GitHub Pages for free.

## 1. Create a Repository
1. Log into your GitHub account and navigate to your dashboard.
2. Click the **New** button (or `+` icon in the top right) to create a new repository.
3. Name the repository (e.g., `desert-dining-guide`).
4. Set the repository to **Public**.
5. Leave "Initialize this repository with a README" unchecked for now.
6. Click **Create repository**.

## 2. Upload Files
1. After creating the repository, click the link that says **"uploading an existing file"** on the quick setup page.
2. Drag and drop all the files from your local `desert-dining-guide` folder (including `index.html`, the `css` folder, `js` folder, etc.) into the upload box.
3. Write a brief commit message at the bottom (e.g., "Initial site commit") and click **Commit changes**.

*Alternatively, you can push the codebase from your terminal using Git:*
```bash
cd desert-dining-guide
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/desert-dining-guide.git
git push -u origin main
```

## 3. Enable GitHub Pages
1. On your repository page, click the **Settings** tab.
2. In the left sidebar, scroll down and click **Pages**.
3. Under **Build and deployment**, ensure "Source" is set to "Deploy from a branch".
4. Under **Branch**, select the `main` branch and the `/ (root)` folder.
5. Click **Save**.
6. Wait 1-2 minutes. GitHub will automatically build and deploy your site. You will see a live link at the top of the settings page (e.g., `https://[username].github.io/desert-dining-guide/`).

## 4. Connect a Custom Domain (Optional)
If you purchased a domain like `desertdining.com`:
1. Go to your domain registrar (Namecheap, GoDaddy, etc.) and open your DNS settings.
2. Create `A` records pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Create a `CNAME` record for `www` pointing to your `[username].github.io`.
4. In your GitHub repository **Pages** settings, scroll down to **Custom domain**.
5. Enter your domain name and click **Save**.
6. GitHub will verify the DNS and generate a free SSL certificate for you. This might take up to 24 hours to propagate.
