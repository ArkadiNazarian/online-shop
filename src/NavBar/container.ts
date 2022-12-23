import { useSelector } from "react-redux";
import { getAccountSelector, sign_out } from "../Redux/reducers/signin-reducer";
import { useAppDispatch } from "../Redux/redux-hooks";
import { route_names } from "../Routes/route-names";
import { IModel } from "./model";

export const useContainer = (): IModel => {
    const data = useSelector(getAccountSelector);
    const app_routes = route_names();
    const dispatch = useAppDispatch();
    const action_logout = () => {
        dispatch(sign_out())
    }
    return {
        sign_up: app_routes.signup_path,
        first_name: data.user?.first_name,
        action_logout
    }
}