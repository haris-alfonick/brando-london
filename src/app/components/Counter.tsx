"use client"
import React, { useState } from "react";

const IncrementCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="flex items-center mt-2 w-28 border">
      <button
        type="button"
        onClick={decrement}
        className="w-8 text-lg font-bold"
      >
        -
      </button>
      <span className="flex-grow text-center">{count}</span>
      <button
        type="button"
        onClick={increment}
        className="w-8 text-lg font-bold"
      >
        +
      </button>
    </div>
  );
};

export default IncrementCounter;
