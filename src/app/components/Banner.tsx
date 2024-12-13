import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return(
    <div>
        <section>
          <Link href="/">
            <Image
            src="/images/jacket-banner.webp"
            alt="Banner"
            width={2000}
            height={100}
            className="w-full"
            />          
          </Link>
        </section>
        
    </div>
  )
}
export default Banner;