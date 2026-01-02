import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Terms & Conditions' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Terms and Conditions - Brando London
          </h1>

          <p>
            A warm welcome to all our valued buyers at Brando London! We respect
            our customers and buyers and believe in maintaining transparency and
            clarity. Therefore, please read our terms and conditions to avoid
            future disagreements.
          </p>

          <h3>Copyright Issues</h3>
          <p>
            To avoid legal issues, do not use any web content from our website,
            including product images, descriptions, or specifications. Brando
            London owns all written and image content, and we have the right to
            take legal action against anyone who uses it without our consent.
          </p>

          <h3>Refresh the Web Content</h3>
          <p>
            We ensure that our customers receive accurate data and information
            on our website. However, we have the right to make changes in
            products and charges as needed without advance agreement or
            permission.
          </p>
          <p>
            On the other hand, we believe in clarity, and you will be informed
            about your order cancellations, postponements in the shipment days
            or any other major issue regarding the order.
          </p>

          <h3>Shipment and Processing</h3>
          <p>
            We keep our customers' data safe and secure and use it only to
            provide you with our best service. Once you place an order on our
            website and confirm it, we generate the tracking ID and shipment
            details to share them with you.
          </p>
          <p>
            We do not share your personal information except with the service
            providers to deliver your product on time.
          </p>
          <p>
            Our service providers are safe and secure, and your data will be
            protected.
          </p>
          <p>We do not carry your information, nor your card details.</p>
          <p>
            Items take 2-4 business days to dispatch due to exceptional
            craftsmanship. Also, our custom orders take time to dispatch for
            extra detailing.
          </p>
          <p>
            We have the right to cancel your order if we suspect any scam or
            fraud, failed payment, or a violation of the terms and conditions.
          </p>

          <h3>Custom Charges or Taxes</h3>
          <p>
            Our entire collection is listed in GBP. Therefore, charges may vary
            by country at the time of exchange.
          </p>
          <p>
            Our price range does not include taxes or any customs charges. You
            have to ensure that by confirming your customs tax officer for
            details, depending on your country.
          </p>

          <h3>Misconduct of Website Usage</h3>
          <p>
            Make sure that your visit to our website does not result in any form
            of misconduct: in that case, we have the right to,
          </p>
          <ul>
            <li>
              Restrict your visit to our page if we find any violation of our
              policy.
            </li>
            <li>
              If we suspect a scam or fraud, we will not entertain your orders
              nor proceed with them.
            </li>
            <li>We have the right to take legal action when necessary.</li>
          </ul>

          <h3>Age Limitation</h3>
          <p>
            You must be above 18 years old to use our website or to place an
            order. If you are under 18, make sure to use it under the
            supervision of your parents or guardian.
          </p>

          <h3>Security Of your Data and Information</h3>
          <p>
            Your trust in us is valued and respected. Hence, we safeguard your
            trusted data and information throughout your shopping journey on our
            website. It is recommended to keep a record of your payments for
            your own safety and reference.
          </p>

          <h3>Need Help?</h3>
          <p>
            Our team is very responsive and cooperative. If you have any
            questions, you can contact us at{' '}
            <Link href='mailto:sales@brandolondon.com'>
              sales@brandolondon.com
            </Link>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TermsCondition
