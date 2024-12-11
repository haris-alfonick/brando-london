import React from 'react'
import ProductAccordion from '../components/ProductAccordion'
import IncrementCounter from '../components/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe, faCcDiscover, faFacebook, faXTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faClone } from '@fortawesome/free-regular-svg-icons';

const ProductDetails = () => {
  return (
    <div className='my-10 p-4'>
      <section className='grid lg:grid-cols-12 gap-6'>
        {/* Product Image Section */}
        <div className='lg:col-span-6 bg-gray-100 rounded-md h-96'></div>

        {/* Product Details Section */}
        <div className='lg:col-span-6'>
          <div className='[&>span]:text-gray-500 [&>span]:block [&>span]:tracking-wide [&>span]:uppercase [&>span]:text-[13px] [&_h2]:text-2xl [&_h2]:lg:text-3xl [&_h2]:font-semibold [&_h2]:mt-2 [&>p]:text-sm [&>p]:text-gray-600'>

            {/* Category */}
            <span>Mens Jacket</span>        

            {/* Product Title */}   
            <h2>Edward Cafe Racer Black Leather Jacket Black Leather Jacket</h2>           
                       
            {/* Price */}
            <div className='flex items-center gap-x-4 my-4'>        
              <span className='text-xl lg:text-2xl font-semibold'>$229.00</span>
              <span className='line-through text-gray-500'>$59.00</span>
              <span className='text-sm bg-gray-800 text-white px-2 py-1 rounded'>
                Save 33%
              </span>
            </div>

            {/* Description */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry&apos;s standard dummy textever since the 1500s.</p>   

          </div>

          {/* Color Options */}
          <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>                                      
            <strong>Color:</strong>
            <div className='flex gap-x-2 mt-2'>
              {['#704e06', '#101010', '#7d7767', '#2c2207'].map(
                (color, idx) => (
                  <label key={idx} className='cursor-pointer'>
                    <input type='radio' name='color' className='hidden peer' />
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
          <div className="mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block">                                         
            <strong>Quantity</strong>
            <IncrementCounter />
          </div>

          {/* Add to Cart */}
          <div className='mt-6 [&>button]:bg-gray-800 [&>button]:text-white [&>button]:w-full [&>button]:py-2 [&>button]:rounded'>                                          
            <button>Add to Cart</button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex xl:flex-row flex-col mt-[20px] justify-between items-center">

            <div className="[&>span]:bg-no-repeat [&>span]:lg:bg-[center_left_0px] [&>span]:lg:pl-[30px] [&>span]:md:pl-6 [&>span]:pl-7 [&>span]:bg-contain [&>span]:bg-[center_left] [&>span:nth-child(2)]:ml-6">
              <span className="bg-[url('/images/heart.png')]">Add to Wishlist</span>
              <span className="bg-[url('/images/ArrowsClockwise.png')]">Add to Compare</span>
            </div>

            <div className="flex items-center gap-x-4">
              <span>Share product:</span>
              <ul className="flex justify-start items-center gap-x-3 [&_li_svg]:w-4 ">
                <li><FontAwesomeIcon icon={faClone} /></li>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faXTwitter} /></li>
                <li><FontAwesomeIcon icon={faPinterestP} /></li>
              </ul>
              {/* <div className="bg-[url('/images/Vector2.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_center]"></div>
              <div className="bg-[url('/images/Vector2.2.png')] bg-no-repeat w-[30px] h-[30px] bg-[right_4px_top_4px]"></div>
              <div className="bg-[url('/images/facebook.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right] bg-[size:20px_20px]"></div>
              <div className="bg-[url('/images/Vector4.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div>
              <div className="bg-[url('/images/vector5.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div> */}
            </div>
          </div>

          {/* Delivery and Features Section */}
          <div className="mt-3 [&>p]:pl-8 [&>p]:bg-no-repeat [&>p]:bg-[length:22px_20px] [&>p]:bg-left [&_strong]:font-semibold">
              <p className="bg-[url(/images/delivery.png)]">
                <strong>Estimated Delivery:</strong> Jul 30 - Aug 03
              </p>
              <p className="bg-[url(/images/shipping.png)] !bg-[length:22px_16px] mt-3">
                <strong>Free Shipping & Returns:</strong> On all orders over $75
              </p>
          </div>
          <div className='mt-3'>
            <p>100% Guarantee Safe Checkout</p>
            <div className='flex justify-start gap-x-1.5 items-center [&_svg]:w-6'>
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcPaypal} />
              <FontAwesomeIcon icon={faCcStripe} />
              <FontAwesomeIcon icon={faCcDiscover} />
              </div>
          </div>

          {/* Accordion */}
          <ProductAccordion />
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
