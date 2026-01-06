import Link from "next/link";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="md:py-16 px-5 py-10">
      <div className="container mx-auto lg:max-w-[1200px] [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&>h2]:pb-5">
        <h2>Need Help <span className="md:block inline">Contact Us Anytime</span></h2>
        <div className="grid grid-cols-12 md:justify-items-start md:gap-x-5 max-md:gap-y-6">
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
            {/* <Image
                  src="/images/address.webp"
                  alt="image"
                  width={1000}
                  height={100}
                  className="rounded-lg"
                  /> */}
              <div className="xl:w-[550px] lg:w-[450px] h-[260px] w-full">
                <iframe className="rounded-lg overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.346371884564!2d-0.44897652285447337!3d51.39669007178825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767437da720533%3A0xe1cd13a15fd91242!2sLindsay%20Court!5e0!3m2!1sen!2s!4v1767709510894!5m2!1sen!2s" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <ul className=' mt-5 [&_li]:mb-3 [&_li]:bg-no-repeat [&_li]:bg-[top_left] [&>li]:w-fit [&>li]:pl-8 [&_li]:bg-[length:20px_20px] [&>li>a]:md:text-sm [&>li>a]:text-[15px] [&_li:nth-child(1)]:2xl-pr-[80px] [&>li>a]:text-[#333333] [&>li>a]:block'>
                <li className="bg-[url('/images/bxs_phone-call.png')] bg-[length:25px_25px]">
                  <Link href='tel:447796079986'>+44 7796 079986</Link>
                </li>
                <li className="bg-[url('/images/ic_sharp-email.png')]">
                  <Link href='mailto:sales@brandolondon.com'>sales@brandolondon.com</Link>
                </li>
                <li className="bg-[url('/images/carbon_location-filled.png')] bg-[length:20px_3px]">
                  <Link href='#'>
                     14 Lindsay Court, Shepperton, TW17 8AF
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
