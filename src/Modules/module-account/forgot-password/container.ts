import { FormikErrors, useFormik } from "formik";
import { IFormModel, IModel } from "./model";
import *as yup from 'yup';
import { route_names } from "../../../Routes/route-names";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useContainer = (): IFormModel => {

    const app_routes = route_names();
    const navigator = useNavigate();

    const initial_values: IModel = {
        email: "",
    };

    const validation_schema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("This field is required")
    });

    const action_submit = (values: IModel) => {
        axios({
            method: "Post",
            url: `${process.env.REACT_APP_API_URL}/auth/forgot-password`,
            responseType: "json",
            data: {
                email: values.email
            } as IModel
        })
            .then(() => {
                toast.success("Please check your email's inbox", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch(() => {
                toast.error('Email not found', {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    const form_errors: FormikErrors<IModel> = {
        email: formik.submitCount || formik.touched.email ? formik.errors.email : "",
    };

    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: form_errors,
        handleChange: formik.handleChange,
        sign_in: app_routes.signin_path,
        handleBlur: formik.handleBlur
    }
}