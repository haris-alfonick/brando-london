import BreadCrumbs from "../components/breadcrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

  const RefundPolicy = () => {
    return (
      <>
        <Navbar />
        <BreadCrumbs page="Privacy Policy" />
        <section className='px-5 md:py-12 py-10 [&_p]:text-base [&_p]:pt-4 [&_ul_li]:text-[#888] [&_p]:text-[#888] [&_strong]:text-xl [&_strong]:font-medium [&_strong]:text-[#333] [&_strong]:mt-8 [&_strong]:block [&_p_a]:text-[#d13636] [&_li]:mt-1 [&_ul_li]:ml-4 [&_ol_li]:ml-5 [&_ol_li]:list-decimal [&_ul_li]:list-disc [&_b]:text-[#333] [&_li]:text-[#666] [&_b]:font-medium '>
          <div className='container mx-auto'>
            <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>
              Refund Policy
            </h2>

            <p>
              Our customers' happiness is important to us. And that's why we strive to make
              everything easy, reliable, and hassle-free. Your satisfaction is our priority,
              and our on-point policies make that clear.
            </p>

            <strong>14-Day Easy Refund Policy</strong>
            <p>
              Brando London offers a reliable 14-day refund policy. It takes 6 days to inspect
              your request for further processing. It also declares whether the product is
              eligible for the refund offer or not.
            </p>

            <strong>Refund Terms and Conditions</strong>
            <p>
              The following steps are a must to make your refund request valid:
            </p>
            <ul>
              <li>
                You have to submit the request within 14 days; after that, we will not entertain
                any refund.
              </li>
              <li>
                The item must be unworn, have all tags, be in good condition, and be in its
                original packaging as received.
              </li>
              <li>Defective and damaged products are eligible for a refund.</li>
              <li>
                Made-to-measure, tailored, and customized products are non-refundable.
              </li>
            </ul>

            <strong>Refund Method</strong>
            <ul>
              <li>
                You have 14 days to submit the request via email at{' '}
                <a href="mailto:support@brandolondon.com">support@brandolondon.com</a> or{' '}
                <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a>.
              </li>
              <li>
                The refund process may take 6 days to complete, including inspection,
                declaration, and confirmation.
              </li>
              <li>
                The refund will be issued using the original payment method to ensure a smooth
                and reliable transaction.
              </li>
            </ul>

            <strong>Conditions for Non-Refundable</strong>
            <ul>
              <li>
                Your refund will be rejected if the product is not original, damaged, missing
                tags, or in bad condition.
              </li>
              <li>
                If you submit the request more than 14 days late, it will be rejected.
              </li>
              <li>
                Return shipping cost is the responsibility of the customer, unless the return is
                not our fault.
              </li>
            </ul>

            <strong>Partial Refund</strong>
            <p>
              The deduction is applied based on the product's condition and when the request is
              submitted. Ensure to follow all requirements to enjoy a full refund.
            </p>

            <strong>Hidden Charges</strong>
            <p>
              There are no hidden charges. We already mentioned each step where you need to pay
              for a refund, return, or exchange under the policy.
            </p>

            <strong>How to Request a Refund?</strong>
            <p>
              Email us at{' '}
              <a href="mailto:support@brandolondon.com">support@brandolondon.com</a> or{' '}
              <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a> with the
              following details:
            </p>
            <p>
              Include your personal information, such as your name, order number, order date,
              delivery date, and the reasons for the return. Also, attach photos/videos of the
              product to ensure the damage and issues.
            </p>

            <strong>Return Authorization</strong>
            <p>
              We provide the Return Authorization Number, which must be attached to your
              package. Otherwise, your request will not be valid. Please follow the requirements
              properly for a hassle-free refund.
            </p>

            <strong>For Further Assistance</strong>
            <p>
              Our customer support team is always here to have your back. We love to hear from
              you. Feel free to ask any questions about the product or policies by calling us at
              +1012 3456 789.
            </p>
            <p>
              You can email us at{' '}
              <a href="mailto:support@brandolondon.com">support@brandolondon.com</a> or{' '}
              <a href="mailto:sales@brandolondon.com">sales@brandolondon.com</a> for further
              inquiries.
            </p>
          </div>
        </section>
      <Footer />
      </>
    );
  }

  export default RefundPolicy;
  