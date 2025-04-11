"use client"
import { useRouter } from "next/navigation";

const CustomizedNow = () => {
  const router = useRouter()

  return(
    <div className='xl:max-w-[800px] m-auto sm:my-12 my-5 flex justify-between items-center gap-x-2 max-sm:gap-y-5 max-sm:text-center max-sm:flex-col bg-[#EAEAEA] p-7 rounded-lg [&_strong]:text-2xl [&_strong]:font-medium [&_strong]:text-[#333] [&_p]:text-[#888] [&_p]:text-base [&_p]:pt-1.5'>
      <div>
        <strong>Didn&apos;t find what you were looking for</strong>
        <p>Get your Custom made Leather Jackets</p>
      </div>
      <button onClick={() => router.push('/contact')} className='bg-[#333] text-white font-medium p-2 px-6 rounded-md max-sm:text-sm'>Customize Now</button>
    </div>
  )
}

export default CustomizedNow;