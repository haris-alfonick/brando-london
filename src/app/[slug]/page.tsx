import { fetchWooCommerceCategoryBySlug } from "@/utils/wooCommerceApi";
import { CategoryMetaData } from "./metadata";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import BreadCrumbs from "../components/breadcrumbs";
import SideBar from "../components/shop/sidebar/SideBar";
import { fetchProductsServerAction } from "@/actions/fetchProducts";
import ProductCard from "../components/shop/sidebar/productCard";
import LoadMoreButton from "../shop/LoadMoreButton";

export const generateMetadata = async ({params}: {params: {slug: string}}) => {
  const { slug } = await params;
  return CategoryMetaData(slug)
}


const ProductCategory = async ( {searchParams, params}: {searchParams: Promise<Record<string, string>>, params:any}) => {
  const {slug} = await params
  const resolveSearchParams = await searchParams;
  
  const { products: initialProducts, categoryName, totalPages, totalProducts } = await fetchProductsServerAction(1, 12, resolveSearchParams.min_price, resolveSearchParams.max_price, slug);
  if(categoryName.length <= 0){
    return(
      <>
        <Navbar />
        <div className="text-center h-[500px]">
          <h1 className="text-2xl">Page Not found!</h1>
        </div>
        <Footer />
      </>
    )
  }
  // <CategoryHandler title={category.yoast_head_json.title} description={category.yoast_head_json.og_description} />
  
  return(
    <>
      <Navbar />
        <BreadCrumbs page={slug} />
        <div className='px-5 2xl:py-12 lg:py-8 py-5'>
          <div className='grid grid-cols-12 md:gap-x-8 max-md:gap-y-3'>
            <SideBar />
            <div className='lg:col-span-9 col-span-12'>
              <div className='lg:text-4xl text-[#333333] text-2xl font-semibold uppercase py-5 pb-10 w-fit mx-auto'>
                <h1>{categoryName}</h1>
              </div>
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
                categorySlug={slug}
              />
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default ProductCategory