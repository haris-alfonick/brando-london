// lib/config/countryToCurrency.ts
import { CurrencyCode } from "@/lib/features/currency/currencySlice";

export const countryToCurrency: Record<string, CurrencyCode> = {
  GB: "GBP",
  US: "USD",
  CA: "CAD",
  AU: "AUD",
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
};