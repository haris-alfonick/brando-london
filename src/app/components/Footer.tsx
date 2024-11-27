import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-[#333]">
			<div className="container mx-auto px-5">
				<div className="grid grid-cols-12 py-16 border-b border-b-[#525151] [&_p]:w-[80%] [&_p]:pt-5 [&_p]:text-white gap-x-5 [&_p]:text-sm [&_a]:text-white [&_a]:text-sm [&_a]:block [&_a]:pb-2 [&_strong]:text-white [&_strong]:text-sm [&_strong]:pb-2.5 [&_strong]:block ">
					<div className="col-span-3">
						<Image
							src="/images/logo-white.png"
							alt="Footer Logo"
							width={165}
							height={100}
						/>
						<p>Welcome to XYZ, where brilliance meets innovation!
							We are a leading company dedicated to delivering exceptional products and services to cater to your needs.</p>
					</div>
					<div className="col-span-2">
						<strong>Pages</strong>
						<div className="footerNav">
							<Link href='#'>Home</Link>
							<Link href='#'>About Us</Link>
							<Link href='#'>Shop</Link>
							<Link href='#'>Contact Us</Link>
							<Link href='#'>Blog</Link>
						</div>
					</div>
					<div className="col-span-2">
						<strong>Categories</strong>
						<div className="footerNav">
							<Link href='#'>Men Jacket</Link>
							<Link href='#'>Women Jacket</Link>
							<Link href='#'>Kids Jacket</Link>
							<Link href='#'>Leather Bags Jacket</Link>
							<Link href='#'>Shoe</Link>
						</div>
					</div>
					<div className="col-span-2">
						<strong>Customer Care</strong>
						<div className="footerNav">
							<Link href='#'>Help Center</Link>
							<Link href='#'>Terms & Condition</Link>
							<Link href='#'>Shipping & Delievry</Link>
							<Link href='#'>Privacy Policy Jacket</Link>
							<Link href='#'>Return & Refund</Link>
						</div>
					</div>
					<div className="col-span-3">
						<strong>Subscribe Now</strong>
						<div className="relative p-0.5 flex w-full max-w-sm items-center space-x-2 border bg-white !rounded-sm">
							<Input type="email" placeholder="Your Email" className="border-none shadow-none text-sm focus-visible:ring-0 pt-0.5 px-2.5 w-fit" />
							<Button type="submit" variant="outline" className="border-none !bg-[#333] text-sm !text-white absolute right-0.5 !rounded-sm">Subscribe</Button>
						</div>
						<ul className="flex justify-start mt-5 space-x-3 [&>li:hover_a]:text-[#AB1E23]">
							<li>
								<Link href="#">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link href="#">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"></path>
									</svg>
								</Link>
							</li>
							<li>
								<Link href="#">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path
											d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
										</path>
									</svg>
								</Link>
							</li>

							<li>
								<Link href="#">
									<svg fill="currentColor" className="w-6 h-6" xmlSpace="preserve" viewBox="0 0 32 32" id="linkedin">
										<path d="M16 0C7.164 0 0 7.163 0 16c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.837-7.164-16-16-16zm-4.156 22.277H8.58v-9.82h3.264v9.82zm-1.632-11.161h-.021c-1.096 0-1.804-.755-1.804-1.697 0-.963.73-1.696 1.846-1.696s1.804.733 1.825 1.696c0 .943-.709 1.697-1.846 1.697zm13.401 11.161h-3.264v-5.254c0-1.32-.472-2.22-1.654-2.22-.901 0-1.438.607-1.674 1.194-.086.21-.108.503-.108.796v5.484H13.65s.043-8.898 0-9.82h3.264v1.391c.433-.669 1.209-1.622 2.942-1.622 2.147 0 3.757 1.404 3.757 4.42v5.631z"></path>
									</svg>

								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-white text-sm py-5 [&_strong]:font-semibold text-center">
					<span>© 2024 <Link href="#">Brando London.</Link><strong> All right reserved</strong></span>
				</div>
			</div>
		</footer>
	)
}
export default Footer;