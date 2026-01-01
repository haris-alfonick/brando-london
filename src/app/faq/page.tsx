// components/FAQSection.js
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/breadcrumbs";

const FAQs = [
  {
    question: "How can I pay for my order?",
    answer: "For your convenience, Brando London accepts multiple secure payment methods, including Visa, MasterCard, American Express, Discover cards and Revolut Pay. All transactions are processed through SSL-encrypted servers, ensuring a safe and secure checkout experience.",
  },
  {
    question: "Can I make changes to my order after it has been placed?",
    answer: "Yes, you can modify your order if it has not yet been packed or shipped. Please contact our customer service team as soon as possible to request changes.",
  },
  {
    question: "Where can I find the details of my order?",
    answer: "After placing your order, you will receive a confirmation email containing your order name, a breakdown of item costs, shipping charges and all relevant details for your reference.",
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, we ship worldwide. We offer free standard shipping to the USA, UK, Canada, Asia, and Europe. Express shipping is also available for an additional charge of $40.",
  },
  {
    question: "Is it safe to place an order online?",
    answer: "Absolutely. Your personal and financial information is protected by SSL (Secure Socket Layer) encryption. We also use secure payment gateways like PayPal to ensure that your data is handled safely and responsibly throughout the transaction. ",
  },
 {
    question: "When will I receive my order?",
    answer: {
      processing: "Orders are processed within 2–4 business days.",
      shipping: [
        { type: "Standard Shipping", time: "8–10 business days" },
        { type: "Express Shipping", time: "4–7 business days" },
        { type: "Customized Orders", time: "10–13 business days" },
      ],
    },
  },
  {
    question: "How will I know if my order has been received?",
    answer: "Once your order is successfully placed, you’ll receive an email confirmation from us. This serves as proof of purchase and confirms that your order is being processed.",
  },
  {
    question: "What should I do if there’s an issue with my order after delivery?",
    answer: "If you encounter any issues with your order, such as receiving the wrong item or noticing a defect, please contact our Customer Service Team immediately. Provide a brief description of the issue so we can resolve it promptly. For returns and exchanges, kindly refer to our official Return & Exchange Policy page.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order has been dispatched, tracking details will be sent to you via email. You can monitor the progress of your shipment using the provided tracking number. ",
  },
  {
    question: "Can I cancel my order?",
    answer: "Order cancellation is only possible before the item has been shipped. Once your order has been dispatched, it cannot be canceled. However, you may still request a return or exchange after delivery.",
  },
   {
    question: "Can I exchange my item for a different one?",
    answer: "Yes, exchanges are possible. Please contact our customer service team for assistance, and they will guide you through the exchange process.",
  },
   {
    question: "Are Brando London sizes accurate according to the size chart?",
    answer: "Absolutely. Our size charts are carefully tailored and accurate. You can shop with confidence, knowing that the size you select will match the chart provided.",
  },
   {
    question: "Do you offer custom sizing?",
    answer: "Yes, we offer custom sizing. Please contact us with your measurements and requirements, and our team will be happy to assist you.",
  }, 
   {
    question: "Do I have to pay for return courier charges?",
    answer: "Return shipping costs are the responsibility of the customer unless the return is due to a defective or incorrect item. In such cases, we will cover the return shipping.",
  },
   {
    question: "Can I get a refund if I return my item?",
    answer: "Yes. Once your return is received and approved, the refund will be processed to your original payment method within 6 working days.",
  },
   {
    question: "Which courier services does Brando London use?",
    answer: "At Brando London, we use trusted global shipping partners, including FedEx and DHL. For domestic U.S deliveries, we also work with UPS depending on the region and availability.",
  },
   {
    question: "Will I have to pay customer fees? ",
    answer: "We declare your order as a gift and apply a lower value on the invoice to minimize customs charges. However, import duties and taxes are determined by your country’s laws and are the customer’s responsibility.",
  },
   {
    question: "How can I contact Brando London if I have more questions?",
    answer: "Our customer care team is always available to assist you. Please feel free to email us at sales@brandolondon.com for any inquiries or support.",
  },
  {
    question: "Will I have to pay customs fees?",
    answer: "Customs or import fees may apply depending on your country’s regulations. These fees are the responsibility of the customer and are not included in the order price.",
  },
];

export default function FAQSection() {
  
  return (
    <>
      <Navbar />
      <BreadCrumbs page="FAQs" />
      <section className="px-5 md:py-12 py-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`} // Ensure the value is unique per AccordionItem
                className="border-none bg-[#f5f5f5] rounded-lg"
              >
                <AccordionTrigger className="flex justify-between !no-underline font-normal items-center px-4 py-3 text-[#333] text-base">
                  {faq.question}
                </AccordionTrigger>
                
                <AccordionContent>
                  {typeof faq.answer === "string" ? (
                    <p className="text-[15px] px-4 py-0 text-[#888]">{faq.answer}</p>
                  ) : (
                    <>
                      <p className="text-[15px] px-4 text-[#888]">{faq.answer.processing}</p>
                      <ul className="text-[15px] px-4 pt-2 space-y-1 text-[#888] [&_strong]:font-medium">
                        {faq.answer.shipping.map((item, i) => (
                          <li key={i}>
                            <strong>{item.type}:</strong> {item.time}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </>
  );
}