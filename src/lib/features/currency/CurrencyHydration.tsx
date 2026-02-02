"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store";
import { setCurrency, CurrencyCode } from "./currencySlice";

export default function CurrencyHydration() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("currency") as CurrencyCode | null;
    if (saved) {
      dispatch(setCurrency(saved));
    }
  }, [dispatch]);

  return null;
}