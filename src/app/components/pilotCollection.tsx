'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PilotCollection = () => {
  const router = useRouter()
  return (
    <section className='relative bg-white md:py-20 py-10 px-5 sm:[&_h2]:text-[30px] [&_h2]:text-[24px] [&_h2]:text-[#333333] [&_h2]:uppercase [&_h2]:font-semibold [&_h2]:text-center [&_p]:text-center [&_p]:text-[#757575] [&_p]:pt-2 sm:[&_p]:pb-10 [&_p]:pb-4'>
      <div className='container mx-auto'>
      <h2>
              Aviation Style,{' '}
              Everyday Comfort.
            </h2>
            <p>
              Every aviator and flight jacket is crafted with your comfort,
              confidence, and individuality in mind, delivering the perfect
              balance {' '} <span className='md:block inline'>of classic aviation style and high-performance function.</span>
            </p>
        <div className='grid grid-cols-12 md:gap-7 gap-4 [&_h3]:pb-[20px] [&_h3]:font-medium [&_h3]:uppercase [&_h3]:leading-[1] lg:[&_h3]:text-[46px] sm:[&_h3]:text-[34px] [&_h3]:text-[30px] [&_h3]:text-white [&_a]:bg-[#FFFFFF] [&_a]:rounded-[6px] [&_a]:px-[40px] [&_a]:py-[10px] [&_Image]:w-full'>

            <div className='md:col-span-6 col-span-12 relative'>
            <Image
              src='/images/aviationmain1.webp'
              alt='Men Aviator Jacket'
              width={684}
              height={632}
              className='w-full object-cover'
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#00000087_0%,#d9d9d900_80%)]"></div>
            <div className='absolute lg:bottom-10 bottom-[25px] lg:left-10 left-[20px]'>
                <h3>Men's Aviator {' '} <span className='block'> Jacket</span></h3>
                <a href="/mens-aviator-jackets">Shop Now</a>
            </div>
            </div>

            <div className='md:col-span-6 col-span-12 relative max-md:-order-1'>
            <Image
              src='/images/aviationmain2.webp'
              alt='Men Aviator Jacket'
              width={684}
              height={632}
              className='w-full object-cover'
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#00000087_0%,#d9d9d900_80%)]"></div>
            <div className='absolute lg:bottom-10 bottom-[25px] lg:left-10 left-[20px]'>
                <h3>Women's Aviator {' '} <span className='block'>Jacket</span></h3>
                <a href="/womens-aviator-jackets">Shop Now</a>
            </div>
            </div>

        </div>
      </div>
    </section>
  )
}
export default PilotCollection