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
  }, [])
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
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-[#333333] p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar Menu */}
        <ul className="navWrap hidden lg:flex lg:items-center lg:space-x-6 [&>li>a]:font-medium [&>li>a]:text-base [&>li>a]:text-[#282828] [&>li>a]:transition-all duration-300">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog-post">Blog</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Desktop Sign In / Sign Up Buttons */}
        <div className="hidden lg:flex gap-x-6">
          <div className=' relative'>
          <div className='absolute -top-1 -right-1.5 w-4 h-4 text-[11px] text-white text-center bg-gray-700 rounded-full leading-[15px]'>{cartLength}</div>
          <Link className="text-sm text-[#`333333] font-bold rounded-xl" href="/cart">
          <Image
            src="/images/cart-icon.png"
            alt="icon"
            width={23}
            height={100}
          />
           </Link>
          </div>
          <Link className="text-sm text-white font-bold rounded-xl" href="/"> 
          <Image
            src="/images/user-icon.png"
            alt="icon"
            width={23}
            height={100}
          />
           </Link>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#333333] bg-opacity-25 z-[99999]">
          <div className="fixed top-0 left-0 bottom-0 w-5/6 transition-all z-[999999] duration-500 max-w-sm p-4 py-5 bg-white border-r">
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
            <ul className="navWrap space-y-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>

            {/* Sign Up Button */}
            <div className="mt-8">
              <Link
                className="block py-2 px-4 bg-[#333333] text-center text-white font-bold rounded-md"
                href="#"
              >
                Sign up
              </Link>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-[#333333]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="block h-6 w-6 fill-current"
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
