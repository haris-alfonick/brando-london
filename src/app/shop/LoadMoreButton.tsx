'use client';

import { useState } from 'react';
import { fetchProductsServerAction } from '@/actions/fetchProducts';
import { WooCommerceProduct } from '@/utils/wooCommerceApi';
import ProductCard from '../components/shop/sidebar/productCard';

interface LoadMoreButtonProps {
  initialPage: number;
  totalPages: number;
  totalProducts: number;
  minPrice: string;
  maxPrice: string;
  categorySlug: string | ""
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ initialPage, totalPages, minPrice, maxPrice, categorySlug }) => {
  const [products, setProducts] = useState<WooCommerceProduct[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const loadMore = async () => {
    if (!loading && hasMore && page < totalPages) {
      setLoading(true);
      try {
        // Fetch the next page of products
        const { products: newProducts } = await fetchProductsServerAction(page + 1, 12, minPrice, maxPrice, categorySlug);
        
        if (newProducts.length > 0) {
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
          setPage((prevPage) => prevPage + 1);
        } else {
          setHasMore(false); // No more products to load
        }
      } catch (error) {
        console.error('Error fetching more products:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setHasMore(false); // Disable loading when no more pages are available
    }
  };


  return (
    <>
      <div className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
        {products.map((product, index) => (
          <ProductCard key={product.id + index.toString()} product={product} relatedProduct={false} />
        ))}
      </div>

      {hasMore && page < totalPages ? (
        <div className="text-center mt-5">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-[#333] hover:bg-white hover:text-[#333] border !border-[#333] font-medium max-sm:text-sm text-white rounded transition-all"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      ) : (
        <div className="text-center mt-5 text-gray-500">
          No more products to load.
        </div>
      )}
    </>
  );
};

export default LoadMoreButton;