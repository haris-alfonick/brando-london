import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import Link from 'next/link'

const WomensCollections = () => {
  return(
    <>
      <AccordionItem value='womensCollection' className='bg-none border-b-0 border-t-2 border-gray-200 py-2.5 [&_h3]:!mb-0'>
        <AccordionTrigger className='hover:no-underline py-0.5  [&>svg]:w-6 [&>svg]:h-6 text-gray-700'>
          <span className='text-xl font-medium'>
            Women&apos;s Collection
          </span>
        </AccordionTrigger>
        <AccordionContent>
          {/* Price Range Checkboxes */}
          <ul className='pt-2.5 [&>li]:flex [&>li]:justify-start [&>li]:items-center [&>li>label]:w-full [&>li>label]:cursor-pointer [&>li>button]:w-5 [&>li>button]:h-[18px] [&>li>button]:pb-[4px] [&>li>button]:rounded-[2px] [&>li>button]:border-[#888888] [&>li>button]:border-[1.5px] [&>li]:text-base [&>li]:text-[#999999] [&>li]:gap-x-2.5'>
            <li>
              <Link href="/womens-leather-jackets">Women's Leather Jackets</Link>
            </li>
            <li>
              <Link href="/womens-bomber-jackets">Women's Bomber Jackets</Link>
            </li>
            <li>
              <Link href="/womens-biker-leather-jackets">Women's Biker Jackets</Link>
            </li>
            <li>
              <Link href="/womens-suede-leather-jacket">Women's Suede Jackets</Link>
            </li>
            <li>
              <Link href="/womens-vintage-leather-jackets">Women's Vintage Jackets</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </>
  )
}

export default WomensCollections