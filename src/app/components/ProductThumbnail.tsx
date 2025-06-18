'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const [mainImage1, setMainImage1] = useState(images[0]?.src || '/images/product1.webp')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // For swipe gesture
  const startX = useRef<number | null>(null)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    startX.current = x
  }

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current === null) return
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
    const diff = startX.current - endX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext() // Swiped left
      } else {
        showPrev() // Swiped right
      }
    }
    startX.current = null
  }

  return (
    <>
      <div className='md:col-span-6 col-span-12'>
        {/* Main Product Image */}
        <Image
          src={mainImage1}
          alt='Main Product Image'
          width={500}
          height={100}
          className='w-full h-auto rounded-lg mb-4 cursor-pointer select-none'
          draggable={false}
          onClick={() => {
            const index = images.findIndex((img) => img.src === mainImage1)
            openModal(index !== -1 ? index : 0)
          }}
        />

        {/* Thumbnail Images */}
        <div className='grid grid-cols-12 gap-5 w-full py-4 justify-between overflow-x-auto'>
          {images.map((thumbnail, index) => (
            <Image
              key={thumbnail.id}
              src={thumbnail.src}
              width={500}
              height={100}
              alt={thumbnail.name}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className='md:col-span-6 col-span-3 object-cover w-full rounded-sm cursor-pointer transition duration-300'
              onClick={() => {
                setMainImage1(thumbnail.src)
                openModal(index)
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-90 z-[999999] flex items-center justify-center select-none'
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeModal}
            className='absolute top-4 right-4 text-white text-2xl'
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <button
            onClick={showPrev}
            className='absolute left-4 sm:text-white text-[#ccc] text-2xl'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].name}
            width={900}
            height={600}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className='max-h-[80vh] w-auto object-cover pointer-events-none cursor-pointer'
          />

          <button
            onClick={showNext}
            className='absolute right-4 sm:text-white text-[#ccc] text-2xl'
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </>
  )
}

export default Thumbnail
