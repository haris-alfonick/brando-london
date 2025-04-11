import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setFeaturedProducts: (state, action: PayloadAction<Product[]>) => {
      state.featuredProducts = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setFeaturedProducts, setSelectedProduct, setLoading, setError } = productSlice.actions;
export default productSlice.reducer; 