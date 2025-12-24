import { WooCommerceProduct } from "@/utils/wooCommerceApi";
import ProductCard from "../shop/sidebar/productCard";

interface FeaturedProductsProps {
  products: WooCommerceProduct[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {

  return (
    <div className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} relatedProduct={false} />
      ))}
    </div>
  );
};

export default FeaturedProducts;