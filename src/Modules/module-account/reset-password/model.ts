import { FormikErrors } from "formik";

export interface IModel {
    new_password: string;
    confirm_password: string;
}

export interface IFormModel {
    password_modal: boolean;
    handler_onView_password: () => void;
    action_submit: () => void,
    form_data: IModel,
    form_errors: FormikErrors<IModel>,
    handleChange: (e: any) => void;
    handleBlur: any;
}

export interface IProps {
    password_modal: boolean;
    handler_onView_password: () => void;
}