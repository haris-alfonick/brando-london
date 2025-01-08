"use client";

import React from "react";

interface IncrementCounterProps {
  count: number;
  setCount: (value: number) => void;
}

const IncrementCounter = ({ count, setCount }: IncrementCounterProps) => {
  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="flex items-center mt-2 [&_button]:w-8 [&_button]:text-lg [&_button]:font-normal py-1 w-28 border">
      <button type="button" onClick={decrement}>
        -
      </button>
      <span className="flex-grow text-center">{count}</span>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default IncrementCounter;