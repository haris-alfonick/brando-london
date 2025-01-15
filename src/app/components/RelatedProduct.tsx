import { fetchRelatedProducts } from '@/utils/wooCommerceApi'
import ProductCard from './shop/sidebar/productCard'

interface RelatedProductCardProps {
  relatedIds: string[];
}

const RelatedProductCard = async ({relatedIds}:RelatedProductCardProps) => {

  const relatedProducts = await fetchRelatedProducts(relatedIds).catch(() => null);

  return (
    <>
      <div className='min-[1440px]:max-w-[1600px] mx-auto w-full'>
        <div className='text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase'>
          <h2>Related Products</h2>
        </div>
        <div className='overflow-x-auto m-w-full mt-5'>
          <div className='grid grid-cols-5 gap-x-7 md:gap-y-0 gap-y-3 min-w-[1200px]'>
            {relatedProducts.map((product:any) => (
              <ProductCard key={product.id} product={product} relatedProduct={true} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default RelatedProductCard
