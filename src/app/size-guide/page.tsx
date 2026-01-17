import { Accordion } from '@/components/ui/accordion'
import Image from 'next/image'
import Link from 'next/link'
import LeatherType from '../components/shop/sidebar/LeatherType'
import MensCollections from '../components/shop/sidebar/MensCollections'
import WomensCollections from '../components/shop/sidebar/WomensCollections'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BreadCrumbs from '../components/breadcrumbs'

export default function SizeGuide () {
  return (
    <>
      <Navbar />
      <BreadCrumbs page={'Size Guide'} />
      <div className='container mx-auto pt-10 pb-14 px-[15px]'>
        <div className='text-center [&>span]:block max-sm:[&>span]:text-[14px] [&>span]:pt-1 [&>span]:text-gray-500 [&>h2]:text-[#333] [&>h2]:font-[600] [&>h2]:uppercase [&>h2]:text-[24px] sm:[&>h2]:text-[30px]'>
          <h2>How to Sell Guide</h2>
          <span>
            Explore our guide for the best tips on selling on Grailed.
          </span>
        </div>

        <div className='[&>img]:rounded-[14px] [&>img]:mx-auto pt-8'>
          <Image
            src='/images/size-guide-top.webp'
            alt='image'
            width={2000}
            height={1000}
            className='xl:h-[550px] object-cover'
          />
        </div>

        <div className='grid grid-cols-12 pt-3 md:pt-12'>
          <div className='col-span-12 md:col-span-3 md:order-1 max-md:mt-10 order-2 md:px-[15px]'>
            <Accordion
              type='multiple'
              defaultValue={[
                'price',
                'mensCollection',
                'womensCollection',
                'customerRating'
              ]}
            >
              <MensCollections />
              <WomensCollections />
              <LeatherType />
            </Accordion>
          </div>
          <div className='col-span-12 md:order-2 order-1 md:col-span-9 md:pl-8 [&_h2]:font-semibold [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:text-[#333333] [&_h3]:font-semibold [&_h3]:pb-2 [&_h3]:text-xl [&_h3]:ml-[-1rem] [&_h3]:text-[#333333] [&_p]:pb-3 [&_p]:text-gray-500'>
            <h2>Grailed: Measurements</h2>
            <p>
              We strongly recommend providing measurements for your items. This
              helps buyers purchase with confidence.
            </p>
            <ul className='grid grid-cols-12 pl-[19px] gap-3 [&_li]:md:col-span-6 [&_li]:col-span-12 [&_li]:py-[2px] text-[15px] [&_li_a]:text-gray-500 [&_li_a]:lg:text-[15px] [&_li_a]:md:text-[13px] [&_li_a]:text-[15px]'>
              <li>
                <h3>Why Take Measurements?</h3>
                <ul className='[&_li]:list-disc'>
                  <li>
                    <Link href='#'>
                      Sizing May Be Vastly Different From Brand To Brand.
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>Less Back And Forth With Buyers.</Link>
                  </li>
                  <li>
                    <Link href='#'>
                      More Confidence For Buyers To Make The Purchase.
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h3>How To Take Measurements?</h3>
                <ul className='[&_li]:list-disc'>
                  <li>
                    <Link href='#'>Lay The Item Flat On A Hard Surface</Link>
                  </li>
                  <li>
                    <Link href='#'>
                      Zip And Button The Item Before Measuring
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>Use A Soft Tape Measure</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className='[&_h2]:py-4'>
              <h2>How to measure tops?</h2>
              <Image
                src='/images/tops.webp'
                alt='image'
                width={2000}
                height={2000}
              />
              <h2>How to measure bottoms?</h2>
              <Image
                src='/images/bottom.webp'
                alt='image'
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
