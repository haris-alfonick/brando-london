import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Privacy Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Refund Policy
          </h1>

          <p>
            Our customers&apos; happiness is important to us. That&apos;s why we
            strive to make everything easy, reliable, and hassle-free. Your
            satisfaction is our priority, and our on-point policies make that
            clear.
          </p>

          <h3>14-Day Easy Refund Policy</h3>
          <p>
            Brando London offers a reliable 14-day refund policy. It takes up to
            6 business days to inspect your request for further processing and
            determine whether the product is eligible for a refund.
          </p>

          <h3>Eligibility &amp; Refund Conditions</h3>
          <p>
            The following steps must be fulfilled to make your refund request
            valid:
          </p>
          <ul>
            <li>
              Refund requests must be submitted within 14 days. Requests made
              after this period will not be entertained.
            </li>
            <li>
              The item must be unused, unworn, unwashed, have all tags attached,
              and be in its original packaging as received.
            </li>
            <li>Defective or damaged products are eligible for a refund.</li>
            <li>
              Made-to-measure, tailored, and customized products are
              non-refundable.
            </li>
          </ul>

          <h3>How to Request a Refund?</h3>
          <p>
            Email us at <Link href="mailto:sales@brandolondon.com">
              sales@brandolondon.com
            </Link> with the
            following details:
          </p>
          <ul>
            <li>Your name, order number, order date, and delivery date</li>
            <li>
              The reason for the return, along with clear photos or videos
              showing the issue or damage
            </li>
          </ul>

          <h3>Refund Processing &amp; Method</h3>
          <ul>
            <li>
              Refund requests are processed after inspection, confirmation, and
              approval.
            </li>
            <li>The inspection process may take up to 6 business days.</li>
            <li>
              Approved refunds will be issued to the original payment method
              used at checkout.
            </li>
            <li>
              The total refund timeline may vary depending on your payment
              provider.
            </li>
          </ul>

          <h3>Return Authorization</h3>
          <p>
            A Return Authorization Number (RMA) will be provided by our team and
            must be clearly attached to your package. Requests submitted without
            a valid RMA will not be considered.
          </p>

          <h3>Return Shipping and Delivery Charges</h3>
          <p>
            Return shipping costs are the customer&apos;s responsibility.
            Original shipping charges are non-refundable unless the product is
            defective, damaged, or incorrectly shipped by Brando London.
          </p>
          <p>
            In such cases, the full shipping cost will be refunded along with
            the product price.
          </p>

          <h3>Non-Refundable Situations</h3>
          <p>Refund requests will be rejected if:</p>
          <ul>
            <li>
              The product is used, damaged, missing tags, or not in original
              condition.
            </li>
            <li>The refund request is submitted after 14 days.</li>
            <li>The product fails inspection.</li>
          </ul>

          <p>
            <strong>If rejected:</strong>
          </p>
          <ul>
            <li>
              The product may be returned to the customer at their own shipping
              expense.
            </li>
            <li>
              The customer will be notified via email with the reason for
              rejection.
            </li>
          </ul>

          <h3>Partial Refund</h3>
          <p>
            Partial refunds may be applied based on the product&apos;s condition
            and the timing of the request. Please ensure all requirements are
            met to receive a full refund.
          </p>

          <h3>Hidden Charges</h3>
          <p>
            There are no hidden charges. All costs related to refunds, returns,
            or exchanges are clearly outlined in this policy.
          </p>

          <h3>For Further Assistance</h3>
          <p>
            Our customer support team is always here to assist you. Feel free to
            reach out with any questions regarding our products or policies.
          </p>
          <p>
            <span className='block'><b>Phone:</b>{' '} <Link href="tel:447796079986">+44 7796 079986</Link></span>
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

export default RefundPolicy
