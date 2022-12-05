import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Redux/store';

interface IStoreModel {
    token:string;
}

const initialState: IStoreModel = {
    token: ''
}

export const account_slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        set_account: (state, action: PayloadAction<IStoreModel>) => {
            state.token = action.payload.token;
        }
    }
})

export const { set_account } = account_slice.actions;

export const getAccountSelector = (state: RootState) => state.account;