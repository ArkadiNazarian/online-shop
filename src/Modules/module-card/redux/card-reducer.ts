import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../Redux/store';
import * as Enums from '../../../Enums/enums';

interface IProductModel {
    id: string;
    name: string;
    description: string;
    category: Enums.Categories;
    price: number;
    img?: string;
    number?: number;
}

export interface IStoreModel {
    total_price?: number;
    products_amount?: number;
    products: Array<IProductModel>;
}

const initialState: IStoreModel = {
    total_price: 0,
    products_amount: 0,
    products: []
}


export const card_slice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        add_card: (state, action: PayloadAction<IStoreModel>) => {
            const product_category = action.payload.products.find((value, index) => index === 0);
            if (state.products.length === 0) {
               const converted_array= action.payload.products.map((value,index)=>{
                    return{
                       ...value,
                       number:1 
                    }
                })
                state.products.push(...converted_array);
            } else {
                state.products.filter((value, index) => {
                    if (value.category === product_category?.category) {
                           return value.number !+= 1
                    } else {
                      return state.products.push(...action.payload.products); 
                    }
                })
            }

            state.total_price = 0;
            state.products_amount! += 1;
            for (let index = 0; index < state.products.length; index++) {
                state.total_price! += state.products[index].price * state.products[index].number!;
            }
        }
    }
})

export const { add_card } = card_slice.actions;

export const getCardSelector = (state: RootState) => state.card;

export default card_slice.reducer;