import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import Link from 'next/link';

const MensCollections = () => {
  return(
    <>
      <AccordionItem value='mensCollection' className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'>
        <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
          <span className='text-xl font-medium'>
            Men&apos;s Collection
          </span>
        </AccordionTrigger>
        <AccordionContent>
          {/* Price Range Checkboxes */}
          <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li>a:hover]:text-[#ab1e23] [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
            <li>
              <Link href="/mens-leather-jackets">Men&apos;s Leather Jackets</Link>
            </li>
            <li>
              <Link href="/mens-bomber-jackets">Men&apos;s Bomber Jackets</Link>
            </li>
            <li>
              <Link href="/mens-biker-leather-jackets">Men&apos;s Biker Jackets</Link>
            </li>
            <li>
              <Link href="/mens-suede-leather-jackets">Men&apos;s Suede Jackets</Link>
            </li>
            <li>
              <Link href="/mens-vintage-leather-jackets">Men&apos;s Vintage Jackets</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </>
  )
}

export default MensCollections;