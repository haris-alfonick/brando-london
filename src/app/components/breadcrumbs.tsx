import Link from "next/link"

const BreadCrumbs = ({page}: {page:string}) => {
  const formatted = page
  .replace(/-/g, " ") // Replace all dashes with spaces
  .replace(/^./, (match) => match.toUpperCase());
  return (
    <div className='bg-[#eaeaea] lg:px-20 px-5 py-3.5'>
      <div className='container mx-auto'>
        <ul className="flex items-center gap-x-2 [&_li]:bg-[url('/images/right-arrow.png')] [&_li]:bg-[length:11px_11px] [&_li]:bg-no-repeat [&_li]:pr-5 [&_li]:bg-[right_top_8px] last:[&_li]:bg-none
        [&_li:nth-child(1)_a]:bg-no-repeat [&_a]:bg-[length:16px_16px] [&_a]:text-xs [&_a]:lg:text-[13px] [&_a]:text-[#8888] [&_li:nth-child(1)_a]:pl-5 [&_li:last-child_a]:text-[#333]">
          <li>
            <Link href="/" className="bg-[url('/images/home-icon.png')]">Home</Link>
          </li>
          <li>
            <Link href="#">{formatted}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default BreadCrumbs
