import { FormikErrors } from "formik";

export interface IModel {
    email: string;
    password: string;
}

export interface IFormModel {
    action_submit: () => void,
    form_data: IModel,
    form_errors: FormikErrors<IModel>,
    handleChange: (e: any) => void;
    sign_up: string;
    handleBlur: any;
    handler_onView_password: () => void;
    password_visible: boolean;
}

