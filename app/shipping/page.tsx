import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Shipping" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">Shipping</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">Prepared with care.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-ink/70">Shipping zones, rates, and fulfillment timing are managed in Settings.</p></main><SiteFooter /></>; }
