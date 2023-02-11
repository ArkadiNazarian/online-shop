import * as Enums from "../../../Enums/enums";

export interface IProductModel {
    id: string;
    category: Enums.Categories;
    name: string;
    description: string;
    price: number;
    img?: string;
    number?: number;
}

export interface IFormModel {
    products?: Array<IProductModel>;
    total_price?: number;
}