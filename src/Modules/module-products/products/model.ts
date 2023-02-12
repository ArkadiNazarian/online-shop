export interface IProductModel {
    _id: string;
    title: string;
    description: string;
    price: number;
    img?: string;
}

export interface IFormModel {
    electronics: boolean;
    home: boolean;
    car: boolean;
    products?: Array<IProductModel>;
    handler_onView_electronics: () => void;
    handler_onView_home: () => void;
    handler_onView_car: () => void;
    onView_cellphone: () => void;
    add_to_card: (id: string) => void;
    hanlder_onView_details: (_id: string) => void;
}