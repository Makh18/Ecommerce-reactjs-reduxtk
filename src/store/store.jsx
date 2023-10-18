import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../Slices/productsApi "
import productsReducer from "../Slices/productsSlice";
import cartReducer from "../Slices/cartSlice";

const store = configureStore({
    reducer: {
      products: productsReducer,
       cart: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

  export default store;