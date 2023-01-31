import { FormikErrors } from "formik";

export interface IModel {
    password: string;
}

export interface IFormModel {
    action_submit: () => void,
    form_data: IModel,
    form_errors: FormikErrors<IModel>,
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    loading: boolean;
}