import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedProducts from "./HomePageTabs/FeaturedProducts";
// import BestSellers from "./HomePageTabs/BestSellers";
// import NewArrivals from "./HomePageTabs/NewArrivals";
import { fetchHomePageData } from "@/actions/FetchTabs";


const FeatureProduct = async () => {
	const { newArrivals, mensJackets, womenJackets } = await fetchHomePageData();

  return (
    <>
      <section className="relative z-[99] bg-white px-5 md:py-16 md:pb-0 py-10">
        <div className="container mx-auto">
          <div className="text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold">
            <h2>FEATURE PRODUCTS</h2>
          </div>
          <Tabs defaultValue="newArrival">
            <TabsList className="flex justify-center bg-transparent mt-5 mb-6 p-0 max-sm:[&>button]:text-[14px] [&>button]:text-base [&>button]:!shadow-none border w-fit mx-auto [&>button[data-state='active']]:bg-[#333333] [&>button[data-state='active']]:text-white">
              {/* <TabsTrigger value="featured">Featured</TabsTrigger> */}
              <TabsTrigger value="newArrival">New Arrival</TabsTrigger>
              <TabsTrigger value="mensJackets">Men Jackets</TabsTrigger>
              <TabsTrigger value="womenJackets">Women  Jackets</TabsTrigger>
              {/* <TabsTrigger value="bestSeller">Best Seller</TabsTrigger> */}
            </TabsList>

            <TabsContent value="newArrival">
              <FeaturedProducts products={newArrivals} />
            </TabsContent>
            <TabsContent value="mensJackets">
              <FeaturedProducts products={mensJackets} />
            </TabsContent>
            <TabsContent value="womenJackets">
              <FeaturedProducts products={womenJackets} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;