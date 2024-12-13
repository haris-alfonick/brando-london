import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn UI Textarea
import { Button } from "@/components/ui/button"; // Shadcn UI Button

const Contact = () => {
  return (
    <section className="md:py-20 px-5 py-10">
      <div className="container mx-auto lg:max-w-[1200px]">
        <div className="grid grid-cols-12 gap-y-6">
          <div className="md:col-span-5 col-span-12 [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold ">
            <h2>Create Your Custom <span className="md:block inline">Leather Jackets</span></h2>
          </div>
          <div className="md:col-span-5 col-span-12 lg:[&_strong]:text-3xl md:[&_strong]:text-2xl [&_strong]:text-xl">
            <strong className="text-2xl font-semibold mb-6">Send Us a Message</strong>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&>label]:text-sm [&_label]:block [&_label]:font-medium [&_label]:mt-1.5 [&_label]:mb-2.5 [&>input]:w-full [&>textarea]:w-full">
              {/* First Name */}
              <div>
                <label htmlFor="firstName">
                  First Name
                </label>
                <Input id="firstName" placeholder="John" />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Doe" />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="JohnDoe@gmail.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 333 444 5555"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter Message"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto font-semibold pb-3 px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
