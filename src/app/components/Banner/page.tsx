'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import './style.css';

const Banner = () => {
    const router = useRouter();
  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='grid grid-cols-12 [&_img]:h-full max-lg:hidden'>
          <div className='col-span-6'>
            <Image
              src='/images/hero-banner1.webp'
              height={2000}
              width={2000}
              alt='Women Jacket'
            />
          </div>
          <div className='col-span-6'>
            <Image
              src='/images/hero-banner4.webp'
              height={2000}
              width={2000}
              alt='Women Jacket'
            />
          </div>
        </div>
        <div className='bgMobile max-lg:bg-[#efefed] absolute max-lg:static h-fit bottom-0 top-0 left-0 right-0 m-auto lg:max-w-[700px] max-w-full lg:py-0 sm:py-40 max-sm:px-4 py-20 max-[425px]:py-18 max-[425px]:pb-16 md:bg-none bg-no-repeat bg-cover bg-center sm:px-0 px-1.5 text-center [&>h1]:text-[#282828] sm:[&>h1]:text-[42px] [&>h1]:text-[28px] [&>h1]:leading-tight [&>h1]:font-bold [&>h1]:uppercase [&>p]:font-semibold [&>p]:text-[#5f5f5f] [&>p]:py-2 sm:[&>p]:py-5 [&>p]:pb-4 sm:[&>p]:pb-8 [&>p]:leading-6 sm:[&>p]:w-[415px] [&>p]:w-full [&>p]:m-auto [&>p]:text-lg [&_button]:cursor:pointer sm:[&_button]:w-44 [&_button]:w-32 sm:[&_button]:text-lg [&_button]:py-2.5 [&_button]:rounded-md'>
          <h1>
            Style for Today, <span className='block'>Classics for Always</span>
          </h1>
          <p>
            Crafted with precision and designed for comfort, each jacket brings
            the spirit of flight to your everyday adventures.
          </p>
          <div className='flex justify-center gap-x-3'>
            <button
              onClick={() => router.push('womens-jackets')}
              className='text-white bg-[#282828] hover:text-[#282828] hover:bg-[#fff]'
            >
              Women
            </button>
             <button
              onClick={() => router.push('/mens-jackets')}
              className='bg-[#282828] text-white hover:bg-[#fff] hover:text-[#282828]'
            >
              Men
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner
