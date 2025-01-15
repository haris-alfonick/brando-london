import React from 'react'
import ProductAccordion from '../components/ProductAccordion'
import IncrementCounter from '../components/shop/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcDiscover,
  faFacebook,
  faXTwitter,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import Thumbnail from '../components/ProductThumbnail'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import BreadCrumbs from '../components/breadcrumbs'
import RelatedProductCard from '../components/RelatedProduct'
import Testimonial from '../components/Testimonial'

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='' />
      <div className='py-5 px-5 min-[1300px]:max-w-[1600px] mx-auto'>
        <section className='grid grid-cols-12 gap-x-9'>
          {/* Product Image Section */}
          <div className='md:col-span-6 col-span-12'>
            {/* <Thumbnail /> */}
          </div>

          {/* Product Details Section */}
          <div className='md:col-span-6 col-span-12'>
            <div className='[&>span]:text-gray-500 [&>span]:block [&>span]:tracking-wide [&>span]:uppercase [&>span]:text-[13px] [&_h2]:text-2xl [&_h2]:lg:text-3xl [&_h2]:font-semibold [&_h2]:mt-2 [&>p]:text-sm [&>p]:text-gray-600'>
              {/* Category */}
              <span>Mens Jacket</span>

              {/* Product Title */}
              <h2>
                Edward Cafe Racer Black Leather Jacket Black Leather Jacket
              </h2>

              {/* Price */}
              <div className='flex items-center gap-x-4 my-4'>
                <span className='text-xl lg:text-2xl font-semibold'>
                  $229.00
                </span>
                <span className='line-through text-gray-500'>$59.00</span>
                <span className='text-sm bg-gray-800 text-white px-2 py-1 rounded'>
                  Save 33%
                </span>
              </div>

              {/* Description */}
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesettingindustry. Lorem Ipsum has been the industry&apos;s
                standard dummy textever since the 1500s.
              </p>
            </div>

            {/* Color Options */}
            <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>
              <strong>Color:</strong>
              <div className='flex gap-x-2 mt-2'>
                {['#704e06', '#101010', '#7d7767', 'black'].map(
                  (color, idx) => (
                    <label key={idx} className='cursor-pointer'>
                      <input
                        type='radio'
                        name='color'
                        className='hidden peer'
                      />
                      <div
                        className={`w-12 h-9 rounded border peer-checked:ring-2`}
                        style={{ backgroundColor: color }}
                      ></div>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Size Options */}
            <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>
              <strong>Size:</strong>
              <div className='flex gap-x-2 mt-2'>
                {['M', 'L', 'XL', 'XXL'].map((size, idx) => (
                  <label key={idx} className='cursor-pointer'>
                    <input type='radio' name='size' className='hidden peer' />
                    <span className='px-4 py-1.5 pb-2 rounded border bg-white peer-checked:bg-gray-800 peer-checked:text-white'>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>
              <strong>Quantity</strong>
              {/* <IncrementCounter /> */}
            </div>

            {/* Add to Cart */}
            <div className='mt-6 flex justify-between items-center gap-x-6 [&>button]:bg-[#333333] [&>button]:text-white [&>button]:w-full [&>button]:py-2 [&>button]:rounded'>
              <button>Add to Cart</button>
              <div className='[&>svg]:w-6'>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>

            {/* Wishlist and Compare */}
            <div className='flex xl:flex-row flex-col mt-6 justify-between xl:items-center items-start max-xl:gap-y-2.5'>
              <div className='[&>span]:bg-no-repeat [&>span]:lg:bg-[center_left_0px] [&>span]:lg:pl-[30px] [&>span]:md:pl-6 [&>span]:pl-7 [&>span]:bg-contain [&>span]:bg-[center_left] [&>span:nth-child(2)]:ml-6'>
                <span className="bg-[url('/images/heart.png')]">
                  Add to Wishlist
                </span>
                <span className="bg-[url('/images/ArrowsClockwise.png')]">
                  Add to Compare
                </span>
              </div>

              <div className='flex items-center gap-x-4'>
                <span>Share product:</span>
                <ul className='flex justify-start items-center gap-x-3 [&_li_svg]:w-4 '>
                  <li>
                    <FontAwesomeIcon icon={faClone} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPinterestP} />
                  </li>
                </ul>
                {/* <div className="bg-[url('/images/Vector2.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_center]"></div>
              <div className="bg-[url('/images/Vector2.2.png')] bg-no-repeat w-[30px] h-[30px] bg-[right_4px_top_4px]"></div>
              <div className="bg-[url('/images/facebook.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right] bg-[size:20px_20px]"></div>
              <div className="bg-[url('/images/Vector4.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div>
              <div className="bg-[url('/images/vector5.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div> */}
              </div>
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

            {/* Accordion */}
            {/* <ProductAccordion /> */}
          </div>
        </section>
        <Testimonial />
        {/* Related Products */}
        {/* <RelatedProductCard /> */}
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails
