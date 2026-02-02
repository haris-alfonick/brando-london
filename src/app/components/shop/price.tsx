"use client";

import { useAppSelector } from "@/lib/store";
import { convertPrice, formatPrice } from "@/utils/price";
import { useMounted } from "@/hooks/useMounted";

interface PriceType {
  price: string;
  productPage: boolean;
}

const Price = ({ price, productPage }: PriceType) => {
  const mounted = useMounted(); // 👈 THIS was missing
  const currency = useAppSelector((s) => s.currency.current);

  // ---- GBP base values ----
  const gbpPrice = parseFloat(price);
  const gbpSalePrice = gbpPrice + 40;

  // ---- 🔒 SSR-safe fallback (IMPORTANT) ----
  if (!mounted) {
    return (
      <div
        className={`flex items-center ${
          productPage ? "gap-x-4 mb-4" : "gap-x-2 [&_span]:text-lg"
        }`}
      >
        <span
          className={`${
            productPage ? "text-xl lg:text-2xl" : "text-[#282828]"
          } font-semibold`}
        >
          £{gbpPrice.toFixed(2)}
        </span>

        <span className="line-through text-xl lg:text-[23px] text-gray-500">
          £{gbpSalePrice.toFixed(2)}
        </span>

        {productPage && (
          <span className="text-sm bg-gray-800 text-white px-2 py-1 rounded">
            Save{" "}
            {Math.round(((gbpSalePrice - gbpPrice) / gbpSalePrice) * 100)}%
          </span>
        )}
      </div>
    );
  }

  // ---- Converted values (display only, AFTER mount) ----
  const displayPrice = convertPrice(gbpPrice, currency);
  const displaySalePrice = convertPrice(gbpSalePrice, currency);

  const discountPercent = Math.round(
    ((gbpSalePrice - gbpPrice) / gbpSalePrice) * 100
  );

  return (
    <div
      className={`flex items-center ${
        productPage ? "gap-x-4 mb-4" : "gap-x-2 [&_span]:text-lg"
      }`}
    >
      {/* Current price */}
      <span
        className={`${
          productPage ? "text-xl lg:text-2xl" : "text-[#282828]"
        } font-semibold`}
      >
        {formatPrice(displayPrice, currency)}
      </span>

      {/* Sale price */}
      <span className="line-through text-xl lg:text-[23px] text-gray-500">
        {formatPrice(displaySalePrice, currency)}
      </span>

      {/* Discount badge */}
      {productPage && (
        <span className="text-sm bg-gray-800 text-white px-2 py-1 rounded">
          Save {discountPercent}%
        </span>
      )}
    </div>
  );
};

export default Price;


// interface PriceType {
//   price: string,
//   productPage: boolean
// }

// const Price = ({price, productPage}: PriceType) => {
//   console.log(price)
//   const salePrice = Number(price) + 40;
//   const sale = salePrice.toFixed(2)
//   return(
//     <>
//       <div className={`flex items-center ${productPage ? 'gap-x-4 mb-4' : 'gap-x-2 [&_span]:text-lg'}`}>
//         <span className={`${productPage ? 'text-xl lg:text-2xl' : 'text-[#282828]'} font-semibold`}>
//           £{parseFloat(price).toFixed(2)}
//         </span>
//          <span className='line-through text-xl lg:text-[23px] text-gray-500 test'> £{sale}</span>
//         {productPage && (
//           <span className='text-sm bg-gray-800 text-white px-2 py-1 rounded'>
//              Save {Math.round(((parseFloat(price) - parseFloat(sale)) / parseFloat(price)) * 100)}%
//           </span>
//         )}
        
//       </div>
//     </>
//   )
// }

// export default Price