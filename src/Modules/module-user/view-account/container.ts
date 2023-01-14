import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { route_names } from "../../../Routes/route-names";
import { getAccountSelector } from "../../module-account/signin/redux/signin-reducer";
import { IFormModel } from "./model";

export const useContainer = (): IFormModel => {

    const navigator = useNavigate();
    const app_routes = route_names();

    const data = useSelector(getAccountSelector);

    const [on_account, set_on_account] = useState<boolean>(true);
    const [on_address, set_on_address] = useState<boolean>(false);

    const handler_onView_account = () => {
        set_on_account(true);
        set_on_address(false);
    }

    const handler_onView_address = () => {
        set_on_account(false);
        set_on_address(true);
    }

    const handler_onEdit = () => {
        navigator(app_routes.edit_account)
    }

    return {
        first_name: data.user?.first_name,
        last_name: data.user?.last_name,
        email: data.user?.email,
        handler_onView_account,
        handler_onView_address,
        handler_onEdit,
        on_account,
        on_address
    }
}