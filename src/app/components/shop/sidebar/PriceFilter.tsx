"use client";
import { Slider } from '@/components/ui/slider' // Slider from ShadCN UI
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import Link from 'next/link';


export default function PriceFilter() {
  const [range, setRange] = useState([0, 400])
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    min_price: range[0] || "",
    max_price: range[1] || ""
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams(filters as Record<string, string>).toString();
    router.push(`/shop?min_price=${range[0]}&max_price=${range[1]}`);
  };

  return (
    <div>
      <AccordionItem value='price' className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'>
        <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
          <span className='text-xl font-medium'>By Price</span>
        </AccordionTrigger>
        <AccordionContent className='[&>span>span:nth-child(1)]:h-[2px]'>
          {/* Range Slider */}
          {/* <Slider
            defaultValue={range}
            min={10}
            max={400}
            step={10}
            value={range}
            onValueChange={val => setRange(val)}
            className='py-3 pt-5'
          /> */}
          {/* <div className='flex items-center justify-start gap-x-6 mt-2 [&_input]:w-20 [&_input]:py-1.5 [&_input]:!outline-none  [&_input]:text-center [&_input]:border [&_input]:border-gray-300 [&_input]:rounded-md [&_input]:!text-base [&_input]:text-gray-500'>
            <input type='text' value={`$${range[0]}`} readOnly />
            <input type='text' value={`$${range[1]}`} readOnly />
          </div> */}
          {/* Price Range Checkboxes */}
          <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
            <li>
              <Link href="?min_price=100&max_price=200">$ 101-200</Link>
            </li>
            <li>
              <Link href="?min_price=201&max_price=300">$ 201-300</Link>
            </li>
            <li>
              <Link href="?min_price=301&max_price=400">$ 301-400</Link>
            </li>
            <li>
              <Link href="?min_price=401&max_price=500">$ 401-500</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      {/* <h3>Filters</h3>
      <input
        type="number"
        name="min_price"
        value={filters.min_price}
        onChange={handleFilterChange}
        placeholder="Min Price"
      />
      <input
        type="number"
        name="max_price"
        value={filters.max_price}
        onChange={handleFilterChange}
        placeholder="Max Price"
      />*/}

      {/* <button onClick={applyFilters}>Apply</button>  */}
    </div>
  );
}
