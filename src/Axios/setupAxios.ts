import { sign_out } from "../Modules/module-account/signin/redux/signin-reducer";
import { useAppDispatch } from "../Redux/redux-hooks";

export default function setupAxios(axios: any, store: any) {
  axios.interceptors.request.use(
    (config: any) => {
     const user_data=store.getState()

      if (user_data.account.token) {
        config.headers.authorization = `Bearer ${user_data.account.token}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err)
  );

  axios.interceptors.response.use((response: any) => {
    return response;
  }, (error: any) => {
    if (error.response.status === 401) {
      const dispatch = useAppDispatch();
      dispatch(sign_out())
    }
    return error;
  })
}