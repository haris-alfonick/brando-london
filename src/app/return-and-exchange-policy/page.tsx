import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const ReturnAndExchangePolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Return & Exchange Policy
          </h2>

          <strong>Hassle-free Return Policy within 14 Days</strong>
          <p>
            If you want to return or exchange the product, you must pursue the following
            requirements to make your request eligible for further processing:
          </p>
          <ul>
            <li>Ensure the condition is good, as you received.</li>
            <li>There is no damage, and it must be unused.</li>
            <li>All tags must be attached to their original places.</li>
            <li>
              You have to submit your request within the mentioned timeframe. Otherwise, we
              will not be responsible for entertaining any return or exchange request.
            </li>
          </ul>

          <strong>Terms and Conditions for Return and Exchange</strong>
          <p>
            We strive to make every procedure easy and reliable for our customers. So, follow
            the steps mentioned below to cooperate with us for a smooth and hassle-free return
            and exchange process:
          </p>
          <ul>
            <li>Any customized product is not eligible for return or exchange.</li>
            <li>
              The customer is responsible for the return shipping cost until damage occurs on
              our part.
            </li>
            <li>
              The Return Authorized Number will be provided by our team, which must be attached
              to your product for smooth processing.
            </li>
            <li>
              If the product doesn’t have the RMA, the request will be rejected for further
              processing.
            </li>
            <li>
              Your request must be submitted within 14 days; otherwise, we will not be
              responsible for any hassle.
            </li>
            <li>
              After receiving the product, our team will inspect its condition and the
              must-have requirements to determine whether the request is good to go or not.
            </li>
            <li>
              You can submit the return and exchange request to{' '}
              <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a> with a reason.
            </li>
            <li>
              Refunds will be processed after the inspection using a reliable transaction
              method. It takes 6–7 business days for a hassle-free experience.
            </li>
            <li>In exchange, customers will be responsible for the shipping cost.</li>
          </ul>

          <strong>Conditions That Are Considered Unacceptable for Return or Exchange</strong>
          <ul>
            <li>The accidental order placement was processed for shipping.</li>
            <li>Tailored and customized products.</li>
            <li>
              If the product is used, damaged on the customer's side, doesn’t have tags, or
              lacks any of the terms and conditions mentioned above, your request will be
              rejected.
            </li>
            <li>Request made after 14 days.</li>
          </ul>

          <strong>What If The Product is Misplaced or Not Received?</strong>
          <p>
            If you haven’t received your product, contact our customer support team or email us
            at{' '}
            <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a>. We will
            investigate the courier shipping and take actions that are necessary.
          </p>

          <strong>Restocking Charges</strong>
          <p>
            Brando London is not responsible for paying any restocking fee. Customers have to
            pay the taxes, duties and other charges.
          </p>

          <strong>Contact Us</strong>
          <p>
            If you have any queries and are still stuck on some points of our Return and
            Exchange Policy, you can call us at +1012 3456 789.
          </p>
          <p>
            Also, you can email us at{' '}
            <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a>.
          </p>
          <p>
            We love to hear from our customers, and providing an enjoyable online shopping
            experience with us will be our good luck. Happy Shopping!
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ReturnAndExchangePolicy;
