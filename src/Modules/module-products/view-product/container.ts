import { useEffect, useState } from "react"
import { useAppDispatch } from "../../../Redux/redux-hooks";
import { add_card } from "../../module-card/redux/card-reducer";
import { IFormModel, IProductDetailsModel } from "./model";
import { ProductList } from "../../../products-list/list";
import { useNavigate, useParams } from 'react-router-dom';
import { route_names } from "../../../Routes/route-names";

export const useContainer = (): IFormModel => {

    const { id } = useParams();
    const app_routes = route_names();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [product_details, set_product_details] = useState<IProductDetailsModel>();

    useEffect(() => {
        const modified_list = ProductList.products_list.find((value, index) => value.id === id);
        set_product_details(modified_list);
    }, [id]);

    const handler_goback = () => {
        navigate(app_routes.products);
    }

    const add_to_card = () => {
        const modified_list = ProductList.products_list.filter((value, index) => value.id === id);
        dispatch(add_card({ products: modified_list }))
    }

    return {
        product_details,
        handler_goback,
        add_to_card
    }
}