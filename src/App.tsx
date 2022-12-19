import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './Routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAccountSelector, get_identity } from './Redux/reducers/signin-reducer';
import { useAppDispatch } from './Redux/redux-hooks';
import { PrivateRoutes } from './customroutes';

export function App() {
  const token = useSelector(getAccountSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token.token) return
    dispatch(get_identity())
  }, [dispatch, token.token])

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
          {
            app_routes.public_routes.map((value, index) => (
              <Route path={value.path} element={value.component} key={index} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}
