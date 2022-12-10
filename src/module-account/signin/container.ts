import { useFormik } from "formik";
import { IFormModel, IModel } from "./model";
import *as yup from 'yup';
import axios from "axios";
import { useAppDispatch } from "../../Redux/redux-hooks";
import { set_user } from "../../Redux/reducers/signin-reducer";
import { toast } from "react-toastify";

export const useContainer = (): IFormModel => {

    const dispatch = useAppDispatch();
    
    const initial_values = {
        email: "",
        password: ""
    } as IModel;

    const validation_schema = yup.object().shape({
        email: yup.string().required("This field is required"),
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
                dispatch(set_user({
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

    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange
    }
}