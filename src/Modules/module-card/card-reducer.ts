import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Redux/store';
import { Categories } from '../module-products/products-list/list';

export interface IStoreModel {
    products: Array<{
        id: string;
        name: string;
        description: string;
        category: Categories;
        img?: string;
    }>
}

const initialState: IStoreModel = {
    products: []
}


export const card_slice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        add_card: (state, action: PayloadAction<IStoreModel>) => {
            state.products.push(...action.payload.products);
        }
    }
})

export const { add_card } = card_slice.actions;

export const getCardSelector = (state: RootState) => state.card;

export default card_slice.reducer;