import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Newsletter" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">Newsletter</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">Receive the record.</h1><form action="/api/newsletter" method="post" className="mt-10 grid max-w-xl gap-3 md:grid-cols-[1fr_auto]"><label className="sr-only" htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="name@example.com" className="border border-ink/20 bg-paper p-3" /><button className="focus-ring bg-ink px-5 py-3 text-paper">Subscribe</button></form></main><SiteFooter /></>; }
