import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './Routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { axios_config } from './Axios/axios-config';

export function App() {

  // useEffect(() => {
  //   async function getMe() {
  //     const me = await axios_config.get("/auth/me");
  //     console.log(me)
  //   }
  //   getMe();
  // }, []);

  const app_routes = routes();

  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              {
                app_routes.map((value, index) => (
                  <Route path={value.path} element={value.component} key={index}/>
                ))
              }
            </Routes>
          </BrowserRouter>
        </div>
  );
}
