import { faDeaf } from '@fortawesome/free-solid-svg-icons'

const WishList = () => {
  return (
    <section>
      <div className='mt-20 my-6 xl:px-20 lg:px-5 px-5 '>
        <h4 className='pb-5 text-xl px-5'>Wishlist</h4>
        <div className='grid grid-cols-12 bg-[#F2F4F5] border border-[#E4E7E9] px-5 py-2'>
          <div className='col-span-6 uppercase'>
            <h5 className='uppercase text-sm'>Products</h5>
          </div>
          <div className='col-span-2'>
            <h5 className='uppercase text-sm'>Price</h5>
          </div>
          <div className='col-span-2'>
            <h5 className='uppercase text-sm'>Stock Status</h5>
          </div>
          <div className='col-span-2 '>
            <h5 className='uppercase text-sm'>Actions</h5>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12  xl:px-20 lg:px-5 px-5 items-center'>
        <div className='col-span-6 flex items-center '>
          <div className='lg:w-16 md:w-14 '>
            <img src='/images/Image1.png' alt='' />
          </div>
          <div className=''>
            <p className='pl-3'>Edward Cafe Racer Black Leather Jacket</p>
          </div>
        </div>

        <div className='col-span-2'>
          <span className='text-slate-500'>$1299</span>
          <span>$999</span>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-[#2db224] text-sm'>in stock</p>
        </div>
        <div className='col-span-2'>
          <button
            type='button'
            className="uppercase bg-[#333333] text-white px-4 py-2 text-[10px] pr-7 bg-[url('/images/Vectorr.png')] bg-[length:15px_13px] bg-no-repeat bg-[top_8px_right_10px] font-medium"
          >
            Add to card
          </button>
        </div>

        <div className='col-span-6 flex items-center '>
          <div className='lg:w-16 md:w-14'>
            <img src='/images/Image1.png' alt='' />
          </div>
          <div className=''>
            <p className='pl-3'>Edward Cafe Racer Black Leather Jacket</p>
          </div>
        </div>

        <div className='col-span-2'>
          <span className='text-slate-500'>$1299</span>
          <span>$999</span>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-[#2db224] text-sm'>in stock</p>
        </div>
        <div className='col-span-2'>
          <button
            type='button'
            className="uppercase bg-[#333333] text-white px-4 py-2 text-[10px] pr-7 bg-[url('/images/Vectorr.png')] bg-[length:15px_13px] bg-no-repeat bg-[top_8px_right_10px] font-medium"
          >
            Add to card
          </button>
        </div>

        <div className='col-span-6 flex items-center '>
          <div className='lg:w-16 md:w-14'>
            <img src='/images/Image1.png' alt='' />
          </div>
          <div className=''>
            <p className='pl-3'>Edward Cafe Racer Black Leather Jacket</p>
          </div>
        </div>

        <div className='col-span-2'>
          <span className='text-slate-500'>$1299</span>
          <span>$999</span>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-red-700 text-sm'>out of stock</p>
        </div>
        <div className='col-span-2'>
          <button
            type='button'
            className="uppercase border bg-slate-300 border-black font-medium px-4 py-2 text-[10px] pr-7 bg-[url('/images/Vectorr.png')] bg-[length:15px_13px] bg-no-repeat bg-[top_8px_right_10px]"
          >
            Add to card
          </button>
        </div>

        <div className='col-span-6 flex items-center '>
          <div className='lg:w-16 md:w-14'>
            <img src='/images/Image1.png' alt='' />
          </div>
          <div className=''>
            <p className='pl-3'>Edward Cafe Racer Black Leather Jacket</p>
          </div>
        </div>

        <div className='col-span-2'>
          <span className='text-slate-500'>$1299</span>
          <span>$999</span>
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-[#2db224] text-sm'>in stock</p>
        </div>
        <div className='col-span-2'>
          <button
            type='button'
            className="uppercase bg-[#333333] text-white px-4 py-2 text-[10px] pr-7 bg-[url('/images/Vectorr.png')] bg-[length:15px_13px] bg-no-repeat  bg-[top_8px_right_10px] font-medium"
          >
            Add to card
          </button>
        </div>
      </div>
    </section>
  )
}

export default WishList
