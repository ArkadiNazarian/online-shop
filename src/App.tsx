import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './Routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAccountSelector, get_identity } from './Modules/module-account/signin/redux/signin-reducer';
import { useAppDispatch } from './Redux/redux-hooks';
import { Routes as PublicRoutes, PrivateRoutes } from './Routes/custom-routes';

export function App() {
  const user_data = useSelector(getAccountSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user_data.token) return
    dispatch(get_identity())
  }, [dispatch, user_data.token])

  const app_routes = routes();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {
              app_routes.private_routes.map((value, index) => (
                <Route path={value.path} element={value.component} key={index} />
              ))
            }
          </Route>
          <Route element={<PublicRoutes />}>
            {
              app_routes.public_routes.map((value, index) => (
                <Route path={value.path} element={value.component} key={index} />
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
