"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const featureProduct = () => {
  return (
    <>
      <section className="relative z-[99] bg-white px-5 md:py-16 pb-8 py-2">
        <div className="container mx-auto">
          <div className="text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold">
            <h2>FEATURE PRODUCTS</h2>
          </div>
          <Tabs defaultValue="featured">
            <TabsList className="flex justify-center bg-transparent mt-5 mb-6 [&>button]:text-base [&>button]:!shadow-none">
              <TabsTrigger value="featured">
                Featured
              </TabsTrigger>
              <TabsTrigger value="newArrival">
                New Arrival
              </TabsTrigger>
              <TabsTrigger value="bestSeller">
                Best Seller
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured">
						<div className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
								<div className="md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white">
									<Link className="relative w-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20" href="#">
										<Image
											src="/images/jacket.webp"
											alt="product image"
											width={500}
											height={100}
											className="h-full w-full object-cover"
										/>
										<div className="absolute flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_button]:rounded-full [&_button]:bg-white [&_button]:h-10 [&_button]:w-10 [&_button]:flex [&_button]:justify-center [&_button]:items-center group-hover:opacity-100 opacity-0 z-[99]">
											<button className="text-red-700 hover:bg-gray-300">
												{/* <svg  className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
													<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
												</svg> */}
											<FontAwesomeIcon icon={faHeart} className="text-[22px]" />
											</button>
											<button className="text-black hover:bg-gray-300">
												{/* <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
													<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
												</svg> */}
												<FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
											</button>
										</div>
									</Link>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 text-base">Edward Cafe Racer Black Leather Jacket</p>

									</div>
								</div>

								<div className="md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white">
									<Link className="relative w-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20" href="#">
										<Image
											src="/images/jacket2.webp"
											alt="product image"
											width={500}
											height={100}
											className="h-full w-full object-cover"
										/>
										<div className="absolute flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_button]:rounded-full [&_button]:bg-white [&_button]:h-10 [&_button]:w-10 [&_button]:flex [&_button]:justify-center [&_button]:items-center group-hover:opacity-100 opacity-0 z-[99]">
											<button className="text-red-700 hover:bg-gray-300">
											<FontAwesomeIcon icon={faHeart} className="text-[22px]" />
											</button>
											<button className="text-black hover:bg-gray-300">
											<FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
											</button>
										</div>
									</Link>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 text-base">Edward Cafe Racer Black Leather Jacket</p>

									</div>
								</div>

								<div className="md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white">
									<Link className="relative w-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20" href="#">
										<Image
											src="/images/jacket.webp"
											alt="product image"
											width={500}
											height={100}
											className="h-full w-full object-cover"
										/>
										<div className="absolute flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_button]:rounded-full [&_button]:bg-white [&_button]:h-10 [&_button]:w-10 [&_button]:flex [&_button]:justify-center [&_button]:items-center group-hover:opacity-100 opacity-0 z-[99]">
											<button className="text-red-700 hover:bg-gray-300">
											<FontAwesomeIcon icon={faHeart} className="text-[22px]" />
											</button>
											<button className="text-black hover:bg-gray-300">
											<FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
											</button>
										</div>
									</Link>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 text-base">Edward Cafe Racer Black Leather Jacket</p>
									</div>
								</div>

								<div className="md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white">
									<Link className="relative w-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20" href="#">
										<Image
											src="/images/jacket3.webp"
											alt="product image"
											width={500}
											height={100}
											className="h-full w-full object-cover"
										/>
										<div className="absolute flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_button]:rounded-full [&_button]:bg-white [&_button]:h-10 [&_button]:w-10 [&_button]:flex [&_button]:justify-center [&_button]:items-center group-hover:opacity-100 opacity-0 z-[99]">
											<button className="text-red-700 hover:bg-gray-300">
											<FontAwesomeIcon icon={faHeart} className="text-[22px]" />
											</button>
											<button className="text-black hover:bg-gray-300">											
												<FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
											</button>
										</div>
									</Link>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 text-base">Edward Cafe Racer Black Leather Jacket</p>

									</div>
								</div>
							</div>
            </TabsContent>
            <TabsContent value="newArrival">New Arrival</TabsContent>
            <TabsContent value="bestSeller">Best Seller</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};
export default featureProduct;
