import { FormikErrors, useFormik } from "formik";
import { IFormModel, IModel } from "./model";
import *as yup from 'yup';
import axios from "axios";
import { useAppDispatch } from "../../Redux/redux-hooks";
import { set_account } from "../../Redux/reducers/signin-reducer";
import { toast } from "react-toastify";
import { route_names } from "../../Routes/route-names";

export const useContainer = (): IFormModel => {

    const dispatch = useAppDispatch();
    const app_routes = route_names();

    const initial_values = {
        email: "",
        password: ""
    } as IModel;

    const validation_schema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("This field is required"),
        password: yup.string().min(8).required("This field is required")
    });

    const action_submit = (values: IModel) => {

        axios({
            method: "Post",
            url: `${process.env.REACT_APP_API_URL}/auth/login`,
            responseType: "json",
            data: {
                email: values.email,
                password: values.password
            } as IModel
        })
            .then((response) => {
                dispatch(set_account({
                    token: response.data.token
                }))
            })
            .catch((response) => {
                console.log(response)
                toast.error('Wrong Email or Password', {
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
        password: formik.submitCount || formik.touched.password ? formik.errors.password : ""
	};

    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: form_errors,
        handleChange: formik.handleChange,
        sign_up: app_routes.signup_path,
        handleBlur: formik.handleBlur
    }
}