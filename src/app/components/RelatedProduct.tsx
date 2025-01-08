import * as React from 'react'
import { CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const RelatedProductCard = () => {
  return (
    <>
      <div className='min-[1440px]:max-w-[1600px] mx-auto w-full'>
        <div className='text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase'>
          <h2>Related Products</h2>
        </div>
        <Carousel
          opts={{
            align: 'start'
          }}
          className="pt-6"
        >
          <CarouselContent className='[&>div]:p-0 [&>div>div]:p-4'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5'
              >
                <CardContent>
                  <div className='group flex w-full flex-col overflow-hidden'>
                    <Link
                      className='relative w-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20'
                      href='#'
                    >
                      <Image
                        src='/images/jacket5.webp'
                        alt='product image'
                        width={500}
                        height={100}
                        className='h-full w-full object-cover'
                      />
                      <div className='absolute flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_button]:rounded-full [&_button]:bg-white [&_button]:h-10 [&_button]:w-10 [&_button]:flex [&_button]:justify-center [&_button]:items-center group-hover:opacity-100 opacity-0 z-[99]'>
                        <button className='text-red-700 hover:bg-gray-300'>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className='w-[24px] h-[24px]'
                          />
                        </button>
                        <button className='text-black hover:bg-gray-300'>
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className='w-6 h-6'
                          />
                        </button>
                      </div>
                      <div className='absolute top-2 right-2 flex justify-between gap-x-2 items-center py-0.5 px-2.5 bg-white z-[99999] [&>svg]:w-3.5 [&>svg]:h-3.5 [&>span]:font-semibold'>
                        <FontAwesomeIcon
                          icon={faStar}
                          className='text-[#eae640]'
                        />
                        <span>4.9</span>
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
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
export default RelatedProductCard
