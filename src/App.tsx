import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './Routes/routes';
import { store } from './Redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import { axios_config } from './Axios/axios-config';

export function App() {

  const access_token = store.getState()
  axios_config.interceptors.request.use((config) => {
    if (access_token.account.token) {
      config.headers!.Authorization = `Bearer ${access_token.account.token}`;
    }
    console.log(config.headers)
    return config
  },
    (error) => Promise.reject(error)
  )
  let persistor = persistStore(store);
  const app_routes = routes();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              {
                app_routes.map((value, index) => (
                  <Route path={value.path} element={value.component} />
                ))
              }
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}
