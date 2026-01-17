'use server'
import { fetchWooCommerceProducts, WooCommerceProduct } from '@/utils/wooCommerceApi';

export async function fetchProductsServerAction(
  page: number,
  per_page: number = 12,
  min_price: string = '',
  max_price: string = '',
  categorySlug: string | '',
): Promise<{ products: WooCommerceProduct[]; categoryName: string; categoryDescription: string; totalPages: number; totalProducts: number }> {
  try {
    const filters = { page, per_page, min_price, max_price, categorySlug };
    const wooCommerceProducts = await fetchWooCommerceProducts(filters);
    
    // Assuming the response has properties like totalPages and totalProducts
    const totalPages = wooCommerceProducts?.totalPages || 0;
    const totalProducts = wooCommerceProducts?.totalProducts || 0;
    const products = wooCommerceProducts?.products || [];
    const categoryName = wooCommerceProducts?.categoryName || '';
    const categoryDescription = wooCommerceProducts?.categoryDescription || '';

    return { products, totalPages, totalProducts, categoryName, categoryDescription };
  } catch (error) {
    console.error('Error fetching products in server action:', error);
    return { products: [], categoryName: '', categoryDescription: '', totalPages: 0, totalProducts: 0 };
  }
}