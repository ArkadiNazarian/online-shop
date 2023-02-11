import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccountSelector, sign_out } from "../Modules/module-account/signin/redux/signin-reducer";
import { getCardSelector } from "../Modules/module-card/redux/card-reducer";
import { useAppDispatch } from "../Redux/redux-hooks";
import { route_names } from "../Routes/route-names";
import { IModel } from "./model";

export const useContainer = (): IModel => {

    const user_data = useSelector(getAccountSelector);
    const card_data = useSelector(getCardSelector);
    const app_routes = route_names();
    const dispatch = useAppDispatch();
    const navigator = useNavigate()

    const action_logout = () => {
        dispatch(sign_out())
    }

    const handler_onView_account = () => {
        navigator(app_routes.view_account);
    }

    const handler_onView_products = () => {
        navigator(app_routes.products);
    }

    const handler_onView_card=()=>{
        navigator(app_routes.view_card);
    }

    return {
        first_name: user_data.user?.first_name,
        last_name: user_data.user?.last_name,
        products_amount: card_data.products_amount,
        action_logout,
        handler_onView_account,
        handler_onView_products,
        handler_onView_card
    }
}