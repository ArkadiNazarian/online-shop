import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAccountSelector, sign_out } from "../Modules/module-account/signin/redux/signin-reducer";
import { getCardSelector } from "../Modules/module-card/redux/card-reducer";
import { useAppDispatch } from "../Redux/redux-hooks";
import { route_names } from "../Routes/route-names";
import { IModel, IOnPageModel } from "./model";
import { useState } from "react";

export const useContainer = (): IModel => {

    const [on_pages, set_on_pages] = useState<IOnPageModel>({ home: true, categories: false, products: false });
    const current_location = useLocation();
    const user_data = useSelector(getAccountSelector);
    const card_data = useSelector(getCardSelector);
    const app_routes = route_names();
    const dispatch = useAppDispatch();
    const navigator = useNavigate();

    switch (current_location.pathname) {
        case app_routes.dashboard:
            set_on_pages({
                home:true,
                categories:false,
                products:false
            })
            break;

        default:
            break;
    }

    const [open_side_bar, set_open_side_bar] = useState<boolean>(false)

    const action_logout = () => {
        dispatch(sign_out())
    }

    const handler_onView_account = () => {
        navigator(app_routes.view_account);
    }

    const handler_onView_products = () => {
        navigator(app_routes.products);
    }

    const handler_onView_card = () => {
        set_open_side_bar(!open_side_bar)
    }

    return {
        first_name: user_data.user?.first_name,
        last_name: user_data.user?.last_name,
        products_amount: card_data.products_amount,
        open_side_bar,
        action_logout,
        handler_onView_account,
        handler_onView_products,
        handler_onView_card,
        on_pages
    }
}