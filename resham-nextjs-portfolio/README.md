# Resham Parajuli — Next.js + TypeScript Portfolio

Responsive personal portfolio built with Next.js App Router, TypeScript, React and custom CSS. Ready for Vercel.

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repository.
3. Keep Framework Preset as **Next.js**.
4. Set **Root Directory** to `resham-nextjs-portfolio`.
5. Add `reshamparajuli.com.np` in Project → Settings → Domains.
6. Follow the exact DNS records Vercel displays. Do not guess DNS values.
7. Vercel automatically provisions HTTPS after domain verification.

## Replace/add project screenshots
NepShorts screenshots are in `public/projects/nepshorts/`. The `shots` array near the top of `app/page.tsx` controls the gallery. Add an image to that folder, then update its `src`, `title`, and `note` in the array. For another project, create `public/projects/your-project/` and add a project section in `app/page.tsx`.

## Before publishing
Review the contact email and personal wording. The project credits identify Resham Parajuli as Flutter Frontend & Mobile App Developer and Kishmat Bhattarai as Python Backend Developer.
