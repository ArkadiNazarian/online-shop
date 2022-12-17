import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axios_config } from '../../Axios/axios-config';
import { RootState } from '../store';

interface IStoreModel {
    token: string;
    user?:{
        _id?: string;
        first_name?: string;
        last_name?: string;
        email?: string;
    }
}

const initialState: IStoreModel = {
    token: '',
    user:{
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

export const user_slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_user: (state, action: PayloadAction<IStoreModel>) => {
            state.token = action.payload.token;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(get_identity.fulfilled, (state, action: PayloadAction<IStoreModel>) => {
            state.user!.first_name = action.payload.user?.first_name;
            state.user!._id = action.payload.user?._id;
            state.user!.last_name = action.payload.user?.last_name;
            state.user!.email = action.payload.user?.email;
        })
        builder.addCase(get_identity.rejected, () => {
            console.log("error")
        })
    }
})

export const { set_user } = user_slice.actions;

export const getUserSelector = (state: RootState) => state.user;