import BreadCrumbs from '../components/breadcrumbs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const OrderCancellation = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbs page='Shipping Policy' />
      <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
            Order Termination Policy
          </h2>

          <p>
            For us, our customers' satisfaction is our top priority. Therefore, we have
            presented our easy termination policy for orders if you change your mind. This
            will help you build trust and make your experience with us more helpful.
          </p>

          <strong>Easy Termination Process</strong>
          <p>
            If you have changed your mind to cancel the order after placing it, you can
            contact our customer service team at{' '}
            <a href="mailto:support@brandolondon.com">support@brandolondon.com</a> within 24
            hours.
          </p>

          <strong>Guidance For An Easy Cancellation</strong>
          <ul>
            <li>If you request a cancellation within 24 hours, you will get a full refund.</li>
            <li>If you request after 24 hours, a few % will be deducted.</li>
            <li>Once your order is dispatched, no cancellations will be accepted.</li>
            <li>
              There is no return or exchange policy, nor any cancellations for custom-size or
              sale items. They require extra craftsmanship and changes.
            </li>
          </ul>

          <strong>Time Frame For Shipping</strong>
          <p>
            We ensure the delivery of high-quality products on time, with care and safety in
            mind. Therefore, it takes 2-4 business days to dispatch the order after the
            clearance. Our standard shipping days are 8-10 business days and 4-7 business days
            for fast shipping after dispatch.
          </p>

          <strong>Requirements for an Order Return</strong>
          <p>
            Once you receive the order, make sure to record it while you open your package. If
            you find any issues with it, you can request a return with your full details and
            supporting documentation. Also, you have to ensure that the product is unused, is
            in good condition, and has its original packaging. We will review your request,
            look into it, and proceed if we find it valid. Otherwise, we will not be able to
            help you with it.
          </p>
          <strong>Connect With Us</strong>
          <p>
            We have tried our best to answer all your questions here. For further information,
            you can contact our team at{' '}
            <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>.
          </p>
          <p>We will be happy to satisfy your needs and questions.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default OrderCancellation;
