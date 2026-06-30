export type Product = { slug: string; name: string; collection: string; price: number; color: string; description: string; image: string; sizes: string[]; stock: number; story: string; };
export const collections = [
  { slug: "collection-01", name: "Collection 01", note: "A first language of street uniform, quiet markings, and daily movement.", image: "/brand/original-oval-patch.png" },
  { slug: "objects", name: "Objects", note: "Carry pieces, caps, and markers for the rhythm outside.", image: "/brand/original-round-mark.png" }
];
export const products: Product[] = [
  { slug: "street-issue-cap", name: "Street Issue Cap", collection: "collection-01", price: 86, color: "Washed grey", description: "Low crown, softened cotton, front field patch.", image: "/brand/lifestyle-skate-reference.png", sizes: ["One size"], stock: 24, story: "Built for long days, weather shifts, and a face kept partly private." },
  { slug: "identity-pack", name: "Identity Pack", collection: "objects", price: 148, color: "Black", description: "Compact daily bag with woven BAGNON STREET marker.", image: "/brand/original-round-mark.png", sizes: ["One size"], stock: 18, story: "An object for movement. No ornament beyond recognition." },
  { slug: "night-walk-tee", name: "Night Walk Tee", collection: "collection-01", price: 74, color: "Ink", description: "Dense cotton jersey, relaxed shape, small chest emblem.", image: "/brand/original-oval-patch.png", sizes: ["S", "M", "L", "XL"], stock: 42, story: "A base layer for identity, silence, and motion." }
];
export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
export function formatPrice(value: number) { return new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value); }
