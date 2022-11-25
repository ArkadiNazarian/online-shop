import { configureStore } from "@reduxjs/toolkit";
import { account_slice } from "./Account/redux";

export const store = configureStore({
    reducer: {
        account:account_slice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;