import { FormikErrors } from "formik";

export interface IModel {
    first_name?: string;
    last_name?: string;
    email?: string;
}

export interface IFormModel {
    action_submit: () => void;
    handler_discard: () => void;
    form_data: IModel;
    form_errors: FormikErrors<IModel>;
    handleChange: (e: any) => void;
    handleBlur: any;
}