import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Terms & Conditions' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>TERMS & CONDITIONS</h2>
          <p>At Brando London, we believe in building trust through transparency. These Terms & Conditions outline how we process payments, handle orders and serve our customers globally. By placing an order on our website, you agree to the policies listed below.</p>
          <strong>Payment Methods</strong>
          <p>
            To ensure a secure and seamless checkout experience, we currently accept Stripe, Visa Card and MasterCard. All payment transactions are encrypted and processed through an SSL-secured page to safeguard your personal and financial data. For now, we do not accept PayPal, checks, cash or any alternative payment methods outside of those listed.
          </p>
          <strong>Pricing & Availability Changes</strong>
          <p>
            All product prices and availability are subject to change without prior notice. While we aim to keep our offerings up to date, Brando London reserves the right to update prices, end promotions, or discontinue products at any time. We also reserve the right to reject the use of promotional codes if they are found invalid or expired.
          </p>
          <strong>Global Shipping Security</strong>
          <p>
            Brando London offers free worldwide shipping once your order reaches the qualifying amount, allowing you to enjoy and unlock premium fashion from anywhere without additional delivery charges. Our shipping is handled through verified, trusted courier partners to ensure your package arrives safely and promptly.
          </p>
          <strong>Order Cancellation</strong>
          <p>
            If you need to cancel your order, we encourage you to contact our support team within 24 hours of placing it. Once your order has been processed, dispatched or reached customs, it cannot be cancelled. Custom-made items, in particular, may be ineligible for cancellation due to their production-specific nature.
          </p>
          <strong>Shipping Restrictions</strong>
          <p>
            While Brando London proudly serves customers across borders, certain regions may have international shipping limitations or restrictions due to local import laws and customs regulations. In such cases, customers are responsible for paying any customs duties, VAT or other import-related fees required by their country. Brando London adheres to all international shipping laws and encourages customers to be informed of any import policies before ordering.
          </p>
          <strong>Order Approval and Denial</strong>
          <p>Brando London reserves the right to approve or decline any order at our discretion. Orders may be rejected due to payment verification issues, suspected fraud, or address errors. In case your order is denied or requires additional verification, our customer support team will reach out to assist you within 12 to 24 hours.</p>
          <strong>For Questions or Assistance</strong>
          <p>If you need further clarification about your order, shipping status, payment or any other inquiry, our customer support team is available 24/7. Your satisfaction is our top priority, and we are here to provide the best possible service. You can contact us at <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>, and we&apos;ll be glad to help.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TermsCondition;
