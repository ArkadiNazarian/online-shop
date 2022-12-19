import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axios_config } from '../../Axios/axios-config';
import { RootState } from '../store';

interface IStoreModel {
    token: string;
    user?: {
        _id?: string;
        first_name?: string;
        last_name?: string;
        email?: string;
    }
}

const initialState: IStoreModel = {
    token: '',
    user: {
        _id: undefined,
        first_name: undefined,
        last_name: undefined,
        email: undefined
    }
}

export const get_identity = createAsyncThunk('user/getIdentity', async () => {
    try {
        const response = await axios_config.get("/auth/me");
        return response.data.data.result;
    } catch (response) {
        return console.log(response);
    }
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
            state.user!.first_name = action.payload.first_name;
            state.user!.last_name = action.payload.last_name;
            state.user!._id = action.payload._id;
            state.user!.email = action.payload.email;
        })
        builder.addCase(get_identity.rejected, () => {
            console.log("error")
        })
    }
})

export const { set_account } = account_slice.actions;

export const getAccountSelector = (state: RootState) => state.account;