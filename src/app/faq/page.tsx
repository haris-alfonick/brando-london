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
    answer: "For your convenience, Brando London accepts multiple secure payment methods, including PayPal, Visa, MasterCard, American Express and Discover cards. All transactions are processed through SSL-encrypted servers, ensuring a safe and secure checkout experience.",
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
    answer: "Yes, Brando London ships globally. However, there are a few exceptions where delivery is not available, including Israel, Russia and APO/FPO addresses. For further information on delivery locations, you can email us at support@brandolondon.com. ",
  },
  {
    question: "Is it safe to place an order online?",
    answer: "Absolutely. Your personal and financial information is protected by SSL (Secure Socket Layer) encryption. We also use secure payment gateways like PayPal to ensure that your data is handled safely and responsibly throughout the transaction. ",
  },
  {
    question: "When will I receive my order?",
    answer:"Standard delivery usually takes between 3-8 business days. If your order is delayed beyond its scheduled delivery window, please contact our customer support team for assistance and real-time updates.",
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
    answer: "We currently offer custom sizing only for suits. For other garments, please refer to our standard size chart for the best fit.",
  },
   {
    question: "Are your size measurements listed in inches or centimeters? ",
    answer: "Our size guides feature both inches and centimeters to accommodate all preferences. Please consult the guide before placing your order.",
  }, 
   {
    question: "How do I use a coupon code?",
    answer: "You can enter your discount code at checkout in the designated field labeled “Coupon Code.” The discount will be applied instantly to your total.",
  },
   {
    question: "Do I have to pay for return courier charges?",
    answer: "While we offer free global shipping on all orders, return courier charges are the customer’s responsibility unless the item received was incorrect or defective.",
  },
   {
    question: "Can I get a refund if I return my item?",
    answer: "Yes, refunds are processed through the original payment method and may take 6-7 working days after the return has been received and approved.",
  },
   {
    question: "Which courier services does Brando London use?",
    answer: "At Brando London, we use trusted global shipping partners, including FedEx and DHL. For domestic U.S deliveries, we also work with USPS and UPS depending on the region and availability.",
  },
   {
    question: "Does Brando London have any physical retail stores?",
    answer: "No, Brando London operates exclusively as an online fashion store. All of our premium leather jackets and apparel are available exclusively through our website.",
  },
   {
    question: "Will I have to pay customer fees? ",
    answer: "We declare your order as a gift and apply a lower value on the invoice to minimize customs charges. However, import duties and taxes are determined by your country’s laws and are the customer’s responsibility.",
  },
   {
    question: "How can I contact Brando London if I have more questions?",
    answer: "Our customer care team is always available to assist you. Please feel free to email us at support@brandolondon.com for any inquiries or support.",
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
                  <p className="text-[15px] px-4 py-2 text-[#888]">
                    {faq.answer}
                  </p>
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