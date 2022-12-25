import { SignIn } from '../Modules/module-account/signin';
import { Signup } from '../Modules/module-account/signup';
import { Home } from '../Modules/module-home/view';
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
            path: app_routes.default_path,
            component: <Signup />
        }
    ]

    const private_routes = [
        {
            path: app_routes.home,
            component: <Home/>
        }
    ]

    return {
        public_routes,
        private_routes
    }
}