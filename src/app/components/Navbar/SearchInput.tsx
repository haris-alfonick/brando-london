"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/utils/wooSearch";
import Image from "next/image";

interface SearchProduct {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      const res = await searchProducts(query);
      setResults(res);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative w-max max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />

      {results.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border mt-1 rounded-lg shadow-lg [&>li>span]:text-sm">
          {results.map((product) => (
            <li
              key={product.id}
              onClick={() => router.push(`/buy/${product.slug}`)}
              className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-11 h-11 object-cover"
                />
              )}
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}

      {loading && (
        <div className="absolute right-2 top-2 text-sm text-gray-500">
          Loading...
        </div>
      )}
    </div>
  );
}