"use client";

import React, { useState, useEffect } from "react";

const CartButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if the screen width is less than 768px
    };

    const handleScroll = () => {
      if (isMobile) {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 200); // Show button only after 200px scroll on mobile
      } else {
        setIsVisible(true); // Always visible on larger screens
      }
    };

    handleResize(); // Set the initial screen size
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  if (!isVisible) return null;

  return (
    <div
      className={`${
        isMobile
          ? "fixed bg-white shadow-inner bottom-0 left-0 right-0 m-auto p-3 gap-x-2"
          : "relative"
      } md:mt-6 flex justify-between items-center md:gap-x-6 z-[99999] w-[100%] md:w-full [&>button]:bg-[#333333] [&>button]:text-white [&>button]:w-full md:[&>button]:py-2 [&>button]:py-2.5 md:[&>button]:rounded [&_.buyNow]:bg-white [&_.buyNow]:text-[#333] [&_.buyNow]:border [&_.buyNow]:font-medium [&_.buyNow]:border-[#333] [&_.cart]:border [&_.cart]:border-[#333]`}
    >
      <button className="buyNow">Buy Now</button>
      <button className="cart">Add to Cart</button>
    </div>
  );
};

export default CartButton;
