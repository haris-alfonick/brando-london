import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const PaymentPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Payment Policy
          </h1>

          <h3>Easy &amp; Secure Payments</h3>
          <p>
            Your safety is our first priority. We ensure every transaction is
            safe and secure, making your experience with us convenient and
            reliable. Brando London is not just a brand but a trustworthy name,
            supported by our expert team that maintains a secure online
            environment.
          </p>

          <h3>Accepted Payment Methods</h3>
          <p>
            We accept Stripe, Visa, Mastercard, and Revolut Pay to ensure smooth
            and secure transactions worldwide. Currently, we do not accept cash,
            cheques, or PayPal. However, we are working to add more payment
            options to enhance convenience, while keeping all transactions
            end-to-end encrypted.
          </p>

          <h3>How Do We Secure Payment?</h3>
          <p>
            All transactions are processed through encrypted systems to ensure a
            reliable and secure checkout experience. Our team is strictly
            restricted from storing any customer data, including personal or
            financial information.
          </p>
          <p>
            We only use necessary details to process your order and improve your
            online shopping experience. Additionally, our HTTPS-secured checkout
            protects the entire payment process from fraud and scams.
          </p>

          <h3>Order Confirmation &amp; Verification</h3>
          <p>
            Once your order is placed, you will receive a confirmation email
            containing your order details. This email confirms whether your
            order has been successfully placed or if any issues require
            attention.
          </p>

          <h3>Order Issues &amp; Payment Declines</h3>
          <p>
            If a payment is declined or does not match standard verification
            checks, your order may be canceled or flagged for immediate review.
          </p>
          <p>
            You may contact your bank or reach out to our customer service team
            for assistance. You can also email us at
            <strong>sales@brandolondon.com</strong>.
          </p>

          <h3>Refund Payments</h3>
          <p>
            Refund payments are processed within the estimated timeframe after
            approval. The exact duration depends on your selected payment method
            and applicable business days.
          </p>

          <h3>Currency and VAT Charges</h3>
          <p>
            We accept payments in UK currency only. If you are paying from
            another region, currency conversion charges may apply based on your
            bank or card issuer.
          </p>
          <p>
            VAT and any regional taxes are the responsibility of the customer.
            Brando London is not liable for additional charges imposed by local
            authorities or financial institutions.
          </p>

          <h3>Payment Method Guide</h3>
          <ul>
            <li>Select the product and choose the preferred size.</li>
            <li>Add the item to your shopping cart.</li>
            <li>
              Enter all required details, including shipping address, payment
              method, and optional instructions.
            </li>
            <li>Review your information carefully and place the order.</li>
            <li>
              You will receive an email confirming your order once payment is
              successful.
            </li>
          </ul>

          <h3>Payment Confirmation</h3>
          <p>
            Payments are charged once the selected payment method is
            successfully authorized at checkout. Orders will not be processed or
            dispatched until payment confirmation is received.
          </p>

          <h3>Additional Fees</h3>
          <p>
            Brando London does not charge any additional processing or service
            fees. However, any fees applied by your bank or card issuer are
            outside our control.
          </p>

          <h3>Installments / Buy Now Pay Later</h3>
          <p>
            We currently do not offer installment plans or buy-now-pay-later
            services. Only the payment methods displayed at checkout are
            accepted.
          </p>

          <h3>Refund Method</h3>
          <p>
            Approved refunds are issued using the original payment method used
            at checkout. Refunds cannot be transferred to a different card, bank
            account, or payment provider.
          </p>

          <h3>Refund Processing Time</h3>
          <p>
            Refunds are processed within six business days after approval by our
            inspection team. The time taken for funds to reflect in your account
            may vary depending on your bank or payment provider.
          </p>

          <h3>Billing Information Accuracy</h3>
          <p>
            Customers must provide accurate and complete billing information
            during checkout. Orders may be delayed or canceled if billing
            details cannot be verified.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions related to payments, feel free to contact
            us via phone or email.
          </p>
          <p>
            <b>Email:</b>{' '}
            <Link href="mailto:sales@brandolondon.com">
              sales@brandolondon.com
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PaymentPolicy
