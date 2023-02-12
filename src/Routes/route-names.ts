export const route_names = () => {
    const signin_path = "/auth/signin";
    const signup_path = "/auth/signup";
    const default_path = "*";
    const dashboard = "/dashboard";
    const view_account = "/account/view";
    const edit_account = "/account/edit";
    const forgot_password = "/auth/forgot-password";
    const reset_password = "auth/reset-password/:token";
    const products = "/products";
    const view_product = "/products/:id";
    const view_card = "/dashboard/card/view";

    return {
        signin_path,
        signup_path,
        default_path,
        dashboard,
        view_account,
        forgot_password,
        edit_account,
        reset_password,
        products,
        view_product,
        view_card
    }
};