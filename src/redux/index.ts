import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { wishlistSlice } from "./features/wishlist-slice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
