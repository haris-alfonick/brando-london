'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopRatedProduct = () => {
  return (
    <>
      <section className='px-5 md:pb-0 md:py-14 py-10 pb-1'>
        <div className='container mx-auto'>
          <div className='text-center lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase'>
            <h2>Top Rated Products</h2>
          </div>
          <Tabs defaultValue='Men'>
            <TabsList className='flex justify-center bg-transparent mt-5 mb-6 [&_button]:text-base [&_button]:!shadow-none'>
              <TabsTrigger value='Men'>
                Men
              </TabsTrigger>
              <TabsTrigger value='Women'>
                Women
              </TabsTrigger>
              <TabsTrigger value='Kids'>
                Kids
              </TabsTrigger>
            </TabsList>
            <TabsContent value='Men'>
              <div className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
                <div className='md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white'>
                  <Link href='#'>
                    <div className='relative'>
                      <Image
                        src='/images/jacket2.webp'
                        alt='product image'
                        width={500}
                        height={100}
                        className='h-full w-full object-cover'
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        className='absolute top-3 right-3.5 text-[22px]'
                      />
                    </div>
                  </Link>
                  <div className='py-3'>
                    <div className='flex items-center justify-start gap-x-2 [&_span]:text-lg'>
                      <span className='font-semibold text-[#282828]'>
                        $229.00
                      </span>
                      <span className='text-[#5f5f5f] line-through'>
                        $269.00
                      </span>
                    </div>
                    <p className='leading-5 py-1 pb-3 text-base'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                </div>

								<div className='md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white'>
                  <Link href='#'>
                    <div className='relative'>
                      <Image
                        src='/images/bag.webp'
                        alt='product image'
                        width={500}
                        height={100}
                        className='h-full w-full object-cover'
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        className='absolute top-3 right-3.5 text-[22px]'
                      />
                    </div>
                  </Link>
                  <div className='py-3'>
                    <div className='flex items-center justify-start gap-x-2 [&_span]:text-lg'>
                      <span className='font-semibold text-[#282828]'>
                        $229.00
                      </span>
                      <span className='text-[#5f5f5f] line-through'>
                        $269.00
                      </span>
                    </div>
                    <p className='leading-5 py-1 pb-3 text-base'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                </div>

                <div className='md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white'>
                  <Link href='#'>
                    <div className='relative'>
                      <Image
                        src='/images/hand-bag.webp'
                        alt='product image'
                        width={500}
                        height={100}
                        className='h-full w-full object-cover'
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        className='absolute top-3 right-3.5 text-[22px]'
                      />
                    </div>
                  </Link>
                  <div className='py-3'>
                    <div className='flex items-center justify-start gap-x-2 [&_span]:text-lg'>
                      <span className='font-semibold text-[#282828]'>
                        $229.00
                      </span>
                      <span className='text-[#5f5f5f] line-through'>
                        $269.00
                      </span>
                    </div>
                    <p className='leading-5 py-1 pb-3 text-base'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                </div>

								<div className='md:col-span-3 col-span-6 group flex w-full flex-col overflow-hidden bg-white'>
                  <Link href='#'>
                    <div className='relative'>
                      <Image
                        src='/images/jacket3.webp'
                        alt='product image'
                        width={500}
                        height={100}
                        className='h-full w-full object-cover'
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        className='absolute top-3 right-3.5 text-[22px]'
                      />
                    </div>
                  </Link>
                  <div className='py-3'>
                    <div className='flex items-center justify-start gap-x-2 [&_span]:text-lg'>
                      <span className='font-semibold text-[#282828]'>
                        $229.00
                      </span>
                      <span className='text-[#5f5f5f] line-through'>
                        $269.00
                      </span>
                    </div>
                    <p className='leading-5 py-1 pb-3 text-base'>
                      Edward Cafe Racer Black Leather Jacket
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='Women'>Women</TabsContent>
            <TabsContent value='Kids'>Kids</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
export default TopRatedProduct
