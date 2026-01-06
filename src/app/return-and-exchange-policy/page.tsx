import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const ReturnAndExchangePolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
      <div className="container mx-auto px-4 sm:px-0 space-y-6">

        <h1 className="text-3xl font-semibold uppercase text-center sm:mb-8 mb-3">
          Return &amp; Exchange Policy
        </h1>

        <div className="space-y-4">

          <h3>How Long You Have to Return (14 Days)</h3>
          <p>
            If you want to return or exchange the product, you must pursue the following
            requirements to make your request eligible for further processing:
          </p>
          <ul>
            <li>Ensure the condition is good, as you received.</li>
            <li>There is no damage, and it must be unused.</li>
            <li>All tags must be attached to their original places.</li>
            <li>
              You have to submit your request within the mentioned timeframe.
              Otherwise, we will not be responsible for entertaining any return or
              exchange request.
            </li>
          </ul>

          <h3>Terms and Conditions for Return and Exchange</h3>
          <p>
            We strive to make every procedure easy and reliable for our customers.
            Please follow the steps below for a smooth and hassle-free return and
            exchange process:
          </p>
          <ul>
            <li>Any customized product is not eligible for return or exchange.</li>
            <li>
              The customer is responsible for the return shipping cost unless the
              damage occurs on our part.
            </li>
            <li>
              A Return Authorization Number (RMA) will be provided by our team and must
              be attached to the product.
            </li>
            <li>
              If the product does not have a valid RMA, the request will be rejected.
            </li>
            <li>Requests must be submitted within 14 days of delivery.</li>
            <li>
              After receiving the product, our inspection team will verify its
              condition and eligibility.
            </li>
            <li>
              Requests must be submitted via email at{' '}
              <Link href="mailto:sales@brandolondon.com">
                sales@brandolondon.com
              </Link>{' '}
              with a valid reason.
            </li>
            <li>
              Refunds will be processed after inspection using a reliable transaction
              method and may take up to 6 business days.
            </li>
            <li>For exchanges, customers are responsible for the shipping cost.</li>
          </ul>

          <h3>What Cannot Be Returned or Exchanged</h3>
          <ul>
            <li>Accidental orders that have already been processed for shipping.</li>
            <li>Tailored or customized products.</li>
            <li>
              Products that are used, damaged on the customer&apos;s side, missing
              tags, or do not meet the stated conditions.
            </li>
            <li>Requests submitted after 14 days.</li>
          </ul>

          <h3>Delivery Issues or Missing Orders</h3>
          <p>
            If you have not received your product, please contact our customer support
            team or email us at{' '}
            <Link href="mailto:sales@brandolondon.com">
              sales@brandolondon.com
            </Link>.
            We will investigate the courier shipment and take the necessary action.
          </p>

          <h3>Restocking Charges</h3>
          <p>We do not charge any restocking fees on eligible returns.</p>

          <h3>Return Method</h3>
          <p>
            All returns and exchanges at Brando London are accepted by mail only.
            Customers must submit a return or exchange request to our support team
            before sending the product back.
          </p>

          <h3>Return Address</h3>
          <p>
            Once your return or exchange request is approved, our team will inform you
            via email and provide the return shipping address along with instructions.
            Returns sent without approval or a valid RMA will not be accepted.
          </p>

          <h3>Refund Method</h3>
          <p>
            All approved refunds will be issued to the original payment method used at
            checkout.
          </p>

          <h3>Original Shipping Charges</h3>
          <p>
            Original shipping charges are non-refundable, except in cases where the
            product received is incorrect or damaged due to our error.
          </p>

          <h3>Damaged or Incorrect Items (Our Responsibility)</h3>
          <p>If you receive:</p>
          <ul>
            <li>A damaged product, or</li>
            <li>An incorrect item sent by us</li>
          </ul>
          <p>
            Please contact our customer support team within 48 hours of delivery with
            clear images of the issue.
          </p>

          <p><strong>What will we do in such cases?</strong></p>
          <ul>
            <li>We will cover the return shipping cost.</li>
            <li>
              We will offer a replacement or a full refund, depending on your
              preference and product availability.
            </li>
          </ul>

          <h3>Exchange Availability</h3>
          <p>
            All exchanges are subject to stock availability. If the requested exchange
            item is unavailable, customers may choose:
          </p>
          <ul>
            <li>A refund, or</li>
            <li>An alternative product of equal value.</li>
          </ul>

          <h3>Rejected Returns After Inspection</h3>
          <p>
            If a returned item fails inspection due to usage, damage, missing tags, or
            not meeting our return conditions, the request will be rejected.
          </p>
          <p>
            In such cases, the product may be returned to the customer at the
            customer&apos;s shipping expense.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions regarding our Return and Exchange Policy, please
            contact us at:
          </p>
          <p>
            <span className='block'><b>Phone:</b>{' '} <Link href="tel:447796079986">+44 7796 079986</Link></span>
            <b>Email:</b>{' '}
            <Link href="mailto:sales@brandolondon.com">
              sales@brandolondon.com
            </Link>
          </p>

          <p>
            We value our customers and aim to provide an enjoyable online shopping
            experience. Happy Shopping!
          </p>

        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}

export default ReturnAndExchangePolicy;
