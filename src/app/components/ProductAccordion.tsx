import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const ProductAccordion = () => {
  return (
    <Accordion type="single" collapsible className="mt-8">
      {/* Description Section */}
      <AccordionItem value="description">
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="mt-4">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <h4 className="mt-4 font-semibold">Feature</h4>
          <ul className="mt-2 space-y-2">
            {[
              "Free 1 Year Warranty",
              "Free Shipping & Fasted Delivery",
              "100% Money-back Guarantee",
              "24/7 Customer Support",
              "Secure Payment Method",
            ].map((text, index) => (
              <li
                key={index}
                className="pl-8 bg-no-repeat bg-left"
                style={{
                  backgroundImage: `url('/icons/demo-icon-${index + 1}.png')`,
                  backgroundSize: "20px",
                }}
              >
                {text}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Additional Information Section */}
      <AccordionItem value="additional-info">
        <AccordionTrigger>Additional Information</AccordionTrigger>
        <AccordionContent>
          <p>
            Additional information about the product such as materials,
            warranty, or care instructions goes here.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
