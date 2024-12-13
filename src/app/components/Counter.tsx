"use client"
import React, { useState } from "react";

const IncrementCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="flex items-center mt-2 [&_button]:w-8 [&_button]:text-lg [&_button]:font-normal text-[#] py-1 w-28 border">
      <button
        type="button"
        onClick={decrement}>
        -
      </button>
      <span className="flex-grow text-center">{count}</span>
      <button
        type="button"
        onClick={increment}>
        +
      </button>
    </div>
  );
};

export default IncrementCounter;
