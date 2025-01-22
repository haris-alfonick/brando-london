"use server"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://wp.brandolondon.com",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

// Centralized error handler
function handleError(error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  throw new Error("An unexpected error occurred.");
}

export async function sendOrderToWooCommerce(orderData: any) {
  try {
    const response = await api.post("orders", orderData);
    return response
  } catch (error: unknown) {
    handleError(error);
  }
}

interface ProductFilters {
  min_price?: string;
  max_price?: string;
  color?: string;
  size?: string;
  rating?: number; // Optional
  categorySlug?: string;
  per_page?: number;
  page?: number;
  featured?: boolean;
  bestSeller?: boolean;
  newArrivals?: boolean; 
}

export async function fetchWooCommerceProducts(filters?: ProductFilters) {
  try {
    const params: Record<string, any> = {
      per_page: filters?.per_page || 10,
      page: filters?.page || 1,
    };

    let categoryInfo = null;

    if (filters?.min_price) params.min_price = filters.min_price;
    if (filters?.max_price) params.max_price = filters.max_price;

    if (filters?.categorySlug) {
      // Fetch category details from category slug
      categoryInfo = await fetchWooCommerceCategoryBySlug(filters.categorySlug);
      if (categoryInfo) {
        params.category = categoryInfo.id; // Use the category ID in the product request
      }
    }

    if (filters?.featured !== undefined) params.featured = filters.featured;

    if (filters?.bestSeller) {
      params.orderby = "popularity";
      params.order = "desc";
    }

    if (filters?.newArrivals) {
      params.orderby = "date";
      params.order = "desc";
    }

    const response = await api.get("products", params);
    let products = response.data;

    // Safe rating filter
    if (filters && filters.rating !== undefined) {
      products = products.filter((product: any) => product.average_rating >= filters.rating!);
    }

    return {
      products,
      categoryName: categoryInfo?.name || null, // Include the category name
      totalProducts: response.headers["x-wp-total"],
      totalPages: response.headers["x-wp-totalpages"],
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products.");
  }
}


export async function fetchWooCommerceProduct(productId: string) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceProductBySlug(slug: string) {
  try {
    const response = await api.get("products", { slug });
    return response.data[0]; // Return first matching product
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceCategories() {
  try {
    const response = await api.get("products/categories");
    return response.data.map((category: any) => ({
      id: category.id,
      name: category.name,
    })); // Normalize response
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceCategoryBySlug(slug: string) {
  try {
    const response = await api.get("products/categories", { slug });
    return response.data[0] // Normalize response
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchRelatedProducts(relatedIds: string[]) {
  try {
    const params = {
      include: relatedIds.join(","),
      per_page: relatedIds.length,
    };
    const response = await api.get("products", params);
    return response.data; // Return the related products
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw new Error("Failed to fetch related products.");
  }
}

export async function fetchAllReviews() {
  try {
    
    const response = await api.get("products/reviews");
    return response.data; // Return the related products
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw new Error("Failed to fetch related products.");
  }
}

export async function createOrder(data:any) {
  try {
    const response = await api.post("orders", data)
    return response.data; // Return the related products
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order.");
  }
}