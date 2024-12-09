'use client'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/productCard'
import { Slider } from '@/components/ui/slider' // Slider from ShadCN UI
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import Rating from '../components/Rating'

const ProductCategory = () => {
  const [range, setRange] = useState([0, 500])

  return (
    <>
      <Navbar />
      <div className='px-5'>
        <div className='grid grid-cols-12 md:gap-x-5 max-md:gap-y-5'>
          <div className='lg:col-span-3 max-lg:order-2 col-span-12 p-6 border [&_h3]:md:text-4xl [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-2.5'>
            <h3>Filter</h3>
            <Accordion type='single' collapsible>
              <AccordionItem
                value='1' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-semibold'>By Price</span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Range Slider */}
                  <Slider
                    defaultValue={range}
                    min={10}
                    max={500}
                    step={10}
                    value={range}
                    onValueChange={val => setRange(val)}
                    className='py-3 pt-5'
                  />
                  <div className='flex items-center justify-start gap-x-6 mt-2 [&_input]:w-20 [&_input]:py-1 [&_input]:text-center [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-md [&_input]:!text-lg [&_input]:text-gray-500'>
                    <input type='text' value={`$${range[0]}`} readOnly />
                    <input type='text' value={`$${range[1]}`} readOnly />
                  </div>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li]:text-lg [&>li]:text-gray-500 [&>li]:gap-x-2.5'>
                    <li>
                      <Checkbox id='price100' />
                      <label htmlFor='price100'>$ 10-100</label>
                    </li>
                    <li>
                      <Checkbox id='price200' />
                      <label htmlFor='price200'>$ 101-200</label>
                    </li>
                    <li>
                      <Checkbox id='price300' />
                      <label htmlFor='price300'>$ 201-300</label>
                    </li>
                    <li>
                      <Checkbox id='price400' />
                      <label htmlFor='price400'>$ 301-400</label>
                    </li>
                    <li>
                      <Checkbox id='price500' />
                      <label htmlFor='price500'>$ 401-500</label>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='2' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-semibold'>
                    Men's Collection
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li]:text-lg [&>li]:text-gray-500 [&>li]:gap-x-2.5'>
                    <li>
                      <Checkbox id='price100' />
                      <label htmlFor='price100'>Leather Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price200' />
                      <label htmlFor='price200'>Bomber Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price300' />
                      <label htmlFor='price300'>Biker Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price400' />
                      <label htmlFor='price400'>Suede Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price500' />
                      <label htmlFor='price500'>Vintage Jackets</label>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='3' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-semibold'>
                    Women's Collection
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li]:text-lg [&>li]:text-gray-500 [&>li]:gap-x-2.5'>
                    <li>
                      <Checkbox id='price100' />
                      <label htmlFor='price100'>Leather Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price200' />
                      <label htmlFor='price200'>Bomber Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price300' />
                      <label htmlFor='price300'>Biker Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price400' />
                      <label htmlFor='price400'>Suede Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='price500' />
                      <label htmlFor='price500'>Vintage Jackets</label>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='4' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-semibold'>Customer Rating</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='pt-3'>
                    <Rating />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='lg:col-span-9 col-span-12'>
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default ProductCategory
