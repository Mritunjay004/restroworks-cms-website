### README.md

````markdown
# Restroworks CMS Website

A high-performance, SEO-optimized, multi-language website built with Next.js 14+ and PayloadCMS.

## 🚀 Features

- **CMS-Powered**: Dynamic content management with PayloadCMS
- **Multi-language Support**: English and Spanish with language switcher
- **SEO Optimized**: Server-side rendering, sitemap, robots.txt
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modular Blocks**: Reusable Hero, Features, Testimonials, and CTA blocks
- **Contact Form**: Integrated with PayloadCMS for data storage

## 📦 Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Backend**: PayloadCMS
- **Database**: MongoDB
- **Styling**: TailwindCSS
- **Deployment**: Vercel

## 🛠 Setup Instructions

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:

   cd backend

2. Install dependencies:

   npm install

3. Create `.env` file:

   ```env
   DATABASE_URI=mongodb://localhost:27017/restroworks
   PAYLOAD_SECRET=your-secret-key
   PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
   ```

4. Start the backend:

   ```bash
   npm run dev
   ```

5. Access admin panel at `http://localhost:3001/admin`

### Frontend Setup

1. Navigate to frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` file:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

4. Start the frontend:

   ```bash
   npm run dev
   ```

5. Access website at `http://localhost:3000`

## 📝 CMS Modeling Choices

### Pages Collection

- **Flexible Block System**: Allows editors to build pages with reusable blocks
- **Localization**: All content fields support multiple languages
- **SEO Fields**: Built-in SEO metadata management

### Content Blocks

1. **Hero Block**: Main banner with CTA
2. **Features Block**: Showcase product features
3. **Testimonials Block**: Customer testimonials
4. **CTA Block**: Call-to-action sections

### Contact Submissions

- Stores form submissions with timestamp
- Accessible through admin panel

## 🎨 Creating/Editing Content

### Creating a New Page

1. Login to PayloadCMS admin
2. Navigate to Pages collection
3. Click "Create new Page"
4. Add blocks and configure content
5. Set SEO metadata
6. Publish

### Managing Translations

1. Select language from dropdown in admin
2. Fill in translated content
3. Fallback to default language if not translated

## 🚀 Deployment

### Frontend (Vercel)

```bash
vercel --prod
```

### Backend (Railway/Render)

1. Connect GitHub repository
2. Set environment variables
3. Deploy

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Static generation for pages
- API response caching
- Lazy loading for components

## 🔗 Live Demo

[Live Demo URL](https://restroworks-flame.vercel.app/)
[Admin Panel URL](https://restroworks-backend.vercel.app/)

## 📧 Contact

For questions, please reach out to [mritunjaygupta004@gmail.com]

```

```
````
