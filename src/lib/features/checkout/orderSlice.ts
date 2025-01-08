import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BillingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface OrderState {
  billing: BillingInfo;
  shipping: ShippingInfo;
  isShippingSameAsBilling: boolean;
  cartItems: CartItem[];
  totalPrice: number;
}

const initialState: OrderState = {
  billing: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  },
  shipping: {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  },
  isShippingSameAsBilling: true,
  cartItems: [],
  totalPrice: 0,
};

// Utility functions for localStorage
const loadOrderFromLocalStorage = (): OrderState => {
  if (typeof window !== 'undefined') {
    const storedOrder = localStorage.getItem('order');
    return storedOrder
      ? JSON.parse(storedOrder)
      : { ...initialState };
  }
  return { ...initialState };
};

const saveOrderToLocalStorage = (order: OrderState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('order', JSON.stringify(order));
  }
};

// Order slice definition
const orderSlice = createSlice({
  name: 'order',
  initialState: loadOrderFromLocalStorage(),
  reducers: {
    setBillingInfo(state, action: PayloadAction<BillingInfo>) {
      state.billing = action.payload;
      if (state.isShippingSameAsBilling) {
        state.shipping = { ...action.payload };
      }
      saveOrderToLocalStorage(state); // Save updated state to localStorage
    },
    setShippingInfo(state, action: PayloadAction<ShippingInfo>) {
      state.shipping = action.payload;
      state.isShippingSameAsBilling = false; // Mark shipping as different
      saveOrderToLocalStorage(state);
    },
    setShippingSameAsBilling(state, action: PayloadAction<boolean>) {
      state.isShippingSameAsBilling = action.payload;
      if (action.payload) {
        state.shipping = { ...state.billing };
      }
      saveOrderToLocalStorage(state);
    },
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.cartItems = action.payload;
      saveOrderToLocalStorage(state);
    },
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
      saveOrderToLocalStorage(state);
    },
    clearOrder(state) {
      state.billing = initialState.billing;
      state.shipping = initialState.shipping;
      state.isShippingSameAsBilling = true;
      state.cartItems = [];
      state.totalPrice = 0;
      saveOrderToLocalStorage(state);
    },
  },
});

export const {
  setBillingInfo,
  setShippingInfo,
  setShippingSameAsBilling,
  setCartItems,
  setTotalPrice,
  clearOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
