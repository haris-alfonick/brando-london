import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const PaymentPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Payment Policy
          </h2>

          <strong>Easy Payment Policy</strong>
          <p>
            Your safety is first. We ensure every transaction is safe and secure, making your
            experience with us convenient and reliable. Brando London is not a brand but a
            trustworthy name, thanks to our expert team for maintaining safe environments.
          </p>

          <strong>Payments Methods</strong>
          <p>
            We only accept Stripe, Visa, and Mastercard. We use these methods to ensure smooth
            transactions worldwide. Currently, we are not accepting cash, cheques, or PayPal,
            but we are working on adding these options to provide more convenience for making
            your payment end-to-end encrypted.
          </p>

          <strong>How Do We Secure Payment?</strong>
          <p>
            We use an encrypted process for all transactions to ensure a smooth, reliable
            experience. Our team is restricted from storing any data, whether it is your
            personal information or financial details. We only use this information to provide
            the best online shopping experience with Brando London.
          </p>
          <p>
            To make the payment method hassle-free and reliable for our customers, we use HTTPS
            secure checkout to protect the entire process from scams.
          </p>

          <strong>Order Verification</strong>
          <p>
            How do you know if your order has been placed or not? You will get an email about
            the details. This will indicate whether your order was placed successfully or if
            there are any issues.
          </p>

          <strong>Order Issues</strong>
          <p>
            If the payment is declined or doesn’t match the standard information. Your order
            will be canceled, or an issue will be flagged for resolution ASAP.
          </p>
          <p>
            You can contact your bank or our customer service center for further assistance.
            Moreover, you can also email us at{' '}
            <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>.
          </p>

          <strong>Refund Payments</strong>
          <p>
            The refund payments will be cleared within the estimated time. It depends on your
            chosen payment methods, how long it will take, and business days.
          </p>

          <strong>Currency and Value Added Tax (VAT) Charges</strong>
          <p>
            We only accept UK currency. However, different currency charges will apply
            according to the UK currency. Also, VAT charges are the responsibility of the
            customer and the buyer. Brando London will not be responsible for any extra charges
            in your region.
          </p>

          <strong>Payments Method Guide</strong>
          <ol>
            <li>Select the product, choose the color and size according to your preferences.</li>
            <li>Add it to the shopping cart for further processing.</li>
            <li>
              Fill out all necessary details, including shipping address, payment method, and
              optional guidance.
            </li>
            <li>
              Ensure all information is correct and click the order confirmation button.
            </li>
            <li>Now you will receive the email confirming your order.</li>
          </ol>

          <strong>Contact Us</strong>
          <p>
            If you have any questions related to the payment of a product, feel free to reach
            out to us via phone call or sending an email at{' '}
            <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>. We love to
            hear from us.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PaymentPolicy;
