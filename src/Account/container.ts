import { useFormik } from "formik";
import { IFormModel, IModel } from "./model";
import *as yup from 'yup';
import axios from "axios";
import { useAppDispatch } from "../redux-hooks";
import { add_account } from "./redux";

export const useContainer = (): IFormModel => {

    const dispatch = useAppDispatch();

    const initial_values = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    } as IModel;

    const validation_schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(8).required(),
        first_name: yup.string().required(),
        last_name: yup.string().required()
    });

    const action_submit = (values: IModel) => {

        axios({
            method: "Post",
            url: 'http://localhost:8080/api/v1/auth/register',
            responseType: "json",
            data: {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password
            } as IModel
        })
            .then((response) => {
                console.log(response);
                dispatch(add_account(values))
            })

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