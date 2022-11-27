import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './Account';
import './index.css';
import { routes } from './Routes/routes';
import { SignIn } from './Signin';
import { store } from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  let persistor = persistStore(store);
  const app_routes = routes();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path={app_routes.default_path} element={<Account />} />
              <Route path={app_routes.account_path} element={<Account />} />
              <Route path={app_routes.products_path} />
              <Route path={app_routes.sigin_path} element={<SignIn />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}
