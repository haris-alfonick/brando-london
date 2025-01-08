import { fetchHomePageData } from '@/actions/FetchTabs'
import ProductCard from './shop/sidebar/productCard'
import { Product } from '@/utils/wooCommerceTypes'


const MensJackets = async () => {
  const { mensJackets } = await fetchHomePageData();
  return (
    <>
      <section className='px-5 md:pb-0 md:py-14 py-10 pb-1'>
        <div className='container mx-auto'>
          <div className='text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase mb-8'>
            <h2>Mens Leather Jackets</h2>
          </div>
          <div className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
            {mensJackets.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default MensJackets
