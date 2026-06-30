import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata = { title: "Editorial" };
export default function Page() { return <><SiteHeader /><main className="container py-16 md:py-24"><p className="eyebrow">House note</p><h1 className="editorial-heading mt-4 max-w-5xl text-6xl md:text-8xl">Identity does not need volume.</h1><div className="mt-12 grid gap-8 text-lg leading-8 text-ink/70 md:grid-cols-2"><p>BAGNON STREET begins with objects that belong outside: caps, packs, cotton layers, and signs of recognition.</p><p>The work is not costume. It is a daily uniform for people who move through the city with their own pace.</p></div></main><SiteFooter /></>; }
