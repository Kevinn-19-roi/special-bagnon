import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Account" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">Account</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">Your record.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">Customer accounts support order history, saved contact details, and future membership-led releases.</p><a href="/account/orders" className="focus-ring mt-8 inline-block border border-ink px-5 py-3 text-sm">View orders</a></main><SiteFooter /></>; }
