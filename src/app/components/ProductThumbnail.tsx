'use client'
import { useState } from 'react'
import Image from 'next/image'

interface ImageObject {
  id: number
  name: string
  src: string
  alt?: string
}

interface ProductThumbnailProps {
  images: ImageObject[]
}

const Thumbnail = ({ images }: ProductThumbnailProps) => {
  // Use the first image from the array as the initial state
  const [mainImage1, setMainImage1] = useState(images[0]?.src || '/images/product1.webp')

  // Get the remaining images excluding the first one
  const thumbnailsProduct1 = images.slice(1)

  return (
    <div className='md:col-span-6 col-span-12'>
      {/* Main Product Image */}
      <Image
        src={mainImage1}
        alt='Main Product Image'
        width={500}
        height={100}
        className='w-full h-auto rounded-lg mb-4'
        id='mainImage1'
      />
      {/* Thumbnail Images */}
      <div className='grid grid-cols-12 gap-5 w-full py-4 justify-between overflow-x-auto'>
        {thumbnailsProduct1.map((thumbnail) => (
          <Image
            key={thumbnail.id}
            src={thumbnail.src}
            width={500}
            height={100}
            alt={thumbnail.name}
            className='md:col-span-6 col-span-3 object-fit w-full rounded-sm cursor-pointer transition duration-300'
            onClick={() => setMainImage1(thumbnail.src)}
          />
        ))}
      </div>
    </div>
  )
}

export default Thumbnail