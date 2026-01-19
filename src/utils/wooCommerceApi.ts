"use server"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Image, Links } from './wooCommerceTypes';

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
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

interface Address {
  first_name: string;
  last_name: string;
  email?: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface LineItem {
  product_id: number;
  quantity: number;
}

interface ShippingLine {
  method_id: string;
  method_title: string;
  total: string;
}

export interface OrderData {
  billing: Address;
  shipping: Address;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
}

export interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  price_html: string;
  regular_price: string;
  sale_price: string;
  average_rating: number;
  rating_count: number;
  images: Array<{
    id: number;
    src: string;
    alt: string;
    name: string;
  }>;
  attributes: Array<{
    id: string | number;
    name: string;
    options: string[];
    slug: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  yoast_head_json?: {
    title: string;
    og_description: string;
  };
  short_description?: string;
  description?: string;
  related_ids?: number[];
}

interface WooCommerceCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: Image;
  menu_order: number;
  count: number;
  yoast_head_json: {
    title: string;
    og_description: string;
  };
  _links: Links;
}

interface WooCommerceOrder {
  id: number;
  status: string;
  total: string;
  billing: Address;
  shipping: Address;
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
}

interface ProductFilters {
  min_price?: string;
  max_price?: string;
  color?: string;
  size?: string;
  rating?: number;
  categorySlug?: string;
  per_page?: number;
  page?: number;
  featured?: boolean;
  bestSeller?: boolean;
  newArrivals?: boolean;
  include?: string[];
  search?: string;
}

export async function fetchWooCommerceProducts(filters?: ProductFilters) {
  try {
    const params: Record<string, string | number | boolean> = {
      per_page: filters?.per_page || 10,
      page: filters?.page || 1,
      status: "publish",
    };

    let categoryInfo: WooCommerceCategory | null = null;

    if (filters?.search) {
      params.search = filters.search;
    }

    if (filters?.min_price) params.min_price = filters.min_price;
    if (filters?.max_price) params.max_price = filters.max_price;

    if (filters?.categorySlug) {
      const category = await fetchWooCommerceCategoryBySlug(filters.categorySlug);
      if (category) {
        categoryInfo = category;
        params.category = category.id;
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
    let products: WooCommerceProduct[] = response.data;

    if (filters?.rating !== undefined) {
      products = products.filter(
        (product) => product.average_rating >= filters.rating!
      );
    }

    return {
      products,
      categoryName: categoryInfo?.name || null,
      categoryDescription: categoryInfo?.description || null,
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
    return response.data as WooCommerceProduct;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceProductBySlug(slug: string) {
  try {
    const response = await api.get("products", { slug });
    return response.data[0] as WooCommerceProduct;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceCategories() {
  try {
    const response = await api.get("products/categories");
    return response.data.map((category: WooCommerceCategory) => ({
      id: category.id,
      name: category.name,
    }));
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchWooCommerceCategoryBySlug(slug: string) {
  try {
    const response = await api.get("products/categories", { slug });
    return response.data[0] as WooCommerceCategory;
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function fetchRelatedProducts(relatedIds: (number | string)[]) {
  try {
    const { data } = await api.get("products", {
      include: relatedIds.map(id => id.toString())
    });
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function fetchAllReviews() {
  try {
    const response = await api.get("products/reviews");
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews.");
  }
}

export async function createOrder(data: OrderData) {
  try {
    const response = await api.post("orders", data);
    return response.data as WooCommerceOrder;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order.");
  }
}

export async function updateWooOrderStatus(
  orderId: string,
  stripeIntentId: string
) {
  await api.put(`orders/${orderId}`, {
    status: "processing", // or "completed"
    transaction_id: stripeIntentId,
    meta_data: [
      {
        key: "_stripe_payment_intent",
        value: stripeIntentId,
      },
    ],
  });
}