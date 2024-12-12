import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'

const ProductAccordion = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='mt-8 [&_h3_button]:uppercase [&_h3_button]:text-lg [&_h3_button]:text-[#333333] [&_h3_button]:tracking-wide [&_h3_button_svg]:w-7 [&_h3_button_svg]:h-7 [&_h3_button]:hover:!no-underline [&_p]:text-sm [&_p]:pb-3.5 [&_p]:text-[#888888] [&_h4]:text-lg [&_h4]:pt-0 [&_h4]:py-2 [&_h4]:font-medium [&_h4]:text-[#333333] [ul_li]:text-[#333333]'
      defaultValue='description'
    >
      {/* Description Section */}
      <AccordionItem value='description'>
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software
          </p>
          <h4 className='mt-4 font-semibold'>Feature</h4>
          <ul className='mt-2 space-y-3 [&>li]:bg-no-repeat [&>li]:bg-[length:21px_20px] [&>li]:bg-[left_center] [&>li]:pl-8'>
            <li className="bg-[url('/images/medal.png')]">
              Free 1 Year Warranty
            </li>
            <li className="bg-[url('/images/truck2.png')]">
              Free Shipping & Fasted Delivery
            </li>
            <li className="bg-[url('/images/hand1.png')]">
              100% Money-back Guarantee
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
        <AccordionTrigger>Additional Information</AccordionTrigger>
        <AccordionContent>
          <p>
            Additional information about the product such as materials,
            warranty, or care instructions goes here.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductAccordion
