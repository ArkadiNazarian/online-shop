import { ForgotPassword } from '../Modules/module-account/forgot-password';
import { SignIn } from '../Modules/module-account/signin/component';
import { Signup } from '../Modules/module-account/signup/component';
import { Dashboard } from '../Modules/module-dashboard/view';
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
        }
        
    ]

    const private_routes = [
        {
            path: app_routes.dashboard,
            component: <Dashboard/>
        },
        {
            path: app_routes.view_account,
            component: <ViewAccount/>
        },
        {
            path: app_routes.default_path,
            component: <Dashboard />
        }
    ]

    return {
        public_routes,
        private_routes
    }
}