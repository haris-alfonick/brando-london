import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://brandolondon.com",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error:any) {
    throw new Error(error);
  }
}

export async function fetchWooCommerceProduct(productId: string) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data; // Product details
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function fetchWooCommerceCategories() {
  try {
    const response = await api.get("products/categories");
    return response.data; // Categories array
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function fetchWooCommerceProductBySlug(slug: string) {
  try {
    const response = await api.get("products", {
      slug: slug, // Pass the slug to WooCommerce API
    });
    return response.data[0]; // Assuming you get a list, return the first product
  } catch (error: any) {
    throw new Error(error);
  }
}
