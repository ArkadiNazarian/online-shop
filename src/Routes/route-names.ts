export const route_names = () => {
    const signin_path = "/auth/signin";
    const signup_path = "/auth/signup";
    const default_path = "*";
    const dashboard="/dashboard";
    const view_account="/dashboard/view-account";
    const forgot_password="/auth/forgot-password";

    return {
        signin_path,
        signup_path,
        default_path,
        dashboard,
        view_account,
        forgot_password
    }
}