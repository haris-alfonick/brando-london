import Image from "next/image"

const StatsBlock = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] py-12 px-5">
        <div className='min-[1300px]:max-w-[1280px] m-auto'>
          <div className='grid sm:grid-cols-4 grid-cols-2 max-sm:gap-y-6 sm:[&_strong]:text-3xl [&_strong]:text-2xl [&_strong]:font-extrabold sm:[&_strong]:pt-5 [&_strong]:pt-3.5 [&_strong]:block [&_strong]:text-[#333] [&_p]:text-[#888] sm:[&_p]:text-lg [&_p]:text-base [&_p]:leading-5 sm:[&_img]:w-[52px] [&_img]:w-[45px] [&_img]:m-auto [&_.statBox]:text-center'>
            <div className="statBox">
                <Image
                src="/images/men-icon.png"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>23000 +</strong>
                <p>Customer Served</p>
            </div>
            <div className="statBox">
                <Image
                src="/images/machine-icon.png"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>352000 +</strong>
                <p>Customer Request Received</p>
            </div>
            <div className="statBox">
                <Image
                src="/images/world-icon.png"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>135 +</strong>
                <p>Countries Covered</p>
            </div>
            <div className="statBox">
                <Image
                src="/images/review-icon.png"
                alt="icon"
                width={100}
                height={100}
                />
                <strong>39000 +</strong>
                <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StatsBlock
