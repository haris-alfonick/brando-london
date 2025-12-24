import Link from "next/link";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="md:py-20 px-5 py-10">
      <div className="container mx-auto lg:max-w-[1200px] [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&>h2]:pb-5">
        <h2>Need Help <span className="md:block inline">Contact Us Anytime</span></h2>
        <div className="grid grid-cols-12 md:justify-items-center md:gap-x-5 max-md:gap-y-6">
          <div className="md:col-span-6 col-span-12 max-md:order-2">
             {/* <ul className="grid grid-cols-4 gap-x-2 [&>li>img]:rounded-lg [&>li>strong>span]:block [&>li>strong]:block [&>li>strong]:mt-2.5 [&>li>strong]:font-medium [&>li>strong]:leading-5">
              <li>
                <Image
                src="/images/custom-motorcycle.webp"
                alt="image"
                width={125}
                height={100}
                />
                <strong>Custom Motorcycle<span> Jacket</span></strong>
              </li>
              <li>
                <Image
                src="/images/custom-coat.webp"
                alt="image"
                width={125}
                height={100}
                />
                <strong>Custom Leather<span> Coat</span></strong>
              </li>
              <li>
                <Image
                src="/images/custom-vest.webp"
                alt="image"
                width={125}
                height={100}
                />
                <strong>Custom Leather<span> Vest</span></strong>
              </li>
               <li>
                <Image
                src="/images/custom-jacket-other.webp"
                alt="image"
                width={125}
                height={100}
                />
                <strong>Others</strong>
              </li>
            </ul> */}        
            <Image
                  src="/images/address.webp"
                  alt="image"
                  width={1000}
                  height={100}
                  className="rounded-lg"
                  />
                   <ul className=' mt-5 [&_li]:mb-3 [&_li]:bg-no-repeat [&_li]:bg-[top_left] [&>li]:w-fit [&>li]:pl-8 [&_li]:bg-[length:20px_20px] [&>li>a]:md:text-sm [&>li>a]:text-[15px] [&_li:nth-child(1)]:2xl-pr-[80px] [&>li>a]:text-[#333333] [&>li>a]:block'>
                <li className="bg-[url('/images/bxs_phone-call.png')] bg-[length:25px_25px]">
                  <Link href='tel:+10123456789'>+1012 3456 789</Link>
                </li>
                <li className="bg-[url('/images/ic_sharp-email.png')]">
                  <Link href='mailto:sales@brandolondon.com'>sales@brandolondon.com</Link>
                </li>
                <li className="bg-[url('/images/carbon_location-filled.png')] bg-[length:20px_3px]">
                  <Link href='#'>
                     	7 Station Approach Street Worcester <br /> Park, Surrey UK
                  </Link>
                </li>
            </ul>
          </div>
          <div className="md:col-span-6 col-span-12 md:-mt-24 mr-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
