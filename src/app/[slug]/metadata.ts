import { fetchWooCommerceCategoryBySlug } from "@/utils/wooCommerceApi";
import { Metadata } from "next";


export const CategoryMetaData = async ( slug: string ): Promise<Metadata> => {

  // Fetch product data
  const product = await fetchWooCommerceCategoryBySlug(slug).catch(() => null);

  // Fallback values
  const metaTitle = product?.yoast_head_json.title || "Product Not Found";
  const metaDescription = product?.yoast_head_json.og_description
    ? stripHtmlTags(product.yoast_head_json.og_description)
    : "Description not available";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

// Utility functions
function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, '');
}