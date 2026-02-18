# 3doodles webshop

## Overview
Frontend-only prototype for the 3doodles webshop. Includes product variants, cart, shipping estimator, personalization input, admin placeholders, blog, and checkout flow (Stripe placeholder in EUR).

## Development
```bash
npm install
npm run dev
```

## Staging deployment (GitHub Pages)
1. Ensure `vite.config.ts` has `base: "/3doodles/"`.
2. Build:
   ```bash
   npm run build
   ```
3. Deploy `dist/` to the `gh-pages` branch or use `pages` settings.
   ```bash
   npx gh-pages -d dist
   ```

## Production deployment
- Recommended: Vercel, Netlify, or Cloudflare Pages.
- Set `base` to `/` in `vite.config.ts` (or use an environment flag).
- Add environment variables for Stripe publishable key and analytics IDs.

## Stripe integration (EUR)
- Replace the checkout button in `src/App.tsx` with a redirect to a Stripe Checkout Session.
- Use your backend to create the session with `currency: "eur"` and pass line items from cart.

## Analytics
- Add a script tag in `index.html` for your analytics provider (GA4, Plausible, etc.).
- Track add-to-cart, checkout start, and purchase events.

## Product import formats
See `src/data/products.ts` for sample CSV and JSON shapes.

## Notes
- Branding and photography are placeholders per spec.
- Inventory management is mocked; connect to your database or CMS for live data.
