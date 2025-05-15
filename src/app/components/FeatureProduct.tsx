import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedProducts from "./HomePageTabs/FeaturedProducts";
import BestSellers from "./HomePageTabs/BestSellers";
import NewArrivals from "./HomePageTabs/NewArrivals";
import { fetchHomePageData } from "@/actions/FetchTabs";


const FeatureProduct = async () => {
	const { featuredProducts, newArrivals, bestSellers } = await fetchHomePageData();

  return (
    <>
      <section className="relative z-[99] bg-white px-5 md:py-16 pb-8 py-2">
        <div className="container mx-auto">
          <div className="text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold">
            <h2>FEATURE PRODUCTS</h2>
          </div>
          <Tabs defaultValue="newArrival">
            <TabsList className="flex justify-center bg-transparent mt-5 mb-6 [&>button]:text-base [&>button]:!shadow-none">
              {/* <TabsTrigger value="featured">Featured</TabsTrigger> */}
              <TabsTrigger value="newArrival">New Arrival</TabsTrigger>
              {/* <TabsTrigger value="bestSeller">Best Seller</TabsTrigger> */}
            </TabsList>

            <TabsContent value="featured">
              <FeaturedProducts products={featuredProducts} />
            </TabsContent>
            <TabsContent value="newArrival">
              <NewArrivals products={newArrivals} />
            </TabsContent>
            <TabsContent value="bestSeller">
              <BestSellers products={bestSellers} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;