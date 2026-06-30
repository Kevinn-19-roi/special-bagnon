import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Orders" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">Orders</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">Past movement.</h1><p className="mt-8 text-ink/70">Signed-in customers will see confirmed orders here.</p></main><SiteFooter /></>; }
