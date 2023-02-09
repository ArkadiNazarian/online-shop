import iphone from "../../../images/download.png";

export enum Categories {
    CellPhone = 0,
    ComputerAndLaptop = 1,
    Camera = 2,
    KitchenAndDining = 3,
    Bedding = 4,
    Bath = 5,
    Car = 6,
    Motorcycle = 7,
    TiresAndWheels = 8
}

interface IProductslist {
    products_list: Array<{
        id: string;
        name: string;
        description: string;
        category: Categories;
        price: number;
        img?: string;
    }>
}

export const ProductList: IProductslist = {
    products_list: [
        {
            id: "1",
            name: "iphone 13",
            description: "Apple company",
            category: Categories.CellPhone,
            price:1000,
            img: iphone
        },
        {
            id: "2",
            name: "table",
            description: "Wood company",
            price:1000,
            category: Categories.KitchenAndDining
        }
    ]
}