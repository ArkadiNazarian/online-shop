import iphone from "../images/download.png";
import * as Enums from "../Enums/enums";


interface IProductslist {
    products_list: Array<{
        id: string;
        name: string;
        description: string;
        category: Enums.Categories;
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
            category: Enums.Categories.CellPhone,
            price:1000,
            img: iphone
        },
        {
            id: "2",
            name: "table",
            description: "Wood company",
            price:1000,
            category: Enums.Categories.KitchenAndDining
        }
    ]
}