// utils/wooCommerceFetch.ts
import { fetchWooCommerceProducts } from "@/utils/wooCommerceApi";

export async function fetchHomePageData() {
  try {
    const [featuredProducts, newArrivals, bestSellers, mensJackets, womenJackets] = await Promise.all([
      fetchWooCommerceProducts({ featured: true, per_page: 4 }),
      fetchWooCommerceProducts({ newArrivals: true, per_page: 4 }),
      fetchWooCommerceProducts({ bestSeller: true, per_page: 4 }),
      fetchWooCommerceProducts({ categorySlug: 'mens-jackets', per_page: 4 }),
      fetchWooCommerceProducts({ categorySlug: 'womens-jackets', per_page: 4 }),
    ]);

    return {
      featuredProducts: featuredProducts.products || [],
      newArrivals: newArrivals.products || [],
      bestSellers: bestSellers.products || [],
      mensJackets: mensJackets.products || [],
      womenJackets: womenJackets.products || [],
    };
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error);
    return {
      featuredProducts: [],
      newArrivals: [],
      bestSellers: [],
      mensJackets: [],
      womenJackets: [],
    };
  }
}