import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="md:py-20 px-5 py-10">
      <div className="container mx-auto lg:max-w-[1200px]">
        <div className="grid grid-cols-12 gap-y-6">
          <div className="md:col-span-5 col-span-12 [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold ">
            <h2>Create Your Custom <span className="md:block inline">Leather Jackets</span></h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
