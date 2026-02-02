import { currencies } from "@/lib/config/currencies";
import { CurrencyCode } from "@/lib/features/currency/currencySlice";

export const convertPrice = (gbp: number, currency: CurrencyCode) =>
  gbp * currencies[currency].rate;

export const formatPrice = (amount: number, currency: CurrencyCode) => {
  const { locale, displaySymbol } = currencies[currency];

  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(amount);

  // Disambiguate all dollar currencies except USD
  if (currency === "CAD" || currency === "AUD") {
    return formatted.replace(/\$/g, displaySymbol);
  }

  return formatted;
};