import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccountSelector, sign_out } from "../Modules/module-account/signin/redux/signin-reducer";
import { useAppDispatch } from "../Redux/redux-hooks";
import { route_names } from "../Routes/route-names";
import { IModel } from "./model";

export const useContainer = (): IModel => {
    const data = useSelector(getAccountSelector);
    const app_routes = route_names();
    const dispatch = useAppDispatch();
    const navigator = useNavigate()

    const action_logout = () => {
        dispatch(sign_out())
    }

    const handler_onView_account = () => {
        navigator(app_routes.view_account)
    }

    const handler_onView_products = () => {
        navigator(app_routes.products)
    }

    return {
        first_name: data.user?.first_name,
        last_name: data.user?.last_name,
        action_logout,
        handler_onView_account,
        handler_onView_products
    }
}