import { IModel } from "./model";

export const useContainer = (value: IModel): IModel => {

    return {
        handler_onView_password:value.handler_onView_password,
        password_modal:value.password_modal
    }
}