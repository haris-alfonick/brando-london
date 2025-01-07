import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>Shipping & Delivery Policy</h2>
          <p>
            Brando London accepts orders from all over the world, following the
            respective customs and duties of the country or state. We are
            providing free shipping service around the globe in order to
            maintain long-term relationship with our valued customers.
          </p>
          <p>
            Please note that we charge in US Dollars. The actual amount you pay
            will be identified by the exchange rate your card issuer applies to
            the transaction to change your currency into US Dollars.
          </p>

          <strong>Standard Shipping</strong>
          <p>
            Normally delivery will take 8-12 days excluding the manufacturing
            time to all the major destinations in any part of world. Transit
            time for the delivery could vary from destination to destination.
            However, it is clear that for standard shipping there are no
            shipping charges payable.
          </p>

          <strong>Time Definite Shipping</strong>
          <p>
            We do offer special service of Explicit Time Delivery whereby we
            reduce the delivery time 3-4 days excluding the manufacturing time.
            However, this facility will not be a free service. The time definite
            service is not guaranteed service and is available at some selected
            destinations.
          </p>

          <strong>Note:</strong>
          <ul>
            <li>
              The delivery time informed above does not include order
              manufacturing time. This could take 5-7 days normally.
            </li>
            <li>
              The stated shipping time is an estimation of the shipment
              required; uncertain circumstances like natural disasters or war
              would affect the transit time.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ShippingPolicy;
