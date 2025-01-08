import { Product } from "@/utils/wooCommerceTypes";
import ProductCard from "../shop/sidebar/productCard";

interface BestSellers {
  products: Product[]
}

const BestSellers = ({ products }: BestSellers) => {
  // Check if products are valid
  if (!products || products.length === 0) {
    return <div>No best sellers available.</div>;
  }

  return (
    <div className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BestSellers;
