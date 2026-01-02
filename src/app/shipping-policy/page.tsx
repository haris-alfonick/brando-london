import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Shipping Policy
          </h1>

          <p>
            Brando London feels honored and proud to facilitate international
            shipping. Our premium leather jacket collection is for everyone
            worldwide. Hence, we focus on delivering top-tier quality products
            to everyone within reach, with no shipping charges.
          </p>

          <h3>Carrier Partners</h3>
          <p>
            We aim to provide top-quality standard products to all and thus rely
            on strong, reliable shipping partners to ensure secure, on-time
            delivery to your doorstep. Our trusted partners are:
          </p>
          <ul>
            <li>DHL</li>
            <li>FedEx</li>
            <li>UPS</li>
          </ul>

          <h3>Order Processing and Shipping Duration</h3>
          <p>
            Once your order is confirmed and payment is cleared, it takes <b>2–4 business days</b> to dispatch. Customized orders
            may take longer due to extra detailing and craftsmanship.
          </p>

          <h3>Shipping Rates and Methods</h3>
          <ul>
            <li>
              <strong>Standard Shipping:</strong> Free shipping on all orders to
              the USA, UK, Canada, Asia, and Europe.
            </li>
            <li>
              <strong>Express Shipping:</strong> Available for an additional
              charge of $40.
            </li>
          </ul>

          <h3>Shipping Options and Transportation Time</h3>
          <ul>
            <li>
              <strong>Standard Shipping:</strong> 8–10 business days after
              dispatch.
            </li>
            <li>
              <strong>Express Shipping:</strong> 4–7 business days after
              dispatch.
            </li>
            <li>
              <strong>Customized Orders:</strong> 10–13 business days due to
              extra detailing and craftsmanship.
            </li>
          </ul>

          <h3>Shipment Monitoring</h3>
          <p>
            Once your order is dispatched, we generate a tracking ID and share
            the order details via email so you can monitor your shipment.
          </p>
          <p>
            Ensure someone is available to receive the order at the delivery
            address. If the parcel is returned due to unavailability, you will
            need to contact the courier directly using your order details.
          </p>
          <p>
            Multiple failed delivery attempts may result in the parcel being
            returned to the sender, and Brando London will not be responsible
            for resending it.
          </p>

          <h3>Key Factors</h3>
          <ul>
            <li>
              Business days are Monday to Friday, excluding public holidays.
            </li>
            <li>
              Customers are responsible for providing accurate and complete
              personal details.
            </li>
            <li>
              Shipping is free; however, customs duties and taxes vary by
              country and must be checked prior to placing an order.
            </li>
          </ul>

          <h3>Damaged or Lost Parcels</h3>
          <p>
            Please record a video while opening your parcel upon delivery. If
            the product is damaged or missing, report the issue to us along with
            the video proof.
          </p>

          <h3>Factors That May Cause a Delay</h3>
          <ul>
            <li>Public holidays or adverse weather conditions</li>
            <li>Natural disasters affecting delivery routes</li>
            <li>Incorrect or incomplete shipping details</li>
            <li>Customs clearance issues</li>
            <li>Courier company operational challenges</li>
          </ul>

          <h3>Customer Notification for Delays</h3>
          <p>
            If your shipment is delayed for any reason, we will notify you via
            email with an updated delivery timeframe.
          </p>

          <h3>Important Guidelines for Consideration</h3>
          <ul>
            <li>Ensure all shipping details are accurate and complete.</li>
            <li>
              No address changes are allowed once the order is dispatched.
            </li>
            <li>We do not ship to APO, FPO, or PO box addresses.</li>
            <li>
              Customized and standard orders may ship separately due to
              different processing requirements.
            </li>
          </ul>

          <h3>Need Assistance?</h3>
          <p>
            If you have any questions regarding our shipping policy, please
            contact us at{' '}
            <Link href='mailto:sales@brandolondon.com'>sales@brandolondon.com</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ShippingPolicy
