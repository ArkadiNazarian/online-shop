import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './Account';
import './index.css';
import { routes } from './Routes/routes';
import { store } from './store';

export function App() {

  const app_routes = routes();

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path={app_routes.default_path} />
            <Route path={app_routes.account_path} element={<Account />} />
            <Route path={app_routes.products_path} />

          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
