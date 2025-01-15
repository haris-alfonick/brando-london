"use client"
import { useState } from "react"
import IncrementCounter from "@/app/components/shop/Counter"
import AddToCartButton from "@/app/components/shop/AddToCartButton"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface AttributesProps {
  attributes: any[];
  productId: string;
  productName: string;
  image: string;
  price: string;
}

const Handler = ({attributes, productId, productName, image, price}: AttributesProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  
  return(
    <>
      {attributes.map((attribute: any) => (
        <div
          key={attribute.id}
          className="mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block"
        >
          <strong>{attribute.name}</strong>
          <div className="block gap-x-2 mt-2 [&_label]:mr-1.5 [&_label]:mb-1.5 [&_label]:inline-block [&_span]:block">
            {attribute.name === "Color" ? (
              attribute.options.map((color: any, idx: any) => (
                <label key={idx} className="cursor-pointer">
                  <input
                    type="radio"
                    name={attribute.slug}
                    className="hidden peer"
                  />
                  <div
                    className="w-12 h-9 rounded border peer-checked:ring-2"
                    style={{ backgroundColor: color }}
                  ></div>
                </label>
              ))
            ) : (
              attribute.options.map((option: any, idx: any) => (
                <label key={idx} className="cursor-pointer">
                  <input
                    type="radio"
                    name={attribute.slug}
                    className="hidden peer"
                    value={option}
                    onChange={() => handleSizeChange(option)}
                  />
                  <span className="px-4 py-1.5 pb-2 rounded border bg-white peer-checked:bg-gray-800 peer-checked:text-white">
                    {option}
                  </span>
                </label>
              ))
            )}
          </div>
        </div>
      ))}
      <div className='mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block'>
        <strong>Quantity</strong>
        <IncrementCounter 
          count={quantity}
          setCount={setQuantity}
        />
      </div>

      <div className='mt-6 flex justify-between items-center gap-x-6 [&>button]:bg-[#333333] [&>button]:text-white [&>button]:w-full [&>button]:py-2 [&>button]:rounded'>
        <AddToCartButton productId={productId} name={productName} image={image} price={price} text="Add to Cart" size={selectedSize} quantity={quantity} />
        <div className='[&>svg]:w-6'>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </>
  )
}

export default Handler