/* eslint-disable @typescript-eslint/no-explicit-any */

import { CategoryMetaData } from "./metadata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import BreadCrumbs from "../components/breadcrumbs";
import SideBar from "../components/shop/sidebar/SideBar";
import { fetchProductsServerAction } from "@/actions/fetchProducts";
import ProductCard from "../components/shop/sidebar/productCard";
import LoadMoreButton from "../shop/LoadMoreButton";
import CustomizedNow from "../components/CustomizedNow";

export const generateMetadata = async ({ params }: { params: any }) => {
  // Await params for consistency
  const { slug } = await params;
  return CategoryMetaData(slug);
};

const ProductCategory = async ({ 
  searchParams, 
  params 
}: any) => {
  // Await both params and searchParams
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  const { slug } = resolvedParams;
  const minPrice = Array.isArray(resolvedSearchParams.min_price) 
    ? resolvedSearchParams.min_price[0] 
    : resolvedSearchParams.min_price || '';
  const maxPrice = Array.isArray(resolvedSearchParams.max_price) 
    ? resolvedSearchParams.max_price[0] 
    : resolvedSearchParams.max_price || '';

  const { products: initialProducts, categoryName, categoryDescription, totalPages, totalProducts } = 
    await fetchProductsServerAction(
      1, 
      12, 
      minPrice,
      maxPrice,
      slug
    );

  if (!categoryName) {
    return (
      <>
        <Navbar />
        <div className="text-center h-[500px]">
          <h1 className="text-2xl">Page Not found!</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <BreadCrumbs page={slug} />
      <div className='px-5 2xl:py-12 lg:py-8 py-5'>
        <div className='grid grid-cols-12 md:gap-x-8'>
          <SideBar />
          <div className='xl:col-span-9 col-span-12'>
            <div className='lg:text-4xl text-[#333333] text-2xl font-semibold uppercase py-5 pb-10 max-sm:py-5 max-xl:!pt-0.5 w-fit mx-auto'>
              <h1>{categoryName}</h1>
            </div>
            <div id='product-grid' className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
              {initialProducts.map((product) => (
                <ProductCard key={product.id} product={product} relatedProduct={false} />
              ))}
            </div>
            <LoadMoreButton
              initialPage={1} 
              totalPages={totalPages} 
              totalProducts={totalProducts} 
              minPrice={minPrice}
              maxPrice={maxPrice}
              categorySlug={slug}
            />
            <CustomizedNow />
            {categoryDescription && (
              <div
                className="mt-4 text-base font-normal normal-case text-gray-600"
                dangerouslySetInnerHTML={{ __html: categoryDescription }}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCategory;