import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";
export function ProductCard({ product }: { product: Product }) { return <article className="group"><Link href={"/products/" + product.slug} className="focus-ring block"><div className="grid aspect-[4/5] place-items-center bg-bone p-10 transition duration-300 group-hover:bg-ink/10"><Image src={product.image} alt="" width={260} height={260} className="h-auto w-4/5 max-w-[260px]" /></div><div className="mt-4 flex items-start justify-between gap-4"><div><h2 className="text-base font-medium">{product.name}</h2><p className="mt-1 text-sm text-ink/60">{product.color}</p></div><p className="text-sm">{formatPrice(product.price)}</p></div></Link></article>; }
