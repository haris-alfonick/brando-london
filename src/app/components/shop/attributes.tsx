"use client";

import { useState } from "react";

type AttributesProps = {
  attributes: any[];
  onSelectedSizeChange: (size: string | null) => void;
};

const Attributes = ({ attributes, onSelectedSizeChange }: AttributesProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    onSelectedSizeChange(size);
  };

  return (
    <>
      {attributes.map((attribute: any) => (
        <div
          key={attribute.id}
          className="mt-6 [&>strong]:font-medium [&>strong]:text-lg [&>strong]:block"
        >
          <strong>{attribute.name}</strong>
          <div className="flex gap-x-2 mt-2">
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
    </>
  );
};

export default Attributes;