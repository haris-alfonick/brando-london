import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>Shipping & Delivery</h2>
          <strong>Countries Eligible for Free Shipping</strong>
          <p>
            Brando London, we take pride in offering free shipping worldwide. Whether you&apos;re ordering from across the street or the globe, you can enjoy our premium leather jackets without worrying about extra shipping costs. Our mission is to make luxury fashion accessible with no borders and no added fees.
          </p>
          <strong>Estimated Delivery Time</strong>
          <p>
            Once you have placed your order, please allow 8-12 business days for us to craft and deliver your item. Since each Brando London piece is crafted with exceptional care and precision, we operate on a made-to-order basis. For those who need their jackets sooner, we also offer expedited shipping at an additional charge. With this option, you can expect delivery within 6 to 7 business days. Please note:
            <ul>
              <li>Orders placed after 1 pm (local time) are processed the following business day.</li>
              <li>Custom-made orders may require 10-13 business days due to detailed craftsmanship and extra verification.</li>
              <li>Business days refer to Monday to Friday, excluding public holidays.</li>
            </ul>
          </p>
          <strong>Tracking Your Shipment</strong>
          <p>
            As soon as your parcel is dispatched, we&apos;ll send you a tracking ID via email. This allows you to monitor your shipment at every step. Please ensure that someone is available to receive the parcel at the delivery address. If your courier company attempts delivery while you are unavailable, or if the package is placed on hold. It is your responsibility to contact that courier directly using the tracking details provided.
          </p>
          <p>
            Please note that in the event of multiple failed delivery attempts, the package may be returned to the sender or discarded. And unfortunately, Brando London will not be liable for reshipment or replacement in such cases.
          </p>

          <strong>Our Courier Partners</strong>
          <p>
            To maintain our standard of reliability and efficiency, we only work with reputable courier services, including DHL, FedEx and UPS. These trusted partners help us ensure that your order is delivered safely, promptly and in perfect condition.
          </p>

          <strong>Shipping Policy Guidelines</strong>
          <p>To ensure a smooth and professional delivery process, please review the following key points before placing your order:</p>
          <ol>
            <li><b>Verify your details:</b>  Ensure your full name, delivery address and contact information are accurate.
            </li>
            <li><b>Signature requirement:</b> The delivery time informed above does not include order
              manufacturing time. This could take 5-7 days normally.
            </li>
            <li><b>No PO boxes:</b> We do not ship to APO, FPO or PO box addresses.
            </li>
            <li><b>Custom orders:</b> Orders containing both custom and standard items may ship separately. Custom orders require additional processing time.
            </li>
            <li><b>No post-dispatch changes:</b> Once an order has been dispatched, changes to the delivery address are not permitted.
            </li>
            <li><b>Remote area charges:</b> For deliveries to remote or outlying regions, an additional fee of $25 may apply.
            </li>
          </ol>
          <strong>Possible Reasons for Delivery Delays</strong>
          <p>While we aim to deliver every order within the estimated timeframe, the following factors may occasionally lead to delays:</p>
          <ul>
            <li>Public holidays or natural disasters disrupting transit routes.</li>
            <li>Incorrect or incomplete shipping information.</li>
            <li>Extended quality control checks to meet our high standards</li>
            <li>Courier company operational issues.</li>
            <li>Delays at customs or international clearance checkpoints.</li>
            <li>Last-minute order changes that impact processing or shipping.</li>
          </ul>
          <strong>For Further Assistance</strong>
          <p>If you have questions regarding shipping timelines, courier tracking or delivery charges, our customer support team is available 24/7 to assist you. Please email at <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>.  We&apos;re here to ensure your shopping experience is as exceptional as the clothes we deliver.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ShippingPolicy;
