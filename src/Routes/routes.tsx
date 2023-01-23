import { ForgotPassword } from '../Modules/module-account/forgot-password';
import { ResetPassword } from '../Modules/module-account/reset-password';
import { SignIn } from '../Modules/module-account/signin/component';
import { Signup } from '../Modules/module-account/signup/component';
import { Dashboard } from '../Modules/module-dashboard/view';
import { EditAccount } from '../Modules/module-user/edit-account';
import { ViewAccount } from '../Modules/module-user/view-account';
import { route_names } from './route-names';


export const routes = () => {
    const app_routes = route_names();

    const public_routes = [
        {
            path: app_routes.signup_path,
            component: <Signup />
        },
        {
            path: app_routes.signin_path,
            component: <SignIn />
        },
        {
            path: app_routes.forgot_password,
            component: <ForgotPassword />
        },
        {
            path: app_routes.reset_password,
            component: <ResetPassword />
        }
    ];

    const private_routes = [
        {
            path: app_routes.dashboard,
            component: <Dashboard />
        },
        {
            path: app_routes.view_account,
            component: <ViewAccount />
        },
        {
            path: app_routes.default_path,
            component: <Dashboard />
        },
        {
            path: app_routes.edit_account,
            component: <EditAccount />
        }
    ];

    return {
        public_routes,
        private_routes
    }
}