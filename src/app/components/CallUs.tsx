import Link from "next/link";
import Image from "next/image";

const CallUs = () => {
    return (
        <section className="md:py-20 bg-[#282828] px-5">
            <div className="container mx-auto">
                <div className="animateCircle after:animate-spin bg-no-repeat relative grid grid-cols-12 items-center justify-items-end gap-5">
                    <div className="col-span-6 flex flex-col space-y-4 [&>h3]:text-4xl [&>h3]:font-semibold  [&>h3]:text-white [&>h3]:uppercase [&>strong]:block [&>strong]:text-white [&>strong]:text-3xl [&>strong]:font-semibold
            [&>span]:text-lg [&>span]:text-white [&>span]:block">
                        <Image
                        src="/images/follow-icon.png"
                        alt="Follow Icon"
                        width={52}
                        height={100}
                        />
                        <h3>FOLLOW US ON INSTAGRAM</h3>
                        <strong>@brandolondon</strong>
                        <span className="lg:w-[85%] pt-1.5">Contemporary wardrobe staples and authentic style for the modern man and women. Follow us for the latest trends.</span>
                        <span>Tag us and get featured <Link href="">@brandolondon</Link></span>
                        <span><Link href="">instagram.com/brandolondon</Link></span>
                    </div>

                    <div className="col-span-6">
                        <Image
                            src="/images/call-image.webp"
                            alt="Image"
                            width={500}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CallUs;