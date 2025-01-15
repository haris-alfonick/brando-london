import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>TERMS & CONDITION</h2>
          <strong>Free Shipping</strong>
          <p>
            Unlike many other online stores that have extensive rules and lots
            of conditions, Brando London offers free shipping all over the world,
            on all orders, without any minimum order sizes or intensive
            exceptions. Just because shipping is free doesn&apos;t mean it takes a
            long time. We understand that getting your items quickly is
            important to you, so we make every effort to process your order
            fast.
          </p>
          <strong>Payments</strong>
          <p>
            Payments are welcomed via PayPal, VISA, MasterCard, American
            Express, and Discover. We apologise that we do not accept personal
            checks. Your confidential card number will be protected using SSL,
            industry-leading encryption standard. If you make a payment for our
            products or services on our online store, the details you are asked
            to submit will be provided directly to payment provider through a
            secured connection.
          </p>
          <strong>Order Acceptance & Payment</strong>
          <p>
            Please beware that there are cases when an order may not be
            processed due to various reasons. The Brando London reserves the
            right to reject or cancel any request for any reason at any given
            time. You may be asked to provide additional verifications or data,
            including but not limited to contact number and address, before we
            accept the order. We provide the most definite pricing information
            on the Site to our users; however, errors may still occur, in such
            cases when the price of a product is not displayed correctly on the
            website. As such, we reserve the right to reject or cancel any
            order. In the event that a product is mispriced, we may, at our own
            discretion, either contact you for guidance or cancel your order and
            notify you of such event. We shall have the right to reject or
            cancel any such orders regardless of whether the request has been
            confirmed and your debit/credit card charged. The cardholder must
            retain a recored/copy of transaction records and Merchant policies
            and rules.
          </p>
          <strong>Pricing</strong>
          <p>
            Payments are accepted online using Visa and MasterCard credit/debit
            card in USD. However, if your card currency is other than USD, you
            can submit your request. Our system will accept the order by
            deducting the equivalent amount of the respective currency.
          </p>
          <strong>Users & Accounts</strong>
          <p>
            All the registered clients are mindful to maintain the
            confidentiality of their respective accounts. Minors less than 18
            years old are prohibited to register as a User of this website and
            are not allowed to transact or use the website.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TermsCondition;
