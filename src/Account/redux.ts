import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IModel } from './model';

const initialState: IModel = {
    email: '',
    first_name: '',
    last_name: '',
    password: ''
}

export const account_slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        add_account: (state, action: PayloadAction<IModel>) => {
            state = action.payload;
        }
    }
})

export const { add_account } = account_slice.actions;

export const getAccountSelector = (state: RootState) => state.account;