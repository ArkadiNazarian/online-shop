import * as Enums from "../../../Enums/enums";

export interface IProductDetailsModel {
    id: string;
    category: Enums.Categories;
    name: string;
    description: string;
    price: number;
    img?: string;
}

export interface IFormModel {
    product_details?: IProductDetailsModel;
    handler_goback: () => void;
    add_to_card: () => void;
}