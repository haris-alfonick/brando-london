"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store";
import { setCurrency, CurrencyCode } from "./currencySlice";
import { countryToCurrency } from "@/lib/config/countryToCurrency";

export default function AutoCurrency() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 1️⃣ Respect user choice
    const saved = localStorage.getItem("currency");
    if (saved) return;

    // 2️⃣ Read country from <body>
    const country = document.body.dataset.country;
    if (!country) return;

    const detectedCurrency = countryToCurrency[country];
    if (!detectedCurrency) return;

    dispatch(setCurrency(detectedCurrency));
    localStorage.setItem("currency", detectedCurrency);
  }, [dispatch]);

  return null;
}