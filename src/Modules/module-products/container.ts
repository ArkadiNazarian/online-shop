import { useState } from "react"
import { useAppDispatch } from "../../Redux/redux-hooks";
import { add_card } from "../module-card/card-reducer";
import { IFormModel, IProductModel } from "./model";
import { ProductList } from "./products-list/list";
import { Categories } from "./products-list/list";

export const useContainer = (): IFormModel => {

    const dispatch = useAppDispatch();

    const [electronics, set_electronics] = useState<boolean>(false);
    const [home, set_home] = useState<boolean>(false);
    const [car, set_car] = useState<boolean>(false);
    const [products, set_products] = useState<Array<IProductModel>>();

    const handler_onView_electronics = () => {
        set_electronics(electronics => !electronics);
    }

    const handler_onView_home = () => {
        set_home(home => !home);
    }

    const handler_onView_car = () => {
        set_car(car => !car);
    }

    const onView_cellphone = () => {
        const cell_phone_list = ProductList.products_list.filter((value, index) => value.category === Categories.CellPhone);
        set_products(cell_phone_list)
    }

    const add_to_card = (id: string) => {
        const modified_product = ProductList.products_list.filter((value, index) => value.id === id);
        dispatch(add_card({ products: modified_product! }))
    }

    return {
        electronics,
        home,
        car,
        handler_onView_home,
        handler_onView_electronics,
        handler_onView_car,
        onView_cellphone,
        add_to_card,
        products
    }
}