import axios from 'axios';
import store from "../../store";

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
});
http.interceptors.request.use(config => {
    debugger;
    const state = store.getState();
    if (state.auth.user) {
        config.headers.authorization = state.auth.user._id || '';
    }
    return Promise.resolve(config);
});

http.interceptors.request.use(
  config => {
    return Promise.resolve(config);
  });
http.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    return Promise.reject(error);
  });


export default http;