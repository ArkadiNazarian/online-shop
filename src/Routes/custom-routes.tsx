import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getAccountSelector } from '../Redux/reducers/signin-reducer';
import { route_names } from './route-names';

export const PrivateRoutes = () => {

    const user_data = useSelector(getAccountSelector);
    const route = route_names();

    return user_data.user?._id ? <Outlet /> : <Navigate to={route.signin_path} />
}

export const LegalRoutes = () => {
    const user_data = useSelector(getAccountSelector);
    const route = route_names();

    return user_data.user?._id ? <Navigate to={route.dashboard} /> : <Outlet />
}