# Patrick D. Ferris — Author Website

A clean, modern author portfolio built with **Next.js 15** and **Tailwind CSS**, designed to replace the existing WordPress site at patrickdferris.com.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Deployment:** Vercel (zero-config)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. Done.

No environment variables are required for the static version.

## Content To Update

### Author Photo
Replace the photo placeholder in `app/page.tsx` inside the `About()` component. Add the image to `/public/` and use:
```tsx
import Image from "next/image"
<Image src="/author-photo.jpg" alt="Patrick D. Ferris" fill className="object-cover" />
```

### Reviews
The review quotes included are placeholder/editorial descriptions based on Amazon book listings. **Replace them with real verified reader reviews from Amazon or Goodreads** by editing the `reviews` arrays inside the `SERIES` data structure in `app/page.tsx`.

### Contact Form Backend
The contact form currently shows a success message without sending anything. To wire it up:
- **Formspree:** Free tier, no backend needed. Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the `handleSubmit` override.
- **Resend / Sendgrid:** Create a Next.js API route at `app/api/contact/route.ts`.

### Custom Domain on Vercel
In Vercel project settings → Domains → add `patrickdferris.com` and update DNS records at your registrar.

## Project Structure
```
app/
  globals.css   # Tailwind + Google Fonts import
  layout.tsx    # Root layout + metadata
  page.tsx      # All page sections (single file for simplicity)
public/         # Static assets (add author photo here)
```

## Series & Books Data
All series descriptions, book data, and Amazon links live in the `SERIES` array at the top of `app/page.tsx`. Easy to edit without touching any other code.
