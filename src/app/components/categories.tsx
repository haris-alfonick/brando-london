import Link from "next/link";
import Image from "next/image";

const CategoryList = async () => {
  
  return (
    <section className="followUp bg-[#333333] px-5 md:pb-20 md:py-16 py-10 pb-14">
      <div className="container mx-auto">
        <div className="[&>h2]:text-center [&>h2]:uppercase [&>h2]:text-white lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&>h2]:font-semibold">
          <h2>Choose What You Like</h2>
          <div className="animateCircle relative z-[9999] after:animate-spin after:z-[-1] after:-top-20 after:left-0 after:right-0 after:m-auto grid grid-cols-12 md:pt-10 pt-7 gap-x-5 gap-y-5 md:gap-y-0 [&_strong]:block [&_strong]:bg-[#0D0D0D]/60 [&_strong]:text-white [&_strong]:py-3 [&_strong]:absolute [&_strong]:bottom-0 [&_strong]:w-full [&_strong]:left-0 [&_strong]:text-center [&_strong]:md:text-lg [&_strong]:font-medium">
            <Link href="/mens-jackets" className="relative item1 md:col-span-3 col-span-6">
              <Image
                src="/images/mens-jackets.jpg"
                alt="Image"
                width={500}
                height={100}
                className="w-full h-auto" />
              <strong>Men&apos;s Jackets</strong>
            </Link>

            <Link href="/womens-jackets" className="relative item2 md:col-span-3 col-span-6">
              <Image
                src="/images/womens-jackets.jpg"
                alt="Image"
                width={500}
                height={100}
                className="w-full h-auto" />
              <strong>Women&apos;s Jackets</strong>
            </Link>

            <Link href="/mens-coats" className="relative item3 md:col-span-3 col-span-6">
              <Image
                src="/images/mens-coats.jpg"
                alt="Image"
                width={500}
                height={100}
                className="w-full h-auto" />
              <strong>Men&apos;s Coats</strong>
            </Link>

            <Link href="/womens-coats" className="relative item4 md:col-span-3 col-span-6">
              <Image
                src="/images/womens-coats.jpg"
                alt="Image"
                width={500}
                height={100}
                className="w-full h-auto" />
              <strong>Women&apos;s Coats</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CategoryList;