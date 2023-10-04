import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo";
import { itemListApi } from "@/servers/itemList";

export const store = configureStore({
  reducer: {
    [itemListApi.reducerPath]: itemListApi.reducer,
    todo: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
