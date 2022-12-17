export default function setupAxios(axios: any, store: any) {
    axios.interceptors.request.use(
      (config: any) => {
        const {
          user: { token },
        } = store.getState();
  
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
  
        return config;
      },
      (err: any) => Promise.reject(err)
    );
  }