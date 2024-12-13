'use client'
import { useState } from 'react'
import Image from 'next/image'

const Thumbnail = () => {
  const [mainImage1, setMainImage1] = useState('/images/product1.webp')

  const thumbnailsProduct1 = [
    '/images/product2.webp',
    '/images/product3.webp',
    '/images/product4.webp',
    '/images/product5.webp'
  ]

  return (
    <div>
      {/* First Product Images Section */}
      <Image
        src={mainImage1}
        alt='Product 1'
        width={500}
        height={100}
        className='w-full h-auto rounded-lg mb-4'
        id='mainImage1'
      />
      <div className='grid grid-cols-12 gap-5 w-full py-4 justify-between overflow-x-auto'>
        {thumbnailsProduct1.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            width={500}
            height={100}
            alt={`Thumbnail ${index + 1}`}
            className='md:col-span-6 col-span-3 object-fit w-full rounded-sm cursor-pointer transition duration-300'
            onClick={() => setMainImage1(thumbnail)}
          />
        ))}
      </div>
    </div>
  )
}

export default Thumbnail
