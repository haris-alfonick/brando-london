"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setCurrency, CurrencyCode } from "@/lib/features/currency/currencySlice";
import { useMounted } from "@/hooks/useMounted";

const options: CurrencyCode[] = ["GBP", "USD", "CAD", "EUR", "AUD"];

export function CurrencySwitcher() {
  const mounted = useMounted(); // 👈 ADD THIS
  const dispatch = useAppDispatch();
  const current = useAppSelector((s) => s.currency.current);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("currency", current);
    }
  }, [current, mounted]);

  // 🔒 Prevent pre-hydration render
  if (!mounted) {
    return null;
  }

  return (
    <select
      className="!bg-transparent"
      value={current}
      onChange={(e) =>
        dispatch(setCurrency(e.target.value as CurrencyCode))
      }
    >
      {options.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}