import { currencies } from "@/lib/config/currencies";
import { CurrencyCode } from "@/lib/features/currency/currencySlice";

export const convertPrice = (gbp: number, currency: CurrencyCode) =>
  gbp * currencies[currency].rate;

export const formatPrice = (amount: number, currency: CurrencyCode) =>
  new Intl.NumberFormat(currencies[currency].locale, {
    style: "currency",
    currency,
  }).format(amount);