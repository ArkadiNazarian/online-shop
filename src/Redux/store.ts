import { configureStore } from "@reduxjs/toolkit";
import { account_slice } from "./reducers/signin-reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistedUserReducer = persistReducer(
    {
        key: "  site.user",
        storage
    },
    account_slice.reducer
);

export const store = configureStore({
    reducer: {
        account: persistedUserReducer
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