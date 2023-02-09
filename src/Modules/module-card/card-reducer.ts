import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Redux/store';
import { Categories } from '../module-products/products-list/list';

export interface IStoreModel {
    total_price?: number;
    products_amount?: number;
    products: Array<{
        id: string;
        name: string;
        description: string;
        category: Categories;
        price: number;
        img?: string;
    }>
}

const initialState: IStoreModel = {
    total_price: 0,
    products_amount:0,
    products: []
}


export const card_slice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        add_card: (state, action: PayloadAction<IStoreModel>) => {
            state.products.push(...action.payload.products);
            state.total_price = 0;
            state.products_amount = 0;
            for (let index = 0; index < state.products.length; index++) {
                state.total_price! += state.products[index].price;
                state.products_amount += 1;
            }
        }
    }
})

export const { add_card } = card_slice.actions;

export const getCardSelector = (state: RootState) => state.card;

export default card_slice.reducer;