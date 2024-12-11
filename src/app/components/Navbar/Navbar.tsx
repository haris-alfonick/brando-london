"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white z-[9999]">
        {/* Logo */}
        <Link className="text-3xl font-bold leading-none" href="#">
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
            className="navbar-burger flex items-center text-blue-600 p-3"
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
        <ul className="navWrap hidden lg:flex lg:items-center lg:space-x-6 [&>li>a]:text-sm [&>li>a]:text-[#282828] [&>li>a]:transition-all duration-300">
          <li><Link href="/faq">Home</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Shop</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Contact Us</Link></li>
        </ul>

        {/* Desktop Sign In / Sign Up Buttons */}
        <div className="hidden lg:flex gap-x-6">
          <Link className="text-sm text-gray-900 font-bold rounded-xl" href="#">
          <Image
           src="/images/cart-icon.png"
           alt="icon"
           width={23}
           height={100}
           />
           </Link>
          <Link className="text-sm text-white font-bold rounded-xl" href="#"> 
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
        <div className="fixed inset-0 bg-gray-900 bg-opacity-25 z-[99999]">
          <div className="fixed top-0 left-0 bottom-0 w-5/6 transition-all z-[999999] duration-500 max-w-sm p-4 py-5 bg-white border-r">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <Link className="mr-auto text-3xl font-bold leading-none" href="#">
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
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Shop</Link></li>
              <li><Link href="#">Service</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>

            {/* Sign Up Button */}
            <div className="mt-8">
              <Link
                className="block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-center text-white font-bold rounded-xl"
                href="#"
              >
                Sign up
              </Link>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
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
