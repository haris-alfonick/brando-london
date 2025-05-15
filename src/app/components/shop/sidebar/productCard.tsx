'use client'
import Link from 'next/link'
import Image from 'next/image'
import { WooCommerceProduct } from '@/utils/wooCommerceApi'
import { Skeleton } from "@/components/ui/skeleton"
import Price from '../price'
import { useState } from 'react'
import StarRating from '../../review-star'

type ProductCardProps = {
  product: WooCommerceProduct;
  relatedProduct: boolean
};

const ProductCard = ({product, relatedProduct}: ProductCardProps) => {
  
  const [isImageLoading, setIsImageLoading] = useState(true);

  if(!product){
    return(
      <>
        <div className="lg:col-span-3 md:col-span-4 col-span-6 group flex w-full flex-col overflow-hidden">
          <Skeleton className="h-[500px] w-[100%] rounded-xl" />
          <div className="space-y-2 my-3">
            <Skeleton className="h-5 w-[150px]" />
            <Skeleton className="h-5 w-[250px]" />
          </div>
        </div>
      </>
    )
  }
  const imageSrc = product.images?.[0]?.src || '/fallback-image.jpg';
  return (
    <>
      <div className={`${product.id} ${relatedProduct ? 'lg:col-span-(need 5)' : 'lg:col-span-3 md:col-span-4 col-span-6'} group flex w-full flex-col overflow-hidden`}>
        <div
          className='relative w-full h-full overflow-hidden after:absolute after:top-0 after:bg-black after:content-{} after:opacity-0 after:w-full after:h-full group-hover:after:opacity-20'
        >
          <Link href={`/buy/${product.slug}`} className='relative z-10'>
          
              {isImageLoading && (
                <div className="relative h-full w-full">
                  <Skeleton className="inset-0 h-full w-full rounded-xl" />
                </div>
              )}
              <Image
                src={imageSrc}
                alt={product.name || 'Product image'}
                width={600}
                height={100}
                className={`h-full w-full group-hover:scale-110 transition-all duration-500 object-cover ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsImageLoading(false)}
                priority={true}
              />
          </Link>
          {/* <div className='absolute hidden lg:flex items-center w-fit mb-4 gap-x-2 transition-all duration-300 right-0 left-0 top-0 bottom-0 m-auto [&_.cardIcons]:rounded-full [&_.cardIcons]:bg-white [&_.cardIcons]:h-10 [&_.cardIcons]:w-10 [&_.cardIcons]:flex [&_.cardIcons]:justify-center [&_.cardIcons]:items-center group-hover:opacity-100 opacity-0 z-[99]'>
            <Link href={`/buy/${product.slug}`} className='cardIcons hover:!bg-gray-300'>
              <FontAwesomeIcon width={24} icon={faEye} className='w-[24px] h-[24px]' />
            </Link>
            <AddToCartButton productId={product.id} name={product.name} image={imageSrc} price={product.price} text={""} size="" quantity={1} />
          </div> */}
          {/* <div className='cardIcons absolute top-auto -bottom-3 right-2 flex justify-between gap-x-2 items-center py-0.5 px-2.5 bg-white z-[999] [&>span]:font-semibold'>
            <FontAwesomeIcon width={14} icon={faStar} className='text-[#eae640]' />
            <span>4.9</span>
          </div> */}
        </div>
        <div className='py-3'>
          <Price price={product.price} productPage={false} />
          <StarRating rating={product.average_rating} reviewCount={product.rating_count} />
          <Link href={`/buy/${product.slug}`}>
            <p className='leading-5 py-1 pb-3 text-base group-hover:text-[#ab1e23]'>{product.name}</p>
          </Link>
        </div>
      </div>
    </>
  )
}
export default ProductCard
