import { SignIn } from '../module-account/signin';
import { Signup } from '../module-account/signup';
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