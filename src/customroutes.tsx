import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getUserSelector } from './Redux/reducers/signin-reducer';
import { route_names } from './Routes/route-names';

export const PrivateRoutes = () => {

    const user_data = useSelector(getUserSelector);
    const route = route_names();
    
    return user_data ? <Outlet /> : <Navigate to={route.signin_path} />
}