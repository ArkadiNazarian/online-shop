import { configureStore } from "@reduxjs/toolkit";
import { user_slice } from "./reducers/signin-reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistedUserReducer = persistReducer(
    {
        key: "  site.user",
        storage,
        whitelist: ['token'],
    },
    user_slice.reducer
);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer
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