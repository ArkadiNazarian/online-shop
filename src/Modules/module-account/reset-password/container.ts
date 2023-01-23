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
        password: "",
    };

    const validation_schema = yup.object().shape({
        password: yup.string().min(8).required("This field is required")
    });

    const action_submit = (values: IModel) => {
        
    }

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    const form_errors: FormikErrors<IModel> = {
        password: formik.submitCount || formik.touched.password ? formik.errors.password : "",
    };

    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: form_errors,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur
    }
}