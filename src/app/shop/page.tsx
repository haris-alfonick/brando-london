import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/shop/sidebar/productCard';
import BreadCrumbs from '../components/breadcrumbs';
import SideBar from '../components/shop/sidebar/SideBar';
import { fetchProductsServerAction } from '@/actions/fetchProducts';
import LoadMoreButton from './LoadMoreButton';
import CustomizedNow from '../components/CustomizedNow';

const Shop = async ({searchParams}: {searchParams: Promise<Record<string, string>>}) => {
  const resolveSearchParams = await searchParams;

  // Initial fetch on the server, now fetching totalPages and totalProducts as well
  const { products: initialProducts, totalPages, totalProducts } = await fetchProductsServerAction(1, 12, resolveSearchParams.min_price, resolveSearchParams.max_price, '');

  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shop' />
      <div className='px-5 2xl:py-12 lg:py-8 lg:pt-3 py-5'>
        <div className='grid grid-cols-12 lg:gap-x-8'>
        <SideBar  />
          <div className='xl:col-span-9 col-span-12'>
            <div id='product-grid' className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
              {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} relatedProduct={false} />
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
            <CustomizedNow />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
