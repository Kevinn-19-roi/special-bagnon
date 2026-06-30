import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { collections, products } from "@/lib/catalog";
export function generateStaticParams() { return collections.map((collection) => ({ slug: collection.slug })); }
export default async function CollectionDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const collection = collections.find((item) => item.slug === slug); if (!collection) notFound(); const filtered = products.filter((product) => product.collection === collection.slug); return <><SiteHeader /><main className="container py-14 md:py-24"><p className="eyebrow">{collection.name}</p><h1 className="editorial-heading mt-4 max-w-4xl text-6xl md:text-8xl">{collection.note}</h1><div className="mt-14 grid gap-8 md:grid-cols-3">{filtered.map((product) => <ProductCard product={product} key={product.slug} />)}</div></main><SiteFooter /></>; }
