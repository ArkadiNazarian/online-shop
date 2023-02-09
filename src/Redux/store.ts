import { configureStore } from "@reduxjs/toolkit";
import { account_slice } from "../Modules/module-account/signin/redux/signin-reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cardReducer from "../Modules/module-card/card-reducer";

const persistedUserReducer = persistReducer(
    {
        key: "  site.user",
        storage
    },
    account_slice.reducer,
);

export const store = configureStore({
    reducer: {
        account: persistedUserReducer,
        card: cardReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: true
        })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;