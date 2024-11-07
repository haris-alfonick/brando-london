"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector(".navbar-menu");

    if (burger && menu) {
      burger.addEventListener("click", () => {
        setIsMenuOpen(!isMenuOpen);
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-3xl font-bold leading-none" href="#">
          <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:space-x-6">
          <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
          <li><a className="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
          <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
          <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
          <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
        </ul>
        <div className="hidden lg:flex space-x-3">
          <a className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl" href="#">Sign In</a>
          <a className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl" href="#">Sign up</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-menu fixed inset-0 z-50 bg-gray-800 bg-opacity-25">
          <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm p-6 bg-white border-r">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold" href="#">
                <svg className="h-12" viewBox="0 0 10240 10240">
                  {/* SVG path data for the logo */}
                </svg>
              </a>
            </div>
            <ul className="space-y-6">
              <li><a className="text-sm text-gray-700 hover:text-blue-600" href="#">Home</a></li>
              <li><a className="text-sm text-gray-700 hover:text-blue-600" href="#">About Us</a></li>
              <li><a className="text-sm text-gray-700 hover:text-blue-600" href="#">Services</a></li>
              <li><a className="text-sm text-gray-700 hover:text-blue-600" href="#">Pricing</a></li>
              <li><a className="text-sm text-gray-700 hover:text-blue-600" href="#">Contact</a></li>
            </ul> 
            <div className="mt-8">
              <a className="block py-2 px-4 bg-blue-500 hover:bg-blue-600 text-center text-white font-bold rounded-xl" href="#">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

<h3>fuhfih</h3>