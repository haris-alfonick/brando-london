import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const OrderCancellation = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:py-1 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-base [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-0 [&_strong]:block [&_a]:text-[#d13636] hover:[&_a]:text-[#333] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium [&_h3]:font-medium [&_h3]:mt-4 [&_h3]:mb-1 [&_h3]:text-xl [&_ul]:my-3 [&_ol]:my-3'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Order Cancellation Policy
          </h1>

          <h3>Cancellation Window</h3>
           <p>
            The customer can cancel an order within 24 hours. A full refund is issued if the cancellation is requested within the first 24 hours. After that, 20% of the refund is deducted.
          </p>
          <p>If an order is processed or shipped it cannot be cancelled</p>

          <h3>Cancelling an Order</h3>
           <p>
            To cancel an order, customers must contact us <b>immediately</b> by emailing <Link href="mailto:support@brandolondon.com">sales@brandolondon.com</Link> or through our <Link href="/contact">Contact Us</Link>
          </p>
          
          <h3>Approved Refunds</h3>
          <p>
            When a cancellation is approved prior to shipping, your refund will be issued to the same payment method used at checkout. Most refunds are processed within 6 days, although your bank or provider may take slightly longer.
          </p>

          <h3>Orders that cannot be cancelled</h3>
          <p>
           After an order has been dispatched , no cancellations will be accepted .
          </p>
          <p><b>Custom-sized</b> cannot be returned or exchanged as they require extra craftsmanship and modification.</p>

          <h3>Right to Refuse Cancellation</h3>
          <p>
           We reserve the right not to accept any cancellation requests <b>that are submitted outside of the cancellation window</b>, or do not meet all the requirements outlined above.
          </p>
        
        </div>
      </section>
      <Footer />
    </>
  )
}

export default OrderCancellation;
