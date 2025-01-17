import { fetchWooCommerceProduct } from "@/utils/wooCommerceApi";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartTotals {
  updatedCart: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

const TAX_RATE = 0.2; // Example tax rate (20%)

/**
 * Updates cart items by fetching current prices and calculates totals.
 * 
 * @param cartItems - Array of cart items with IDs, quantities, etc.
 * @returns {Promise<CartTotals>} - Updated cart and calculated totals.
 */
export const updateCartAndCalculateTotals = async (
  cartItems: CartItem[]
): Promise<CartTotals> => {
  const updatedCart: CartItem[] = [];

  for (const item of cartItems) {
    try {
      const product = await fetchWooCommerceProduct(item.id);
      updatedCart.push({
        ...item,
        price: product.price, // Update with API price
      });
    } catch (error) {
      console.error(`Error fetching product details for ID ${item.id}:`, error);
    }
  }

  const subtotal = updatedCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Apply shipping charges only if subtotal > 0
  const shipping = subtotal > 0 ? 25 : 0;
  const total = parseFloat((subtotal + shipping).toFixed(2));

  return { updatedCart, subtotal, shipping, total };
};