import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-[#333] px-5">
			<div className="grid grid-cols-12 lg:gap-y-0 gap-y-8 py-16 border-b border-b-[#525151] [&_p]:w-full [&_p]:pt-5 [&_p]:lg:w-[80%] [&_p]:sm:w-[44%] [&_p]:text-white gap-x-5 [&_p]:text-sm [&_a]:text-white [&_a]:text-sm [&_a]:block [&_a]:pb-2 [&_strong]:text-white [&_strong]:text-sm [&_strong]:pb-2.5 [&_strong]:block ">
				<div className="lg:col-span-3 col-span-12 ">
    <Link href='/'>
					<Image
						src="/images/logo-white.png"
						alt="Footer Logo"
						width={165}
						height={100}
					/>
     </Link>
					<p>Welcome to XYZ, where brilliance meets innovation!
						We are a leading company dedicated to delivering exceptional products and services to cater to your needs.</p>
				</div>
				<div className="lg:col-span-2 sm:col-span-4 col-span-6">
					<strong>Pages</strong>
					<div className="footerNav">
						<Link href='/'>Home</Link>
						<Link href='/about-us'>About Us</Link>
						<Link href='/shop'>Shop</Link>
						<Link href='/contact'>Contact Us</Link>
						{/* <Link href='#'>Blog</Link> */}
					</div>
				</div>
				<div className="lg:col-span-2 sm:col-span-4 col-span-6">
					<strong>Categories</strong>
					<div className="footerNav">
						<Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
						<Link href='/mens-vintage-leather-jackets'>Men Vintage Jacket</Link>
						<Link href='/mens-suede-leather-jackets'>Men Suede Leather Jackets</Link>
						<Link href='womens-leather-jackets'>Women Leather Jackets</Link>
						<Link href='/womens-vintage-leather-jackets'>Women Vintage Jackets</Link>
					</div>
				</div>
				<div className="lg:col-span-2 sm:col-span-4 col-span-6">
					<strong>Customer Care</strong>
					<div className="footerNav">
						<Link href='/terms-and-condition'>Terms & Condition</Link>
						<Link href='/shipping-and-delivery'>Shipping & Delivery</Link>
						<Link href='/privacy-policy'>Privacy Policy</Link>
						<Link href='/faq'>FAQ</Link>
					</div>
				</div>
				<div className="lg:col-span-2 sm:col-span-3 col-span-12">
					<strong>Subscribe Now</strong>
					<div className="relative p-0.5 flex items-center space-x-2 border bg-white !rounded-sm md:w-full w-[290px]">
						<Input type="email" placeholder="Your Email" className="border-none shadow-none text-sm focus-visible:ring-0 pt-0.5 px-2.5 w-full" />
						<Button type="submit" variant="outline" className="border-none !bg-[#333] px-3.5 text-sm !text-white max-[485px]:static absolute right-0.5 !rounded-sm">Subscribe</Button>
					</div>


					<ul className="flex w-fit justify-start mt-5 space-x-4 [&_img]:transition-transform [&_img]:duration-300 [&_img]:ease-in-out [&_img:hover]:scale-110">
					<li>
							<Link href="#">
								<Image
									src="/images/_Facebook.png"
									width={28}
									height={28}
									alt="Facebbok"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/_Instagram.png"
									width={28}
									height={28}
									alt="Instagram"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/_Twitter.png"
									width={28}
									height={28}
									alt="Twitter"
								/>
							</Link>
						</li>
						<li>
							<Link href="#">
								<Image
									src="/images/_Linkedin.png"
									width={28}
									height={28}
									alt="Linkedin"
								/>
							</Link>
						</li>
					</ul>


				</div>
			</div>
			<div className="text-white text-sm py-5 [&_strong]:font-semibold text-center">
				<span>© {currentYear} <Link href="/">Brando London.</Link><strong> All right reserved</strong></span>
			</div>

		</footer>
	)
}
export default Footer;