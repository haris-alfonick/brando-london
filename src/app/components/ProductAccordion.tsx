import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

interface ProductLongDescriptionParams{
  description: string | undefined
}

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const ProductAccordion = ({description}: ProductLongDescriptionParams) => {
  return (
    <Accordion
      type='multiple'
      className='mt-4 [&_h3_button]:uppercase [&_h3_button]:text-lg [&_h3_button]:text-[#333333] [&_h3_button]:tracking-wide [&_h3_button_svg]:w-7 [&_h3_button_svg]:h-7 [&_h3_button]:hover:!no-underline [&_p]:text-sm [&_p]:pb-2 [&_p]:text-[#757575] [&_h4]:text-lg [&_h4]:pt-0 [&_h4]:py-2 [&_h4]:font-medium [&_h4]:text-[#333333] [ul_li]:text-[#333333] [&_b]:font-semibold [&_strong]:font-semibold [&_strong]:inline-block [&_strong]:pr-1.5 [&_strong]:text-[#333]'
      defaultValue={["description"]}
    >
      {/* Description Section */}
      <AccordionItem value='description'>
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description || '') }} /> 
        <h4 className='mt-3 font-semibold'>Feature</h4>
        <ul className='mt-2 space-y-3 [&>li]:bg-no-repeat [&>li]:bg-[length:21px_20px] [&>li]:bg-[left_center] [&>li]:pl-8'>
          {/* <li className="bg-[url('/images/Medal.png')]">
            Free 1 Year Warranty
          </li>
          <li className="bg-[url('/images/truck2.png')]">
            Free Shipping & Fasted Delivery
          </li> */}
          <li className="bg-[url('/images/hand1.png')]">
            Shop with Confidence
          </li>
          <li className="bg-[url('/images/support.png')] !bg-[length:19px_18px] !bg-[left_1px_center]">
            24/7 Customer Support
          </li>
          <li className="bg-[url('/images/payment.png')]">
            Secure Payment Method
          </li>
        </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Additional Information Section */}
      <AccordionItem value='additional-info'>
        <AccordionTrigger>Return & Exchange</AccordionTrigger>
        <AccordionContent>
          <ul className='[&_li]:!list-inside [&_li]:list-disc '>
            <li>Returns and exchanges are accepted within 14 days of delivery.</li>
            <li>All items must be new, unused, and in their original condition with all tags attached.</li>
            <li>Customized or personalized products are not eligible for returns or exchanges.</li>
            <li>The customer is responsible for return shipping unless the product is damaged or incorrect.</li>
            <li>Submit your return or exchange request to <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a> with your order details.</li>
            <li>Refunds are processed within 6 business days after approval.</li>
            <li>Once approved, exchanges will be dispatched promptly.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='shippig-details'>
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent>
          <div className="shipping-policy [&_strong]:text-[15px] [&_p]:mb-0 [&_ul]:mt-2.5 [&_ul]:mb-3.5">
            <p>
              <strong>Processing Time:</strong>
              Orders are processed within 2 to 4 business days. Due to the additional detailing required, custom orders may take longer.
            </p>

            <strong className='mt-2'>Shipping Options:</strong>
            <ul className='[&>li]:text-end [&>li]:mb-1 [&>li>b]:text-[#383838] [&>li>b]:font-medium [&>li>b]:float-left [&>li]:text-[15px]'>
              <li><b>Standard Shipping:</b> Free, 8–10 business days</li>
              <li><b>Express Shipping:</b> $40, 4–7 business days</li>
              <li><b>Customized Orders:</b> 10–13 business days</li>
            </ul>

            <p>
              <strong>Tracking:</strong>
              A tracking ID will be sent via email once your order has been dispatched.
            </p>

            <p>
              <strong>Notes:</strong>
              Shipping is free; however, customs duties or fees may apply depending on your country. Please ensure your shipping address details are accurate.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductAccordion