import React from 'react'
import ProductAccordion from '../components/ProductAccordion'
import IncrementCounter from '../components/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

const ProductDetails = () => {
  return (
    <div className='my-10 p-4'>
      <section className='grid lg:grid-cols-12 gap-6'>
        {/* Product Image Section */}
        <div className='lg:col-span-6 bg-gray-100 rounded-md h-96'></div>

        {/* Product Details Section */}
        <div className='lg:col-span-6'>
          <div className='[&>span]:text-gray-500 [&>span]:block [&>span]:tracking-wide [&>span]:uppercase [&>span]:text-[13px] [&_h2]:text-2xl [&_h2]:lg:text-3xl [&_h2]:font-semibold [&_h2]:mt-2 [&>p]:text-sm [&>p]:text-gray-600'>   

            <span>Mens Jacket</span>                                  {/* Category */}
            <h2>Edward Cafe Racer Black Leather Jacket Black Leather Jacket</h2>           {/* Product Title */}   
                       
            <div className='flex items-center gap-x-4 my-4'>        {/* Price */}
              <span className='text-xl lg:text-2xl font-semibold'>$229.00</span>
              <span className='line-through text-gray-500'>$59.00</span>
              <span className='text-sm bg-gray-800 text-white px-2 py-1 rounded'>
                Save 33%
              </span>
            </div>

            <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s.</p>   {/* Description */}

          </div>
        
          <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>                                      {/* Color Options */}
            <strong>Color:</strong>
            <div className='flex gap-x-2 mt-2'>
              {['#704e06', '#101010', '#7d7767', '#2c2207'].map(
                (color, idx) => (
                  <label key={idx} className='cursor-pointer'>
                    <input type='radio' name='color' className='hidden peer' />
                    <div
                      className={`w-12 h-8 rounded border peer-checked:ring-2`}
                      style={{ backgroundColor: color }}
                    ></div>
                  </label>
                )
              )}
            </div>
          </div>
                                          
          <div className='mt-6'>                                          {/* Size Options */}
            <h3 className='font-medium text-lg'>Size:</h3>
            <div className='flex space-x-4 mt-2'>
              {['M', 'L', 'XL', 'XXL'].map((size, idx) => (
                <label key={idx} className='cursor-pointer'>
                  <input type='radio' name='size' className='hidden peer' />
                  <span className='px-4 py-1 rounded border bg-white peer-checked:bg-gray-800 peer-checked:text-white'>
                    {size}
                  </span>
                </label>
              ))}
            </div>
          </div>
          
          <div className='mt-6'>                                         {/* Quantity */}
            <h3 className='font-medium text-lg'>Quantity</h3>
            <IncrementCounter />
          </div>

          <div className='mt-6'>                                          {/* Add to Cart */}
            <button className='bg-gray-800 text-white w-full py-2 rounded'>
              Add to Cart
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className='flex xl:flex-row flex-col mt-[20px] justify-between items-center'>
            <div>
              <span className="bg-[url('/images/Vector.png')] bg-no-repeat lg:bg-[center_left_0px] lg:pl-[30px] md:pl-[25px] pl-[28px] lg:bg-[length:23px_20px] md:bg-[length:20px_18px]  bg-[center_left]">
                Add to Wishlist
              </span>

              <span className="bg-[url('/images/ArrowsClockwise.png')] bg-no-repeat lg:bg-[center_left_1px] lg:pl-[30px] md:pl-[25px] pl-[28px] ml-[15px] lg:bg-[length:23px_20px] md:bg-[length:20px_18px] bg-[center_left] ">
                Add to Compare
              </span>
            </div>

            <div className='flex lg:mt-2 md:mt-[10px]  mt-1 md:ml-0 ml-1'>
              <div className='md:ml-[30px] ml-[27px]'>Share product:</div>

              <div className="bg-[url('/images/Vector2.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_center]">
                <div className="bg-[url('/images/Vector2.2.png')] bg-no-repeat w-[30px] h-[30px] bg-[right_4px_top_4px]"></div>
              </div>
              <div className="bg-[url('/images/facebook.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right] bg-[size:20px_20px]"></div>
              <div className="bg-[url('/images/Vector4.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div>
              <div className="bg-[url('/images/vector5.png')] bg-no-repeat w-[30px] h-[30px] bg-[center_right]"></div>
            </div>
          </div>

          {/* Delivery and Features Section */}
          <div className='mt-2 rounded-md'>
            <div className='text-gray-700'>
              <p
                className='pl-8 bg-no-repeat bg-left'
                style={{
                  backgroundImage: `url('/images/vector5.png')`,
                  backgroundSize: '20px'
                }}
              >
                <strong>Estimated Delivery:</strong> Jul 30 - Aug 03
              </p>
              <p
                className='mt-2 pl-8 bg-no-repeat bg-left'
                style={{
                  backgroundImage: `url('/images/vector5.png')`,
                  backgroundSize: '20px'
                }}
              >
                <strong>Free Shipping & Returns:</strong> On all orders over $75
              </p>
            </div>
          </div>
          <div>
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
