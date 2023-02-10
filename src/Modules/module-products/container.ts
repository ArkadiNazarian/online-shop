import { useState } from "react"
import { useAppDispatch } from "../../Redux/redux-hooks";
import { add_card } from "../module-card/redux/card-reducer";
import { IFormModel, IProductModel } from "./model";
import { ProductList } from "./products-list/list";
import { Categories } from "./products-list/list";
import { generatePath, useNavigate } from 'react-router-dom';
import { route_names } from "../../Routes/route-names";
import { categories_title } from "../../Enums/enum-parser";

export const useContainer = (): IFormModel => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const app_routes = route_names();

    const [electronics, set_electronics] = useState<boolean>(false);
    const [home, set_home] = useState<boolean>(false);
    const [car, set_car] = useState<boolean>(false);
    const [products, set_products] = useState<Array<IProductModel>>();

    const handler_onView_electronics = () => {
        set_electronics(electronics => !electronics);
        set_car(false);
        set_home(false);
    }

    const handler_onView_home = () => {
        set_home(home => !home);
        set_car(false);
        set_electronics(false);
    }

    const handler_onView_car = () => {
        set_car(car => !car);
        set_home(false);
        set_electronics(false);
    }

    const onView_cellphone = () => {
        const cell_phone_list = ProductList.products_list.filter((value, index) => value.category === Categories.CellPhone);
        set_products(cell_phone_list)
    }

    const add_to_card = (id: string) => {
        const modified_product = ProductList.products_list.filter((value, index) => value.id === id);
        dispatch(add_card({ products: modified_product! }))
    }

    const hanlder_onView_details = (id: string, category: Categories) => {
        const category_title = categories_title(category);
        const path = generatePath(app_routes.view_product, { id,category_title });
        navigate(path);
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
        products,
        hanlder_onView_details
    }
}