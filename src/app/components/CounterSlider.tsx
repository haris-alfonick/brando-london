import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/app/components/counterCarousel'
import Image from 'next/image'
import Link from 'next/link'

const CounterSlider = () => {
  return (
    <section className='md:py-20 bg-[#282828] px-5 py-14 mt-12'>
      <div className='!max-2xl:max-w-[1240px] container mx-auto'>
        <div className='animateCircle after:animate-spin bg-no-repeat relative grid grid-cols-12 items-center md:gap-y-0 gap-y-16 md:justify-items-end justify-items-center gap-5'>
          <div className='md:col-span-4 col-span-12 flex flex-col space-y-4 lg:[&>h3]:text-4xl md:[&>h3]:text-3xl [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:uppercase [&>strong]:block [&>strong]:text-white [&>strong]:text-2xl [&>strong]:font-semibold [&>span]:lg:w-[85%] [&>span]:pt-1.5 [&>span]:leading-[1.4] [&>span]:text-lg [&>span]:text-white [&>span]:block [&_button]:bg-[#fff] [&_button]:text-[#282828] [&_button]:w-36 sm:[&_button]:text-lg [&_button]:py-2 [&_button]:rounded-md'>
            <h3>People Also Loved</h3>
            <span>
              Discover more elevated leather styles that pair effortlessly with
              any wardrobe.
            </span>
            <Link href='#' className='hidden'>
              <button>Buy Now</button>
            </Link>
            <strong>Hurry, Before It&apos;s Too Late!</strong>
          </div>

          <div className='md:col-span-8 col-span-12'>
            <Carousel>
              <CarouselContent className='md:duration-500 2xl:duration-0 ml-0'>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-1.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-2.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-3.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-4.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-5.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-6.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-7.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
                <CarouselItem className='counterCarouselItem max-2xl:min-w-fit w-[33%] max-md:basis-[100%] basis-[33%] 2xl:basis-[31%] relative'>
                  <Image
                    src='/images/slide-8.webp'
                    alt='image'
                    width={2000}
                    height={2000}
                    className='w-[100%]'
                  />
                  <div className='rounded-sm p-[15px] bg-white w-fit [&_span]:text-[#666] absolute z-2 top-auto bottom-[15px] left-[30px]'>
                    <span>
                      01{' '}
                      <span className='counterSpan pl-[29px] relative inline'>
                        Winter Sale
                      </span>
                    </span>
                    <span className='block !text-[#222] font-bold text-xl'>
                      30% OFF
                    </span>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <CarouselDots />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CounterSlider
