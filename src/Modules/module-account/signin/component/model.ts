import { FormikErrors } from "formik";

export interface IModel {
    email: string;
    password: string;
}

export interface IFormModel {
    action_submit: () => void;
    form_data: IModel;
    form_errors: FormikErrors<IModel>;
    handleChange: (e: any) => void;
    sign_up: string;
    forgot_password: string;
    handleBlur: (e: any) => void;
    loading: boolean;
}

