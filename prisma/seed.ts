import { PrismaClient } from "@prisma/client";
import { collections, products } from "../lib/catalog";

const prisma = new PrismaClient();

async function main() {
  for (const collection of collections) {
    await prisma.collection.upsert({
      where: { slug: collection.slug },
      update: { name: collection.name, note: collection.note, imageUrl: collection.image },
      create: { slug: collection.slug, name: collection.name, note: collection.note, imageUrl: collection.image }
    });
  }

  for (const item of products) {
    const collection = await prisma.collection.findUnique({ where: { slug: item.collection } });
    await prisma.product.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name,
        description: item.description,
        story: item.story,
        status: "ACTIVE",
        collectionId: collection?.id
      },
      create: {
        slug: item.slug,
        name: item.name,
        description: item.description,
        story: item.story,
        status: "ACTIVE",
        collectionId: collection?.id,
        variants: {
          create: {
            sku: "BS-" + item.slug.toUpperCase(),
            size: item.sizes[0],
            color: item.color,
            price: item.price * 100,
            inventory: { create: { quantity: item.stock } }
          }
        },
        media: { create: { url: item.image, alt: item.name, usage: "product" } }
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
