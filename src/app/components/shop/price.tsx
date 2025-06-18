interface PriceType {
  price: string,
  productPage: boolean
}

const Price = ({price, productPage}: PriceType) => {
  const salePrice = Number(price) - 40;
  const sale = salePrice.toFixed(2)
  return(
    <>
      <div className={`flex items-center ${productPage ? 'gap-x-4 mb-4' : 'gap-x-2 [&_span]:text-lg'}`}>
        <span className={`${productPage ? 'text-xl lg:text-2xl' : 'text-[#282828]'} font-semibold`}>
          ${sale}
        </span>
         <span className='line-through text-xl lg:text-[23px] text-gray-500'> ${parseFloat(price).toFixed(2)}</span>
        {productPage && (
          <span className='text-sm bg-gray-800 text-white px-2 py-1 rounded'>
             Save {Math.round(((parseFloat(price) - parseFloat(sale)) / parseFloat(price)) * 100)}%
          </span>
        )}
        
      </div>
    </>
  )
}

export default Price