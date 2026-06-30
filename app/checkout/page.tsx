import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Checkout" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">Checkout</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">A quiet handoff.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">Checkout creation is handled by the Stripe API route. Payment confirmation returns through the webhook, records the order, reduces inventory, and sends email.</p><form action="/api/checkout" method="post" className="mt-10 max-w-md"><button className="focus-ring bg-ink px-5 py-3 text-paper">Proceed securely</button></form></main><SiteFooter /></>; }
