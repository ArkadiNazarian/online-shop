import { FormikErrors, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import *as yup from 'yup';
import { route_names } from '../../../Routes/route-names';
import { getAccountSelector } from '../../module-account/signin/redux/signin-reducer';
import { IFormModel, IModel } from './model';

export const useContainer = (): IFormModel => {

    const navigator = useNavigate();
    const app_routes = route_names();

    const user_data = useSelector(getAccountSelector);

    const initial_values = {
        first_name: "",
        last_name: "",
        email: ""
    } as IModel;

    const [account_details, set_account_details] = useState(initial_values);

    const validation_schema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("This field is required"),
        first_name: yup.string().required("This field is required"),
        last_name: yup.string().required("This field is required")
    });

    const action_submit = (values: IModel) => {

    }

    const handler_discard = () => {
        navigator(app_routes.view_account)
    }

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    const form_errors: FormikErrors<IModel> = {
        email: formik.submitCount || formik.touched.email ? formik.errors.email : "",
        first_name: formik.submitCount || formik.touched.first_name ? formik.errors.first_name : "",
        last_name: formik.submitCount || formik.touched.last_name ? formik.errors.last_name : ""
    };

    useEffect(() => {

        const modified_data: IModel = {
            first_name: user_data.user?.first_name,
            last_name: user_data.user?.last_name,
            email: user_data.user?.email
        };

        set_account_details(modified_data);
    }, [user_data]);

    useEffect(() => {
        formik.setValues(account_details);
    }, [account_details]);

    return {
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: form_errors,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        handler_discard
    }
}