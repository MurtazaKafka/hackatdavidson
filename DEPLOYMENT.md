# Hack@Davidson Website - Deployment Guide

## 🚀 Quick Deploy to Render

### Prerequisites
- A [Render](https://render.com) account
- This GitHub repository connected to Render

### Option 1: Deploy with render.yaml (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push
   ```

2. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository (`davidson-geometry`)
   - Render will automatically detect the `render.yaml` file
   - Click "Apply"

3. **Set Environment Variables**:
   In the Render dashboard, add these environment variables:
   - `VITE_SUPABASE_PROJECT_ID`: `wkweslciqkszfdsiocfc`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd2VzbGNpcWtzemZkc2lvY2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDI3MTMsImV4cCI6MjA3ODg3ODcxM30.7Jei11b-cLFFxzMrpSKUvzwse_WcgrRhL5T3PolRDFE`
   - `VITE_SUPABASE_URL`: `https://wkweslciqkszfdsiocfc.supabase.co`

4. **Deploy**: Render will automatically build and deploy your site!

### Option 2: Manual Static Site Setup

1. **Create a New Static Site**:
   - Go to Render Dashboard
   - Click "New +" → "Static Site"
   - Connect your repository

2. **Configure Build Settings**:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

3. **Add Environment Variables** (same as above)

4. **Deploy**: Click "Create Static Site"

## 🌐 After Deployment

Your site will be available at:
- `https://hack-davidson-website.onrender.com` (or similar)
- You can configure a custom domain in Render settings

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (already configured)
- **Hosting**: Render

## 🔐 Backend (Supabase)

The backend is already set up and configured with:
- User registration storage
- File upload for resumes
- Email confirmation system (via Supabase Edge Functions)

The Supabase project is live and ready to accept registrations!

## 🎯 Features

- Hackathon registration form with validation
- Countdown timer to event
- Team member showcase
- Sponsor logos
- FAQ section
- Schedule display
- Mobile responsive design

## 📝 Notes

- The `.env` file is gitignored for security
- Supabase credentials are public-safe (anon key only)
- All sensitive operations are handled server-side in Supabase
- The site uses localStorage for Supabase session management
