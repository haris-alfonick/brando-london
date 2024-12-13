// components/StarRatingFilter.tsx
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Rating = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className="space-y-2.5 [&>label>button]:w-5 [&>label>button]:h-[18px] [&>label>button]:pb-[4px] [&>label>button]:rounded-[2px] [&>label>button]:border-[#888888] [&>label>button]:border-[1.5px]">
      {[5, 4, 3, 2, 1].map((stars) => (
        <label
          key={stars}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Checkbox
            checked={selectedRatings.includes(stars)}
            onCheckedChange={() => toggleRating(stars)}
          />
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ${
                  i < stars ? "text-gray-700" : "text-gray-200"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.776 1.4 8.168L12 18.896 6.666 23.154l1.4-8.168L2.132 9.21l8.2-1.192L12 .587z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 font-medium text-xs">{stars} And More</span>
        </label>
      ))}
    </div>
  );
};

export default Rating;
