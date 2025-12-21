# Hack@Davidson Website - Vercel Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Prerequisites
- A [Vercel](https://vercel.com) account
- This GitHub repository

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from the project directory**:
   ```bash
   cd "/Users/murtaza/Downloads/school/hack@davidson/website/davidson-geometry"
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **hack-davidson** (or your preferred name)
   - In which directory is your code? **./** (press Enter)
   - Want to override the settings? **N**

5. **Add Environment Variables**:
   ```bash
   vercel env add VITE_SUPABASE_PROJECT_ID
   # Enter: wkweslciqkszfdsiocfc
   # Select: Production, Preview, Development
   
   vercel env add VITE_SUPABASE_PUBLISHABLE_KEY
   # Enter: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd2VzbGNpcWtzemZkc2lvY2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDI3MTMsImV4cCI6MjA3ODg3ODcxM30.7Jei11b-cLFFxzMrpSKUvzwse_WcgrRhL5T3PolRDFE
   # Select: Production, Preview, Development
   
   vercel env add VITE_SUPABASE_URL
   # Enter: https://wkweslciqkszfdsiocfc.supabase.co
   # Select: Production, Preview, Development
   ```

6. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"

2. **Import Git Repository**:
   - Select "Import Git Repository"
   - Choose your GitHub account
   - Select the `davidson-geometry` repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Add Environment Variables**:
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `VITE_SUPABASE_PROJECT_ID` | `wkweslciqkszfdsiocfc` |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrd2VzbGNpcWtzemZkc2lvY2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDI3MTMsImV4cCI6MjA3ODg3ODcxM30.7Jei11b-cLFFxzMrpSKUvzwse_WcgrRhL5T3PolRDFE` |
   | `VITE_SUPABASE_URL` | `https://wkweslciqkszfdsiocfc.supabase.co` |

5. **Deploy**: Click "Deploy"

### Option 3: Deploy via GitHub Integration (Continuous Deployment)

1. **Connect GitHub**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository `MurtazaKafka/davidson-geometry`

2. **Configure as above** (Framework preset, environment variables)

3. **Enable Auto-Deploy**:
   - Every push to `main` branch will auto-deploy
   - Pull requests get preview deployments

## 🌐 After Deployment

Your site will be available at:
- Production: `https://hack-davidson.vercel.app` (or custom domain)
- Preview deployments for each PR

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:8080

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Project Structure

```
davidson-geometry/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── integrations/    # Supabase integration
│   ├── data/            # Static data (schools, countries)
│   └── lib/             # Utility functions
├── public/              # Static assets
├── dist/                # Production build (gitignored)
├── vercel.json          # Vercel configuration
└── .env                 # Environment variables (gitignored)
```

## 🔐 Backend (Supabase)

The backend is fully configured with:
- ✅ User registration database
- ✅ File upload for resumes
- ✅ Email confirmation via Edge Functions
- ✅ Real-time data updates

**Supabase Dashboard**: https://supabase.com/dashboard/project/wkweslciqkszfdsiocfc

## 🎯 Features

- ✨ Hackathon registration with comprehensive form validation
- ⏱️ Live countdown timer to event
- 👥 Team member showcase with photos
- 🏢 Sponsor logos and information
- ❓ FAQ accordion section
- 📅 Event schedule timeline
- 📱 Fully responsive mobile design
- 🎨 Modern UI with Tailwind CSS + shadcn/ui
- 🔒 Secure file uploads to Supabase Storage
- ✉️ Automated email confirmations

## 🔄 Automatic Deployments

With Vercel + GitHub integration:
- **Push to `main`** → Automatic production deployment
- **Create PR** → Automatic preview deployment with unique URL
- **Git tags** → Can trigger special deployments

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (PostgreSQL + Auth + Storage + Edge Functions)
- **Hosting**: Vercel (with CDN and edge caching)
- **Forms**: React Hook Form + Zod validation

## 📝 Environment Variables

Required for deployment:

```env
VITE_SUPABASE_PROJECT_ID=wkweslciqkszfdsiocfc
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://wkweslciqkszfdsiocfc.supabase.co
```

These are **public-safe** credentials (anon key). All sensitive operations are handled server-side in Supabase with Row Level Security (RLS) policies.

## 🚨 Important Notes

- The `.env` file is gitignored and should never be committed
- Environment variables must be set in Vercel dashboard or CLI
- Supabase anon key is safe to expose in client-side code
- All database operations are protected by RLS policies
- Resume uploads are securely stored in Supabase Storage

## 🎓 Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `hackdavidson.com`)
4. Update DNS records as instructed by Vercel
5. SSL certificates are automatically provisioned

## 📊 Monitoring

Vercel provides:
- Real-time deployment logs
- Performance analytics
- Error tracking
- Visitor analytics

Access at: https://vercel.com/dashboard

---

**Need help?** Check the [Vercel Documentation](https://vercel.com/docs) or [Supabase Documentation](https://supabase.com/docs)
