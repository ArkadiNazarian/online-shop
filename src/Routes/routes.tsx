import { SignIn } from '../module-signin/content/index';
import { Signup } from '../module-signup/content/index';
import { route_names } from './route-names';


export const routes = () => {
    const app_routes = route_names();

    const application_routes = [
        {
            path: app_routes.signup_path,
            component: <Signup />
        },
        {
            path: app_routes.signin_path,
            component: <SignIn />
        },
        {
            path: app_routes.default_path,
            component: <Signup />
        }
    ]

    return application_routes
}