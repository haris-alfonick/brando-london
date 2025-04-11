"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import "./style.css";
import { useAppSelector } from '@/lib/hooks';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0)
  const cartItemsData = useAppSelector((state) => state.cart.items.length)
  useEffect( () => {
    setCartLength(cartItemsData)
  }, [cartItemsData])
  return (
    <>
      {/* Main Navbar */}
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white z-[9999]">
        {/* Logo */}
        <Link className="text-3xl font-bold leading-none" href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={145}
            height={100}
          />
        </Link>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden flex items-center gap-x-2.5">
        <div className=' relative'>
          <div className='absolute -top-1 -right-1.5 w-4 h-4 text-[11px] text-white text-center bg-gray-700 rounded-full leading-[15px]'>{cartLength}</div>
          <Link className="text-sm text-[#333333] font-bold rounded-xl" href="/cart">
          <Image
            src="/images/cart-icon.png"
            alt="icon"
            width={25}
            height={100}
          />
           </Link>
          </div>
          <button
            className="navbar-burger flex items-center text-[#333333] pl-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="block h-5 w-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar Menu */}
        <ul className="navWrap hidden lg:flex lg:items-center lg:space-x-7 [&>li>a]:font-medium [&>li>a]:text-base [&>li>a]:text-[#282828] [&>li>a]:transition-all duration-300">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Desktop Sign In / Sign Up Buttons */}
        <div className="hidden lg:flex gap-x-6">
          <div className=' relative'>
          <div className='absolute -top-1 -right-1.5 w-4 h-4 text-[11px] text-white text-center bg-gray-700 rounded-full leading-[15px]'>{cartLength}</div>
          <Link className="text-sm text-[#333333] font-bold rounded-xl" href="/cart">
          <Image
            src="/images/cart-icon.png"
            alt="icon"
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
        <div className="fixed inset-0 bg-[#333333] bg-opacity-25 z-[99999]">
          <div className="fixed top-0 left-0 bottom-0 w-5/6 transition-all h-full overflow-y-auto z-[9999999] duration-500 max-w-sm p-4 py-5 bg-white border-r">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <Link className="mr-auto text-3xl font-bold leading-none" href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={145}
                  height={100}
                />
              </Link>
            </div>

            {/* Menu Items for Sidebar */}
            <ul className="navWrap space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>

            {/* Categories */}
            <div className='[&_a]:text-[#333] [&_a]:text-base [&_a]:block [&_a]:pb-2 [&_strong]:text-[#333] [&_strong]:my-3 [&_strong]:mt-6 [&_strong]:text-lg [&_strong]:py-1.5 [&_strong]:pb-0 [&_strong]:underline [&_strong]:rounded-sm [&_strong]:font-semibold [&_strong]:block '>
              <strong>Men&apos;s Collection</strong>
              <div className="footerNav space-y-0.5">
                <Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
                <Link href='/mens-vintage-leather-jackets'>Men Vintage Jacket</Link>
                <Link href='/mens-suede-leather-jackets'>Men Suede Leather Jackets</Link>
                <Link href='mens-biker-leather-jackets'>Men Biker Jackets</Link>
                <Link href='/mens-bomber-jackets'>Men Bomber Jackets</Link>
              </div>
            </div>

            <div className='[&_a]:text-[#333] [&_a]:text-base [&_a]:block [&_a]:pb-2 [&_strong]:text-[#333] [&_strong]:my-3 [&_strong]:mt-6 [&_strong]:text-lg [&_strong]:py-1.5 [&_strong]:pb-0 [&_strong]:underline [&_strong]:rounded-sm [&_strong]:font-semibold [&_strong]:block '>
              <strong>Women&apos;s Collection</strong>
              <div className="footerNav space-y-0.5">
                <Link href='/mens-leather-jackets'>Men Leather Jackets</Link>
                <Link href='/mens-vintage-leather-jackets'>Men Vintage Jacket</Link>
                <Link href='/mens-suede-leather-jackets'>Men Suede Leather Jackets</Link>
                <Link href='/womens-leather-jackets'>Women Leather Jackets</Link>
                <Link href='/womens-vintage-leather-jackets'>Women Vintage Jackets</Link>
              </div>
            </div>
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-[#333333]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="block h-7 w-7 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
