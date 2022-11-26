import { configureStore } from "@reduxjs/toolkit";
import { account_slice } from "./Signin/redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    version:1,
    storage,
    whitelist:['account']
};

const reducers = combineReducers({
    account: account_slice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
//export const store = configureStore({
//    reducer: {
//        account:account_slice.reducer
//}
//})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;