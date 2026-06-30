# Deployment Guide

## Vercel
1. Connect the GitHub repository to Vercel.
2. Set the production environment variables from .env.example.
3. Ensure DATABASE_URL points to a reachable PostgreSQL database.
4. Deploy with the default Vercel Next.js settings or the included vercel.json.
5. Add the Stripe webhook endpoint: https://your-domain.com/api/stripe/webhook.
6. Run npm run db:migrate against production before first traffic, then npm run db:seed if seed data is desired.

## Required services
- PostgreSQL database
- Stripe account and webhook secret
- Resend API key for email automation
- Auth secret generated with a secure random value
