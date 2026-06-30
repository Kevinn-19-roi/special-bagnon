import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { collections } from "@/lib/catalog";
export const metadata = { title: "Collections" };
export default function CollectionsPage() { return <><SiteHeader /><main className="container py-14 md:py-24"><p className="eyebrow">Collections</p><h1 className="editorial-heading mt-4 text-6xl md:text-8xl">The current language.</h1><div className="mt-12 grid gap-8 md:grid-cols-2">{collections.map((collection) => <Link href={"/collections/" + collection.slug} key={collection.slug} className="focus-ring group"><div className="grid aspect-[5/4] place-items-center bg-bone p-12"><Image src={collection.image} alt="" width={420} height={320} /></div><h2 className="mt-5 text-2xl">{collection.name}</h2><p className="mt-2 max-w-lg text-sm leading-6 text-ink/65">{collection.note}</p></Link>)}</div></main><SiteFooter /></>; }
