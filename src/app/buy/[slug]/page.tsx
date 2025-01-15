import { fetchWooCommerceProductBySlug } from "../../../utils/wooCommerceApi";
import { Metadata } from 'next';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import ProductAccordion from '../../components/ProductAccordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcDiscover
} from '@fortawesome/free-brands-svg-icons'
import Thumbnail from '../../components/ProductThumbnail'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import BreadCrumbs from '../../components/breadcrumbs'
import RelatedProductCard from '../../components/RelatedProduct'
import Testimonial from '../../components/Testimonial'
import Price from "@/app/components/shop/price";
import SocialShare from "@/app/components/shop/socialShare";
import Handler from "./handler";

// Set up DOMPurify for SSR
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;

  // Fetch product data
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);

  // Fallback values
  const metaTitle = product?.yoast_head_json.title || "Product Not Found";
  const metaDescription = product?.yoast_head_json.og_description
    ? stripHtmlTags(product.yoast_head_json.og_description)
    : "Description not available";

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

// Utility functions
function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, '');
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  // Fetch product data
  const product = await fetchWooCommerceProductBySlug(slug).catch(() => null);
  const salePrice = product.price - 40;
  const sale = salePrice.toFixed(2)

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleSelectedSize = (size: string | null) => {
    console.log("Selected size from Attributes component:", size);
  };
  
  return (
    <div>
      <Navbar />
      <BreadCrumbs page={product.name} />
      <div className='py-5 px-5 min-[1300px]:max-w-[1600px] mx-auto'>
        <section className='grid grid-cols-12 gap-x-9'>
          <Thumbnail images={product.images} />
          {/* Product Details Section */}
          <div className='md:col-span-6 col-span-12'>
            <div className='[&>span]:text-gray-500 [&>span]:block [&>span]:tracking-wide [&>span]:uppercase [&>span]:text-[13px] [&_h1]:text-2xl [&_h1]:lg:text-3xl [&_h1]:font-semibold [&_h1]:mt-2 [&>p]:text-sm [&>p]:text-gray-600'>

              <span>{product.categories[0].name}</span>
              <h1>{product.name}</h1>
              <Price price={product.price} productPage={true} /> 
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.short_description) }} /> 

            </div>
            <Handler attributes={product.attributes} productId={product.id} productName={product.name} image={product.images[0].src} price={product.price} />

            <div className='flex xl:flex-row flex-col mt-6 justify-between xl:items-center items-start max-xl:gap-y-2.5'>
              <div className='[&>span]:bg-no-repeat [&>span]:lg:bg-[center_left_0px] [&>span]:lg:pl-[30px] [&>span]:md:pl-6 [&>span]:pl-7 [&>span]:bg-contain [&>span]:bg-[center_left] [&>span:nth-child(2)]:ml-6'>
                <span className="bg-[url('/images/heart.png')]">
                  Add to Wishlist
                </span>
                <span className="bg-[url('/images/ArrowsClockwise.png')]">
                  Add to Compare
                </span>
              </div>
              <SocialShare />
            </div>

            {/* Delivery and Features Section */}
            <div className='mt-3.5 [&>p]:pl-8 [&>p]:text-[#333333] [&>p]:text-sm [&>p]:bg-no-repeat [&>p]:bg-[length:22px_20px] [&>p]:bg-left [&_strong]:font-semibold'>
              <p className='bg-[url(/images/delivery.png)]'>
                <strong>Estimated Delivery:</strong> Jul 30 - Aug 03
              </p>
              <p className='bg-[url(/images/shipping.png)] !bg-[length:22px_16px] mt-3.5'>
                <strong>Free Shipping & Returns:</strong> On all orders over $75
              </p>
            </div>
            <div className='mt-7 [&>p]:pb-1.5 [&>p]:text-[#333333] [&>p]:text-sm border p-3.5 rounded '>
              <p>100% Guarantee Safe Checkout</p>
              <div className='flex justify-start gap-x-1.5 items-center [&_svg]:w-6 [&_svg]:h-8'>
                <FontAwesomeIcon icon={faCcVisa} />
                <FontAwesomeIcon icon={faCcMastercard} />
                <FontAwesomeIcon icon={faCcPaypal} />
                <FontAwesomeIcon icon={faCcStripe} />
                <FontAwesomeIcon icon={faCcDiscover} />
              </div>
            </div>

            <ProductAccordion description={product.description} />
          </div>
        </section>
        <Testimonial />
        <RelatedProductCard relatedIds={product.related_ids} />
      </div>
      <Footer />
      {/* <ShoppingBasket /> */}
    </div>
  );
}