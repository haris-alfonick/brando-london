import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CurrencyCode = "GBP" | "USD" | "CAD" | "EUR" | "AUD";

interface CurrencyState {
  current: CurrencyCode;
}

const initialState: CurrencyState = {
  current: "GBP",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<CurrencyCode>) {
      state.current = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;