import { FormikErrors, useFormik } from "formik";
import { IFormModel, IModel, IProps } from "./model";
import *as yup from 'yup';

export const useContainer = (value: IProps): IFormModel => {

    const initial_values: IModel = {
        new_password: "",
        confirm_password: ""
    };

    const validation_schema = yup.object().shape({
        new_password: yup.string().min(8).required("This field is required"),
        confirm_password: yup.string().oneOf([yup.ref('new_password'), null], 'Password must match').required("This field is required")
    });

    const action_submit = (values: IModel) => {

        console.log(value)

    }

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    const form_errors: FormikErrors<IModel> = {
        new_password: formik.submitCount || formik.touched.new_password ? formik.errors.new_password : "",
        confirm_password: formik.submitCount || formik.touched.confirm_password ? formik.errors.confirm_password : ""
    };

    return {
        handler_onView_password: value.handler_onView_password,
        password_modal: value.password_modal,
        action_submit : formik.handleSubmit,
        form_data:formik.values,
        form_errors: form_errors,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur
    }
}