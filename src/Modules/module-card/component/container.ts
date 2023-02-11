import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCardSelector } from "../redux/card-reducer";
import { IFormModel, IProductModel } from "./model";

export const useContainer = (): IFormModel => {

    const card_data = useSelector(getCardSelector);

    const [products, set_products] = useState<Array<IProductModel>>();

    useEffect(() => {
        set_products(card_data.products)
    }, [card_data]);

    return {
        products
    }
}