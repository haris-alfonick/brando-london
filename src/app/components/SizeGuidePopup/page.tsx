'use client'

import { useState } from 'react'
import Image from 'next/image'
import { faChartColumn, faRulerVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SizeGuidePopup = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Button Wrapper */}
      <div className="mt-2">
        <button
          onClick={() => setOpen(true)}
          className="text-base text-[#fff] transition-all hover:bg-[#333] bg-[#d13636] px-2 py-1 rounded-sm"
        >
         <FontAwesomeIcon icon={faChartColumn} fontWeight={400} /> Size Guide
        </button>
      </div>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-[99999999] flex items-center justify-center bg-black/80 px-4">
          
          {/* Modal Box */}
          <div className="relative xl:h-[calc(100%_-_15%)] md:h-[calc(100%_-_20%)] xl:top-[2%] md:top-[3%] max-w-[700px] w-full bg-white rounded-lg overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-3 z-[9999] text-4xl leading-none text-[#333] hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full h-auto">
              <Image
                src="/images/size-guide.webp"
                alt="Size Guide"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default SizeGuidePopup
