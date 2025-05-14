import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="md:py-20 px-5 py-10">
      <div className="container mx-auto lg:max-w-[1200px]">
        <div className="grid grid-cols-12 gap-y-6">
          <div className="md:col-span-5 col-span-12 [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&>h2]:pb-5">
            <h2>Create Your Custom <span className="md:block inline">Leather Jackets</span></h2>
            <ul className='md:col-span-5 col-span-12 mb-5 [&_li]:lg:col-span-4 [&_li]:md:col-span-4 [&_li]:col-span-12 [&>h3]:font-semibold [&>h3]:text-[#333333] [&>h3]:xl:text-3xl [&>h3]:text-2xl [&>h3]:pb-7 [&_li]:lg-mb-5 [&_li]:mb-4 [&_li]:bg-no-repeat [&_li]:bg-[top_left] [&>li]:pl-8 [&_li]:bg-[length:20px_20px] [&>li>a]:md:text-sm [&>li>a]:text-[15px] [&_li:nth-child(1)]:2xl-pr-[80px] [&>li>a]:text-[#333333] [&>li>a]:block [&>h3>span]:md:block [&>h3>span]:inline [&>h3]:leading-9 [&>h3]:max-sm:leading-8'>
                <li className="bg-[url('/images/bxs_phone-call.png')] bg-[length:25px_25px]">
                  <Link href='#'>+1012 3456 789</Link>
                </li>
                <li className="bg-[url('/images/ic_sharp-email.png')]">
                  <Link href='#'>demo@gmail.com</Link>
                </li>
                <li className="bg-[url('/images/carbon_location-filled.png')] bg-[length:20px_3px]">
                  <Link href='#'>
                    132 Dartmouth Street Boston, <br /> Massachusetts 02156
                    United States
                  </Link>
                </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
