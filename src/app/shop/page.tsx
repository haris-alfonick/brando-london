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
import BreadCrumbs from '../components/breadcrumbs'

const ProductCategory = () => {
  const [range, setRange] = useState([0, 400])

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <div className='px-5 2xl:py-12 lg:py-8 py-5'>
        <div className='grid grid-cols-12 md:gap-x-8 max-md:gap-y-3' 
        >
          <div className='lg:mt-24 lg:col-span-3 col-span-12 max-lg:order-2 h-fit p-6 border border-[#e4e7e9] [&_h3]:text-[#333333] [&_h3]:md:text-3xl [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2.5'>
            <h3>Filter</h3>
            <Accordion type='single' collapsible defaultValue='1'>
              <AccordionItem
                value='1' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-medium'>By Price</span>
                </AccordionTrigger>
                <AccordionContent className='[&>span>span:nth-child(1)]:h-[2px]'>
                  {/* Range Slider */}
                  <Slider
                    defaultValue={range}
                    min={10}
                    max={400}
                    step={10}
                    value={range}
                    onValueChange={val => setRange(val)}
                    className='py-3 pt-5'
                  />
                  <div className='flex items-center justify-start gap-x-6 mt-2 [&_input]:w-20 [&_input]:py-1.5 [&_input]:!outline-none  [&_input]:text-center [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-md [&_input]:!text-base [&_input]:text-gray-500'>
                    <input type='text' value={`$${range[0]}`} readOnly />
                    <input type='text' value={`$${range[1]}`} readOnly />
                  </div>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
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
                value='1' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-medium'>
                    Men&apos;s Collection
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
                    <li>
                      <Checkbox id='id10' />
                      <label htmlFor='id10'>Leather Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id20' />
                      <label htmlFor='id20'>Bomber Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id30' />
                      <label htmlFor='id30'>Biker Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id40' />
                      <label htmlFor='id40'>Suede Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id50' />
                      <label htmlFor='id50'>Vintage Jackets</label>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='1' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-medium'>
                    Women&apos;s Collection
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {/* Price Range Checkboxes */}
                  <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
                    <li>
                      <Checkbox id='id60' />
                      <label htmlFor='id60'>Leather Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id70' />
                      <label htmlFor='id70'>Bomber Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id80' />
                      <label htmlFor='id80'>Biker Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id90' />
                      <label htmlFor='id90'>Suede Jackets</label>
                    </li>
                    <li>
                      <Checkbox id='id100' />
                      <label htmlFor='id100'>Vintage Jackets</label>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='1' // Ensure the value is unique per AccordionItem
                className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'
              >
                <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
                  <span className='text-xl font-medium'>Customer Rating</span>
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
            <div className='lg:text-4xl text-[#333333] text-2xl font-semibold uppercase py-5 pb-10 w-fit mx-auto'>
              <h2>Feature Products</h2>
            </div>
            <ProductCard />
            <div className='xl:max-w-[800px] m-auto sm:my-12 my-5 flex justify-between items-center gap-x-2 max-sm:gap-y-5 max-sm:text-center max-sm:flex-col bg-[#EAEAEA] p-7 rounded-lg [&_strong]:text-2xl [&_strong]:font-medium [&_strong]:text-[#333] [&_p]:text-[#888] [&_p]:text-base [&_p]:pt-1.5'>
              <div>
                <strong>Didn't find what you were looking for</strong>
                <p>Get your Custom made Leather Jackets</p>
              </div>
              <button className='bg-[#333] text-white font-medium p-2 px-6 rounded-md max-sm:text-sm'>Customize Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default ProductCategory
