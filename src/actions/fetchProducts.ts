'use server'
import { fetchWooCommerceProducts } from '@/utils/wooCommerceApi';
import { Product } from '@/utils/wooCommerceTypes';

export async function fetchProductsServerAction(
  page: number,
  per_page: number = 12,
  min_price: string = '',
  max_price: string = '',
  categorySlug: string | '',
): Promise<{ products: Product[]; categoryName:string; totalPages: number; totalProducts: number }> {
  try {
    const filters = { page, per_page, min_price, max_price, categorySlug };
    const wooCommerceProducts = await fetchWooCommerceProducts(filters);
    
    // Assuming the response has properties like totalPages and totalProducts
    const totalPages = wooCommerceProducts?.totalPages || 0;
    const totalProducts = wooCommerceProducts?.totalProducts || 0;
    const products = wooCommerceProducts?.products || [];
    const categoryName = wooCommerceProducts?.categoryName || [];

    return { products, totalPages, totalProducts, categoryName };
  } catch (error) {
    console.error('Error fetching products in server action:', error);
    return { products: [], categoryName: '', totalPages: 0, totalProducts: 0 };
  }
}
