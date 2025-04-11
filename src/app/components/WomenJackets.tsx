import { fetchHomePageData } from '@/actions/FetchTabs'
import { WooCommerceProduct } from '@/utils/wooCommerceApi'
import ProductCard from './shop/sidebar/productCard'

const Womenjackets = async () => {
  const { womenJackets } = await fetchHomePageData();

  return (
    <>
      <section className='px-5 md:pb-0 md:py-14 py-10 pb-1'>
        <div className='container mx-auto'>
          <div className='text-center [&>h2]:text-[#333333] lg:[&>h2]:text-4xl md:[&>h2]:text-3xl [&>h2]:text-2xl [&_h2]:font-semibold [&_h2]:uppercase mb-8'>
            <h2>Women Leather Jackets</h2>
          </div>
          <div className='grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3'>
            {womenJackets.map((product: WooCommerceProduct) => (
              <ProductCard key={product.id} product={product} relatedProduct={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Womenjackets;