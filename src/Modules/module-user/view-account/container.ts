import { useState } from "react";
import { useSelector } from "react-redux";
import { getAccountSelector } from "../../module-account/signin/redux/signin-reducer";
import { IFormModel } from "./model";

export const useContainer = (): IFormModel => {

    const data = useSelector(getAccountSelector);

    const [on_account, set_on_account] = useState<boolean>(true);
    const [on_address, set_on_address] = useState<boolean>(false);
    const [on_password, set_on_password] = useState<boolean>(false);

    const handler_onView_account=()=>{
        set_on_account(true);
        set_on_address(false);
        set_on_password(false);
    }

    const handler_onView_address=()=>{
        set_on_account(false);
        set_on_address(true);
        set_on_password(false);
    }

    const handler_onView_password=()=>{
        set_on_account(false);
        set_on_address(false);
        set_on_password(true);
    }
    return {
        first_name: data.user?.first_name,
        last_name: data.user?.last_name,
        email: data.user?.email,
        handler_onView_account,
        handler_onView_address,
        handler_onView_password,
        on_account,
        on_address,
        on_password
    }
}