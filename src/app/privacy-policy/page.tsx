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
          <h2 className='text-2xl font-semibold uppercase text-center sm:mb-8 mb-3'>Privacy Policy</h2>
          <p>
            At Brando London, your trust means everything to us. As a fashion brand committed to delivering exceptional quality and service, we also take our responsibility to protect your personal information seriously. This privacy policy outlines how we collect, use and safeguard your data whenever you interact with our website.
          </p>
          <strong>Our Commitment to Privacy</strong>
          <p>
            Brando London is more than just a fashion label, it’s a brand built on trust, craftsmanship and transparency. We understand that protecting your personal details is a top priority, which is why our privacy policy is designed to keep you informed and secure every step of the way.
          </p>
          <strong>What This Policy Covers</strong>
          <p>
            This privacy policy explains the type of data we collect when you visit our website, how that information is used and who may access it. It also highlights the steps we take to ensure your personal information is treated with confidentiality and care.
          </p>
          <strong>Information We Collect</strong>
          <p>
           If you place an order, we require specific personal information, including your full name, email address, billing and shipping address, along with contact number. However, when you browse on our website, we automatically collect general information such as:
          </p>
          <ul>
            <li>Your IP address.
            </li>
            <li>Browser type.
            </li>
            <li>Time zone.
            </li>
            <li>Cookies installed on your device. 
            </li>
          </ul>
          <p>
            Additionally, as you navigate through the site, we gather data about the specific pages you view, the products you click on and the searches you make. This data helps us better understand your preferences and deliver a personalized shopping experience.
            </p>
          <strong>
            How We Use Your Information
          </strong>
          <p>
            We collect your personal details to provide you with a better service. This includes processing your order, confirming the transaction, sending shipping updates and providing you with tracking information. It also enables us to contact you regarding your order or to inform you of new arrivals, seasonal offers or exclusive details. Note that you can always block unwanted notifications.
            </p>
          <strong>
            How Your Information Is Protected
          </strong>
          <p>
            At Brando London, we use secure services and advanced encryption protocols to protect your data. All financial transactions are processed through a secure, encrypted payment gateway. We do not store your credit card details after the order is placed, and we never share or sell your private information to third-party companies for marketing or advertising purposes.
          </p>
          <strong>
            Who Has Access To Your Data
          </strong>
          <p>
            Only authorized members of our team and trusted courier partners have access to your personal information, and only for order-related purposes. Everyone involved in handling your information is bound by confidentiality and professional standards to ensure your privacy is never compromised.
          </p>
          <strong>
            Your Privacy, Our Priority
          </strong>
          <p>
            We make it a point to delete your personal data shortly after your order has been successfully processed and delivered. Our systems are designed with your privacy in mind. Clean, secure and compliant with global privacy norms. Your information remains with us only as long as it&apos;s needed to provide you with a smooth and safe shopping experience
          </p>
          <strong>
            Contact Us for More Information
          </strong>
          <p>
            If you have questions about how we manage your information or if you need help with anything related to our privacy practices, feel free to reach out to us. Our support team is available around the clock to ensure you get the help and answers you need. Email us anytime at <a href="mailto:">support@brandolondon.com</a>.
          </p>

        </div>
      </section>
        <Footer />
      </>
    );
  }

  export default PrivacyPolicy;
  