import axios from 'axios'
import store from '../../store'

//setting base url for the api
axios.defaults.baseURL = process.env.API_URL

//intercept api calls to attach the token automatically
axios.interceptors.request.use((config) => {
    let {token} = store.state;
    config.headers[process.env.TOKEN_HEADER] = token;
    return config;
  });