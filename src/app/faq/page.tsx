// components/FAQSection.js
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/breadcrumbs";

const FAQs = [
  {
    question: "How to pay for my order with Brando.com?",
    answer: "You can pay using credit/debit cards, PayPal, or bank transfer.",
  },
  {
    question: "Can I change it after I’ve placed my order?",
    answer: "Yes, you can change your order within 24 hours of placing it.",
  },
  {
    question: "Where do I look for details on my order?",
    answer: "You can check the 'My Orders' section in your account dashboard.",
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, we ship to most countries globally.",
  },
  {
    question: "Will ordering online be secure?",
    answer: "Absolutely! We use SSL encryption to secure your data.",
  },
  {
    question: "When will I receive my order?",
    answer:
      "Delivery times vary based on location but typically take 5-10 days.",
  },
  {
    question: "Has my order been received?",
    answer: "You will receive a confirmation email after placing the order.",
  },
  {
    question: "Will I have any problem after receiving my order?",
    answer: "If there's an issue, contact our support team for assistance.",
  },
  {
    question: "Can I Track My Order?",
    answer: "Yes, you can track your order using the tracking ID provided.",
  },
  {
    question: "Can I Cancel My Order?",
    answer: "Yes, orders can be canceled within 24 hours of placement.",
  },
];

export default function FAQSection() {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
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
                className="border-none "
              >
                <AccordionContent>
                  <p className="text-base px-4 py-2 text-gray-700">
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
