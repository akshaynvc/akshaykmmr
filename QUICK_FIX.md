# Quick GitHub Pages Setup Fix

## The Issue
The deployment failed because:
1. GitHub Actions needs proper permissions
2. GitHub Pages needs to be configured correctly

## Immediate Fix Steps

### 1. Repository Settings
Go to your GitHub repository settings:

**Repository Settings → Pages:**
- Source: **Deploy from a branch** 
- Branch: **gh-pages** 
- Folder: **/ (root)**

OR use the new method:
- Source: **GitHub Actions**

### 2. Repository Settings → Actions → General
Scroll down to **Workflow permissions**:
- Select: **Read and write permissions**
- Check: **Allow GitHub Actions to create and approve pull requests**

### 3. If the above doesn't work, try this alternative workflow:

Replace the entire `.github/workflows/deploy.yml` with this simpler version:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          force_orphan: true
```

### 4. Alternative: Manual Upload
If automation keeps failing:
1. Run `npm run build` locally
2. Go to your repository Settings → Pages
3. Choose "Deploy from a branch"
4. Upload the `out` folder contents to a `gh-pages` branch manually

### 5. Check Your Repository URL
Your portfolio will be available at:
`https://akshaynvc.github.io/akshaykmmr/`

## Test the Fix
1. Commit these changes
2. Push to GitHub
3. Check the Actions tab for deployment status
4. Visit your portfolio URL

If issues persist, the manual upload method in step 4 will work as a backup!