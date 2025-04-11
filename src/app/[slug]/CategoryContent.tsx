import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer";
import BreadCrumbs from "@/app/components/breadcrumbs";
import SideBar from "@/app/components/shop/sidebar/SideBar";
import ProductCard from "@/app/components/shop/sidebar/productCard";
import LoadMoreButton from "@/app/shop/LoadMoreButton";
import CustomizedNow from "@/app/components/CustomizedNow";
import { fetchProductsServerAction } from "@/actions/fetchProducts";
// import { WooCommerceProduct } from "@/utils/wooCommerceApi";

interface CategoryContentProps {
  slug: string;
}

export default async function CategoryContent({ slug }: CategoryContentProps) {
  const { products, categoryName, totalPages, totalProducts } =
    await fetchProductsServerAction(1, 12, "", "", slug);

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
      <div className="px-5 2xl:py-12 lg:py-8 py-5">
        <div className="grid grid-cols-12 md:gap-x-8">
          <SideBar />
          <div className="xl:col-span-9 col-span-12">
            <div className="lg:text-4xl text-[#333333] text-2xl font-semibold uppercase py-5 pb-10 max-sm:py-5 max-xl:!pt-0.5 w-fit mx-auto">
              <h1>{categoryName}</h1>
            </div>
            <div id="product-grid" className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} relatedProduct={false} />
              ))}
            </div>
            <LoadMoreButton
              initialPage={1}
              totalPages={totalPages}
              totalProducts={totalProducts}
              minPrice=""
              maxPrice=""
              categorySlug={slug}
            />
            <CustomizedNow />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
