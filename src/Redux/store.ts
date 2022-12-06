import { configureStore } from "@reduxjs/toolkit";
import { account_slice } from "../module-signin/redux/redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistedAccountReducer = persistReducer(
    {
        key: "  site.account",
        storage,
        whitelist: ['token'],
    },
    account_slice.reducer
);

export const store = configureStore({
    reducer: {
        account: persistedAccountReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;