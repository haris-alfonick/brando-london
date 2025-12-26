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
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Shipping Policy
          </h2>

          <p>
            Brando London feels honored and proud to facilitate international shipping. Our
            premium leather jacket collection is for everyone worldwide. Hence, we focus on
            delivering top-tier quality products to everyone within reach, with no shipping
            charges.
          </p>

          <strong>Carrier Partners</strong>
          <p>
            We aim to provide top-quality standard products to all and thus rely on strong,
            reliable shipping partners to ensure secure, on-time delivery to your doorstep.
            Our trusted partners are:
          </p>
          <ul>
            <li>DHL</li>
            <li>FedEx</li>
            <li>UPS</li>
          </ul>

          <strong>Order Shipping Duration</strong>
          <p>
            For us, your trust matters most; therefore, we ensure you receive the best
            service. Consequently, we take time to prepare your order and put in extra effort
            to ensure the finest look. Once your order is confirmed after payment is cleared,
            it takes 2-4 business days to dispatch.
          </p>

          <strong>Shipping Rates and Methods</strong>
          <ul>
            <li>
              <b>Standard Shipping:</b> We provide free shipping on all orders to the USA, UK,
              Canada, Asia, and Europe.
            </li>
            <li>
              <b>Express Shipping:</b> We also offer fast shipping for an additional charge.
            </li>
          </ul>

          <strong>Shipping Options and Transportation Time</strong>
          <p>
            We offer different shipping options, and delivery times vary by country. For
            instance:
          </p>
          <ul>
            <li>
              <b>Standard Shipping:</b> Our standard shipping days are 8-10 business days
              after the order is dispatched.
            </li>
            <li>
              <b>Express Shipping:</b> Our express shipping days are 4-7 business days after
              dispatch.
            </li>
            <li>
              <b>Customized Orders:</b> Custom orders take 10-13 business days, as they
              require extra detailing and craftsmanship.
            </li>
          </ul>

          <strong>Shipment Monitoring</strong>
          <p>
            Once your order is dispatched, we generate a tracking ID and the order details
            and share them via email. This helps you to keep an eye on your order. Other than
            that, ensure someone’s presence at your doorstep to receive the order. Once it
            is returned, it will be up to you to call the courier companies through your
            order details.
          </p>
          <p>
            Also, keep in mind that multiple attempts with no response will result in the
            parcel being returned to the sender, and Brando Land will no longer be responsible
            for resending it.
          </p>

          <strong>Key Factors</strong>
          <ul>
            <li>
              Our business working days include Monday to Friday, excluding public holidays.
            </li>
            <li>
              It is your responsibility to provide us with accurate details of yourself to
              avoid issues.
            </li>
            <li>
              We do not charge for shipping; however, customs charges and taxes vary by
              country. Make sure that you check your country’s regulations before you place
              an order.
            </li>
          </ul>

          <strong>Factors That May Cause A Delay</strong>
          <p>
            We try our best to deliver to you on time without any hassle or hurdles; however,
            certain conditions may lead to a delay:
          </p>
          <ul>
            <li>Public holidays or bad weather conditions</li>
            <li>Natural disasters that may disrupt the routes</li>
            <li>Incorrect or incomplete details</li>
            <li>Customs issues at checkpoints or clearance</li>
            <li>Courier company operational issues</li>
          </ul>

          <strong>Damaged or Lost Parcels</strong>
          <p>
            When you receive your parcel, make sure to record a video while opening it. If
            there is any issue with the product, either damaged or lost, you can report it to
            us with the proof.
          </p>

          <strong>Important Guidelines For Consideration</strong>
          <ul>
            <li>Make sure to provide us with complete and correct details.</li>
            <li>
              There won’t be any changes made to the address once your order is dispatched.
            </li>
            <li>
              We do not ship to any APO, FPO, or PO boxes. You will receive your order at your
              doorstep.
            </li>
            <li>
              Customized and standard orders will be shipped on different days due to the
              extra specifications in the custom order.
            </li>
          </ul>

          <strong>Need Assistance?</strong>
          <p>
            We are always delighted to help you with your queries. If you encounter any
            issues with our shipping policy, please contact us at{' '}
            <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ShippingPolicy;
