"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const featureProduct = () => {
	return (
		<>
			<section className="relative z-[99] bg-white md:py-16 py-5">
				<div className="container mx-auto">
					<div className="text-center [&_h2]:text-3xl [&_h2]:font-semibold">
						<h2>FEATURE PRODUCTS</h2>
					</div>
					<Tabs defaultValue="featured">
						<TabsList className="flex justify-center bg-transparent mt-5 mb-6">
							<TabsTrigger value="featured" className="bg-transparent shadow-none text-base">Featured</TabsTrigger>
							<TabsTrigger value="newArrival" className="bg-transparent shadow-none text-base">New Arrival</TabsTrigger>
							<TabsTrigger value="bestSeller" className="bg-transparent shadow-none text-base">Best Seller</TabsTrigger>
						</TabsList>
						<TabsContent value="featured">
							<div className="grid grid-cols-12 gap-x-7 px-5">
								<div className="col-span-3 group flex w-full flex-col self-center overflow-hidden">
									<div className="relative">
									<Image
										src="/images/jacket5.webp"
										alt="product image"
										width={500}
										height={100}
									/>
									<FontAwesomeIcon icon={faHeart} className="absolute top-2 right-2 text-[22px]" />
									</div>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-base">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 pr-4 text-base">Edward Cafe Racer Black Leather Jacket</p>
										<Link href="#" className="hover:border-white/40 flex items-center justify-center bg-[#020202] px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
											{/* <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
											</svg> */}
										<FontAwesomeIcon icon={faCartShopping} className="text-sm mr-2" />
											Add to cart</Link>
									</div>
								</div>
								<div className="col-span-3 group flex w-full flex-col self-center overflow-hidden">
								<div className="relative">
									<Image
										src="/images/jacket2.webp"
										alt="product image"
										width={500}
										height={100}
									/>
									<FontAwesomeIcon icon={faHeart} className="absolute top-2 right-2 text-[22px]" />
									</div>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 pr-4 text-base">Edward Cafe Racer Black Leather Jacket</p>
										<Link href="#" className="hover:border-white/40 flex items-center justify-center bg-[#020202] px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
										<FontAwesomeIcon icon={faCartShopping} className="text-sm mr-2" />
											Add to cart</Link>
									</div>
								</div>
								<div className="col-span-3 group flex w-full flex-col self-center overflow-hidden">
								<div className="relative">
									<Image
										src="/images/jacket3.webp"
										alt="product image"
										width={500}
										height={100}
									/>
									<FontAwesomeIcon icon={faHeart} className="absolute top-2 right-2 text-[22px]" />
									</div>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 pr-4 text-base">Edward Cafe Racer Black Leather Jacket</p>
										<Link href="#" className="hover:border-white/40 flex items-center justify-center bg-[#020202] px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
										<FontAwesomeIcon icon={faCartShopping} className="text-sm mr-2" />
											Add to cart</Link>
									</div>
								</div>
								<div className="col-span-3 group flex w-full flex-col self-center overflow-hidden">
								<div className="relative">
									<Image
										src="/images/jacket.webp"
										alt="product image"
										width={500}
										height={100}
									/>
									<FontAwesomeIcon icon={faHeart} className="absolute top-2 right-2 text-[22px]" />
									</div>
									<div className="py-3">
										<div className="flex items-center justify-start gap-x-2 [&_span]:text-lg">
											<span className="font-semibold text-[#282828]">$229.00</span>
											<span className="text-[#5f5f5f] line-through">$269.00</span>
										</div>
										<p className="leading-5 py-1 pb-3 pr-4 text-base">Edward Cafe Racer Black Leather Jacket</p>
										<Link href="#" className="hover:border-white/40 flex items-center justify-center bg-[#020202] px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
										<FontAwesomeIcon icon={faCartShopping} className="text-sm mr-2" />
											Add to cart</Link>
									</div>
								</div>
							</div>
						</TabsContent>
						<TabsContent value="newArrival">Change your password here.</TabsContent>
						<TabsContent value="bestSeller">Change your password here.</TabsContent>
					</Tabs>
				</div>
			</section>
		</>
	)
}
export default featureProduct;