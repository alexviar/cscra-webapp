import axios from 'axios'
import {baseUrl} from '../../configs/app.json'
import Qs from 'qs'

const apiClient = axios.create({
  "baseURL": baseUrl,
  "timeout": 30000
})

apiClient.defaults.withCredentials = true

apiClient.interceptors.request.use(config => {

  config.paramsSerializer = params => {
    // Qs is not included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: "brackets",
      encode: false
    });
  };

  return config;
});

export default apiClient