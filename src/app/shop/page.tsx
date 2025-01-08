import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/shop/sidebar/productCard';
import BreadCrumbs from '../components/breadcrumbs';
import SideBar from '../components/shop/sidebar/SideBar';
import { fetchProductsServerAction } from '@/actions/fetchProducts';
import { Product } from '@/utils/wooCommerceTypes';
import LoadMoreButton from './LoadMoreButton';

const Shop = async ({searchParams}: {searchParams: Promise<Record<string, string>>}) => {
  const resolveSearchParams = await searchParams;

  // Initial fetch on the server, now fetching totalPages and totalProducts as well
  const { products: initialProducts, totalPages, totalProducts } = await fetchProductsServerAction(1, 12, resolveSearchParams.min_price, resolveSearchParams.max_price, '');

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <div className='px-5 2xl:py-12 lg:py-8 py-5'>
        <div className='grid grid-cols-12 md:gap-x-8 max-md:gap-y-3'>
          <SideBar />
          <div className='lg:col-span-9 col-span-12'>
            <div id='product-grid' className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
              {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {/* Client-side Load More button */}
            <LoadMoreButton 
              initialPage={1} 
              totalPages={totalPages} 
              totalProducts={totalProducts} 
              minPrice={resolveSearchParams.min_price} 
              maxPrice={resolveSearchParams.min_price} 
              categorySlug=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
