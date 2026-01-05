'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import { useAppSelector } from '@/lib/hooks'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '@/components/ui/input'
import SearchInput from './SearchInput'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartLength, setCartLength] = useState(0)
  const cartItemsData = useAppSelector(state => state.cart.items.length)
  useEffect(() => {
    setCartLength(cartItemsData)
  }, [cartItemsData])
  return (
    <>
      {/* Main Navbar */}
      <nav className='relative px-4 py-4 flex grid-cols-12 items-center bg-white z-[9999] border border-b-[#f0f0f0]'>
        {/* Logo */}
        <Link
          className='col-span-2 w-full text-3xl font-bold leading-none max-lg:[&_img]:max-w-[145px]'
          href='/'
        >
          <Image src='/images/logo.png' alt='logo' width={145} height={145} />
        </Link>

        {/* Menu Button for Mobile */}
        <div className='col-span-10 lg:hidden flex items-center w-fit mr-0 ml-auto gap-x-2.5'>
          <div className=' relative'>
            <div className='absolute -top-1 -right-1.5 w-4 h-4 text-[11px] text-white text-center bg-gray-700 rounded-full leading-[15px]'>
              {cartLength}
            </div>
            <Link
              className='text-sm text-[#333333] font-bold rounded-xl'
              href='/cart'
            >
              <Image
                src='/images/cart-icon.png'
                alt='icon'
                width={100}
                height={100}
                className=' md:w-7 sm:w-8 w-9'
              />
            </Link>
          </div>
          <button
            className='navbar-burger flex items-center text-[#333333] pl-3'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className='block h-5 w-5 fill-current' viewBox='0 0 20 20'>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar Menu */}
        <ul className='col-span-6 w-full m-auto justify-center navWrap hidden lg:flex lg:items-center xl:space-x-7 lg:space-x-3 [&>li>a]:font-medium [&>li>a]:text-base [&>li>a]:text-[#282828] [&>li>a]:transition-all duration-300'>
          <li>
            <Link href='/'>Home</Link>
          </li>

          {/* Shop Dropdown */}
          <li className='relative group'>
            <Link href='/shop' className='inline-flex items-center gap-1'>
              Shop{' '}
              <FontAwesomeIcon
                icon={faAngleDown}
                className='text-xs transition-transform duration-300 group-hover:rotate-180'
              />
            </Link>

            {/* Dropdown */}
            <ul className='absolute left-0 top-full mt-3 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
              <li>
                <Link
                  href='/mens-jackets'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Men Jackets
                </Link>
              </li>
              <li>
                <Link
                  href='/womens-jackets/'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Women Jackets
                </Link>
              </li>
              <li>
                <Link
                  href='/pilot-jackets/'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Pilot Jacket
                </Link>
              </li>
              <li>
                <Link
                  href='/burgundy-leather-jacket/'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Burgundy Leather Jacket
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href='/size-guide'>Size Guide</Link>
          </li>

          <li className='relative group'>
            <Link href='/contact' className='inline-flex items-center gap-1'>
              Customer Care
              <FontAwesomeIcon
                icon={faAngleDown}
                className='w-3 h-3 text-xs transition-transform duration-300 group-hover:rotate-180'
              />
            </Link>

            {/* Dropdown */}
            <ul className='absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
              
              <li>
                <Link
                  href='/about-us'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  FAQ
                </Link>
              </li>


              <li>
                <Link
                  href='/return-and-exchange-policy'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Return & Exchange Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/shipping-policy'
                  className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop Sign In / Sign Up Buttons */}
        <div className='col-span-4 hidden justify-end lg:flex w-full gap-x-6 items-center'>
          <div>
            {/* <Input type='text' placeholder='Search...' /> */}
            <SearchInput />
          </div>
          <div className=' relative'>
            <div className='absolute -top-1 -right-1.5 w-4 h-4 text-[11px] text-white text-center bg-gray-700 rounded-full leading-[15px]'>
              {cartLength}
            </div>
            <Link
              className='text-sm text-[#333333] font-bold rounded-xl'
              href='/cart'
            >
              <Image
                src='/images/cart-icon.png'
                alt='icon'
                width={23}
                height={100}
              />
            </Link>
          </div>
          {/* <Link className="text-sm text-white font-bold rounded-xl" href="/"> 
          <Image
            src="/images/user-icon.png"
            alt="icon"
            width={23}
            height={100}
          />
           </Link> */}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-[#333333] bg-opacity-25 z-[99999]'>
          <div className='fixed top-0 left-0 bottom-0 w-5/6 transition-all h-full overflow-y-auto z-[9999999] duration-500 max-w-sm p-4 py-5 bg-white border-r'>
            {/* Logo */}
            <div className='flex items-center mb-8'>
              <Link
                className='mr-auto text-3xl font-bold leading-none'
                href='/'
              >
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  width={145}
                  height={100}
                />
              </Link>
            </div>
            <div className='mb-4'>
              <Input type='text' placeholder='Search...' />
            </div>
            {/* Menu Items for Sidebar */}
            <ul className='navWrap space-y-3'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about-us'>About Us</Link>
              </li>
              {/* Shop Dropdown */}
              <li className='relative group'>
                <Link href='/shop' className='inline-flex items-center gap-1'>
                  Shop{' '}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className='text-xs mt-[2px]'
                  />
                </Link>

                {/* Dropdown */}
                <ul className='absolute left-0 top-full mt-3 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      Men Jackets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=''
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      Women Jackets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=''
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      Pilot Jacket
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/size-guide'>Size Guide</Link>
              </li>
              <li className='relative group'>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-1'
                >
                  Customer Care
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className='w-3 h-3 text-xs transition-transform duration-300 group-hover:rotate-180 float-right'
                  />
                </Link>

                {/* Dropdown */}
                <ul className='absolute left-0 top-full mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                  <li>
                    <Link
                      href='/faq'
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/about-us'
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/contact'
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 text-sm text-[#282828] hover:bg-gray-100'
                    >
                      Shipping Policy
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Categories */}
            <div className='[&_a]:text-[#333] [&_a]:text-base [&_a]:block [&_a]:pb-2 [&_strong]:text-[#333] [&_strong]:my-3 [&_strong]:mt-6 [&_strong]:text-lg [&_strong]:py-1.5 [&_strong]:pb-0 [&_strong]:underline [&_strong]:rounded-sm [&_strong]:font-semibold [&_strong]:block '>
              <strong>Men&apos;s Collection</strong>
              <div className='footerNav space-y-0.5'>
                <Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
                <Link href='/mens-vintage-leather-jackets'>
                  Men Vintage Jacket
                </Link>
                <Link href='/mens-suede-leather-jackets'>
                  Men Suede Leather Jackets
                </Link>
                <Link href='mens-biker-leather-jackets'>Men Biker Jackets</Link>
                <Link href='/mens-bomber-jackets'>Men Bomber Jackets</Link>
              </div>
            </div>

            <div className='[&_a]:text-[#333] [&_a]:text-base [&_a]:block [&_a]:pb-2 [&_strong]:text-[#333] [&_strong]:my-3 [&_strong]:mt-6 [&_strong]:text-lg [&_strong]:py-1.5 [&_strong]:pb-0 [&_strong]:underline [&_strong]:rounded-sm [&_strong]:font-semibold [&_strong]:block '>
              <strong>Women&apos;s Collection</strong>
              <div className='footerNav space-y-0.5'>
                <Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
                <Link href='/mens-vintage-leather-jackets'>
                  Men Vintage Jacket
                </Link>
                <Link href='/mens-suede-leather-jackets'>
                  Men Suede Leather Jackets
                </Link>
                <Link href='/womens-leather-jackets'>
                  Women Leather Jackets
                </Link>
                <Link href='/womens-vintage-leather-jackets'>
                  Women Vintage Jackets
                </Link>
              </div>
            </div>
            {/* Close Button */}
            <button
              className='absolute top-6 right-6 text-[#333333]'
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className='block h-7 w-7 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
