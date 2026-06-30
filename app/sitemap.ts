import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/catalog";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"; return ["", "/collections", "/editorial", "/newsletter", ...collections.map((c) => "/collections/" + c.slug), ...products.map((p) => "/products/" + p.slug)].map((url) => ({ url: base + url, lastModified: new Date() })); }
