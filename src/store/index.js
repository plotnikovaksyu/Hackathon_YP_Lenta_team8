import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const reducer = {
    user: authSlice,
  }

  export const store = configureStore({
    reducer: reducer,
    devTools: true,
  });