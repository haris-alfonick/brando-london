"use server";

import { fetchWooCommerceProducts } from "@/utils/wooCommerceApi";

export async function searchProducts(query: string) {
  if (!query || query.length < 2) return [];

  const { products } = await fetchWooCommerceProducts({
    search: query,
    per_page: 5,
  });

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    image: product.images?.[0]?.src || "",
    price: product.price,
  }));
}