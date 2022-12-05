import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './Routes/routes';
import { store } from './Redux/store';
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
              {
                app_routes.map((value, index) => (
                  <Route path={value.path} element={value.component} key={index}/>
                ))
              }
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}
