import { Accordion } from '@/components/ui/accordion'
import PriceFilter from './PriceFilter'
import MensCollections from './MensCollections'
import WomensCollections from './WomensCollections'
import CustomerRating from './CustomerRating'
import LeatherType from './LeatherType'

const SideBar = () => {

  return(
    <>
      <div className='lg:col-span-3 col-span-12 max-lg:order-2 h-fit p-6 border border-[#e4e7e9] [&_h3]:text-[#333333] [&_h3]:md:text-3xl [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-2.5'>
        <h3>Filter</h3>
          <Accordion type='multiple' defaultValue={["price", "mensCollection", "womensCollection", "customerRating"]}>
            {/* <PriceFilter /> */}
            <MensCollections />
            <WomensCollections />
            <LeatherType />
            {/* <CustomerRating /> */}
          </Accordion>
      </div>
    </>
  )
}

export default SideBar