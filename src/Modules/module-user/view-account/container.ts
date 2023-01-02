import { useState } from "react";
import { useSelector } from "react-redux";
import { getAccountSelector } from "../../module-account/signin/redux/signin-reducer";
import { IFormModel } from "./model";

export const useContainer = (): IFormModel => {

    const data = useSelector(getAccountSelector);

    const [on_account, set_on_account] = useState<boolean>(false);

    const handler_onView_account=()=>{
        set_on_account(on_account=>!on_account);
    }

    return {
        first_name: data.user?.first_name,
        last_name: data.user?.last_name,
        email: data.user?.email,
        handler_onView_account,
        on_account
    }
}