# BAGNON STREET

Production-shaped Next.js ecommerce platform for BAGNON STREET: premium storefront, PostgreSQL data model, admin dashboard, Stripe checkout, email automation, SEO routes, and launch documentation.

## Local setup
1. Copy .env.example to .env and fill the values.
2. Run npm install.
3. Run npm run db:migrate.
4. Run npm run db:seed.
5. Run npm run dev.

## Deployment
Deploy to Vercel or another Node host with PostgreSQL. Add the same environment variables, run Prisma migrations during deployment, and configure the Stripe webhook endpoint at /api/stripe/webhook.

## Admin workflow
Use /admin for products, collections, inventory, orders, customers, analytics, media, coupons, newsletter, roles, and settings. The UI is intentionally operational: quiet density, clear state, no decorative overload.

## Brand assets
The supplied original round mark, lifestyle reference, and oval patch are stored in public/brand. Vector fallback marks are also included for lightweight UI surfaces.
