export interface IProductDetailsModel {
    _id: string;
    title: string;
    description: string;
    price: number;
    img?: string;
}

export interface IFormModel {
    product_details?: IProductDetailsModel;
    handler_goback: () => void;
    add_to_card: () => void;
}