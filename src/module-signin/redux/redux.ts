import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axios_config } from '../../Axios/axios-config';
import { RootState } from '../../Redux/store';

interface IStoreModel {
    token: string;
    first_name?: string;
}

const initialState: IStoreModel = {
    token: '',
    first_name: ''
}

export const get_identity = createAsyncThunk('account/getIdentity', () => {
    return axios_config.get("/auth/me")
        .then((response) => response.data.data.result.first_name)
        .catch((response) => console.log(response))
})

export const account_slice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        set_account: (state, action: PayloadAction<IStoreModel>) => {
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_identity.fulfilled, (state, action) => {
            state.first_name = action.payload
        })
        builder.addCase(get_identity.rejected, () => {
            console.log("error")
        })
    }
})

export const { set_account } = account_slice.actions;

export const getAccountSelector = (state: RootState) => state.account;