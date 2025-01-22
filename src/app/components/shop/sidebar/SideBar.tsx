'use client'
import { Accordion } from '@/components/ui/accordion'
import MensCollections from './MensCollections'
import WomensCollections from './WomensCollections'
import LeatherType from './LeatherType'
import { useState } from 'react'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Filter Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className='xl:hidden flex items-center justify-start gap-x-1.5 py-[1px] px-2.5 rounded-sm w-fit border border-[#333] mb-2'>
        <FontAwesomeIcon icon={faFilter} width={16} height={16} />
        <span className='text-[#333] text-lg rounded-md'>Filter</span>
      </button>

      {/* Sidebar */}
      <div
        className={`xl:col-span-3 col-span-12 xl:static fixed top-0 left-0  h-full max-xl:w-[300px] overflow-auto bg-white transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0 max-xl:z-[99999]' : 'max-xl:-translate-x-full'
        }`}>
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className='absolute xl:hidden top-5 right-4 text-[#333] p-0.5 border border-[#333] rounded-sm transition'
        >
          <svg
            className='block h-6 w-6 fill-current'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        <div className='h-fit p-6 border border-[#e4e7e9] [&_h3]:text-[#333333] [&_h3]:md:text-3xl [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2.5'>
          <h3>Filter</h3>
          <Accordion
            type='multiple'
            defaultValue={[
              'price',
              'mensCollection',
              'womensCollection',
              'customerRating'
            ]}
          >
            <MensCollections />
            <WomensCollections />
            <LeatherType />
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default SideBar
