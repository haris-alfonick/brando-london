import BreadCrumbs from "../components/breadcrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

  const PrivacyPolicy = () => {
    return (
      <>
        <Navbar />
        <BreadCrumbs page="Privacy Policy" />
        <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
          <div className='container mx-auto'>
            <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
              Privacy Policy
            </h2>

            <p>
              When shopping with Brando London, we strive to maintain trust and provide a
              hassle-free experience. As your only hand fashion buddy, it is our responsibility
              to offer a secure and reliable environment.
            </p>
            <p>
              We craft our policies clearly and precisely to ensure a friendly online shopping
              experience. As our customer, you must follow the instructions and cooperate with us
              to ensure a smooth purchase.
            </p>

            <strong>What Data We Collect</strong>
            <p>
              Remember, our team is restricted to using your data for other methods. We have
              experts who respect your privacy and our policies. So, all your personal and
              financial data is used to make the transaction reliable and confirm the order. To
              make all procedures hassle-free, we ask for:
            </p>
            <ul>
              <li>Your Name:</li>
              <li>Email Address:</li>
              <li>Phone Number:</li>
              <li>Shipping Address:</li>
              <li>Payment Details:</li>
            </ul>

            <strong>How Do We Use Your Information?</strong>
            <p>
              We use this information to further process your order to ship to the accurate
              address. If any issues arise, we will contact you immediately using your phone
              number. Or your number will be helpful to the dispatch department in determining
              your exact location.
            </p>
            <p>
              The email address is used for order confirmation and to notify you of all necessary
              updates, such as your order tracking number, whether the order is in dispatch, and
              whether the order is confirmed successfully.
            </p>
            <p>
              Also, our team is prohibited from forwarding or storing your data under any
              condition. But it can be used in legal conditions to defend our brand against any
              defamation.
            </p>

            <strong>Cookies Policies</strong>
            <p>
              We use cookies to make your experience reliable and mesmerizing. Whenever you
              order from us again and again, you don’t have to type; we use cookies to recall your
              information and identify you. Moreover, all data is safe and secure at Brando
              London.
            </p>

            <strong>Who Has The Access</strong>
            <p>
              Your data is in safe hands. We do not sell or disclose our customers' personal
              information to third parties. We only ask for specific details that are necessary
              to place the order and for further processing. Except for our team and dispatchers,
              no one has access to your personal information.
            </p>

            <strong>Customer’s Right</strong>
            <p>
              As a Brando London customer, you have the right to enjoy breathable online shopping
              experience. We ensure every procedure is hassle-free, whether placing the order,
              returning or exchanging, or choosing a payment method. That’s why we follow the
              General Data Protection Regulation (GDPR/UK GDPR), which protects customer rights.
            </p>

            <strong>Contact Details</strong>
            <p>
              If you are struggling to understand any point or have any questions about the
              product or our policies, please feel free to contact us at +1012 3456 789.
            </p>
            <p>
              You can also email us at{' '}
              <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a> or{' '}
              <a href="mailto:support@brandolondon.com">support@brandolondon.com</a>
            </p>
            <p>
              We love to hear from you and wish you a happy shopping at Brando London!
            </p>
          </div>
        </section>
      <Footer />
      </>
    );
  }

  export default PrivacyPolicy;
  