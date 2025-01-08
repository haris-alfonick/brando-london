// FeaturedProducts.tsx

import { Product } from "@/utils/wooCommerceTypes"; // Make sure the Product type is imported
import ProductCard from "../shop/sidebar/productCard";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {

  return (
    <div className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;