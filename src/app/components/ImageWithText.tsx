'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ImageText = () => {
  const router = useRouter()
  return (
    <section className='relative z-[99] bg-white md:py-20 py-10 max-md:pb-2 px-5'>
      <div className='container mx-auto'>
        <div className='flex justify-center lg:flex-row flex-col h-full lg:gap-x-12 md:gap-x-8 gap-x-0 [&_button]:cursor:pointer sm:[&_button]:text-lg [&_button]:px-6 [&_button]:p-2 [&_button]:rounded-md [&_button]:m-auto [&_button]:w-fit [&_.btnCenter]:mt-3 [&_.btnCenter]:text-center'>
          <div className='lg:order-1 order-2'>
            <Image
              src='/images/men-jackets.webp'
              alt='Men Leather Jacket'
              width={2000}
              height={500}
              className='md:w-[560px] w-full object-cover'
            />
            <div className='btnCenter'>
              <button
                onClick={() => router.push('mens-biker-leather-jackets/')}
                className='text-white bg-[#282828] hover:text-[#282828] hover:bg-[#eae645]'
              >
                Biker Jacket
              </button>
            </div>
          </div>
          <div className='lg:order-2 order-1 md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:uppercase [&_h2]:font-semibold [&_h2]:text-[#333333] [&_p]:text-base [&_p]:text-[#757575] [&_p]:sm:w-[380px] [&_p]:py-4 [&_p]:pb-6'>
            <h2>
              Aviation Style,{' '}
              <span className='md:block inline'>Everyday Comfort.</span>
            </h2>
            <p>
              Every aviator and flight jacket is crafted with your comfort,
              confidence, and individuality in mind, delivering the perfect
              balance of classic aviation style and high-performance function.
            </p>
            <Image
              src='/images/women-jackets.webp'
              alt='Women Leather Jacket'
              width={2000}
              height={500}
              className='lg:w-[396px] w-full lg:block hidden'
            />
            <div className='btnCenter'>
              <button
                onClick={() => router.push('womens-aviator-jackets/')}
                className='text-white bg-[#282828] hover:text-[#282828] hover:bg-[#eae645]'
              >
                Aviator Jacket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ImageText
