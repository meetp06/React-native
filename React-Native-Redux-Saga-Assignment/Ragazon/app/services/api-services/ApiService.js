import axios from 'axios';
import { API_CONSTANTS } from '../../constants';

///* Create instance of AXIOS with base URL
const api = axios.create({
  baseURL: API_CONSTANTS.API_BASE_URL,
});

///* Interceptors for response.
api.interceptors.response.use((res) => res.data);

///* Change the client based on requirement
const getHttpClient = () => {
  return api;
};

const apiErrorWrapper = async (apiRequest) => {
  try {
    const response = await apiRequest();
    return response;
  } catch (error) {
    console.log('API request error!', error);
    throw error;
  }
};

//* Our Api service
const client = getHttpClient();

const ApiService = {
  get: (endpoint, queryParams = {}) => {
    const url = `/${endpoint}`;
    const options = {
      params: queryParams,
      headers: API_CONSTANTS.API_HEADER,
    };
    return apiErrorWrapper(() => client.get(url, options));
  },

  post: (endpoint, data) => {
    const url = `/${endpoint}`;
    const options = {
      method: 'POST',
      headers: API_CONSTANTS.API_HEADER,
    };

    return apiErrorWrapper(() =>
      client.post(url, JSON.stringify(data), options)
    );
  },

  put: (endpoint, data) => {
    const url = `/${endpoint}`;
    const options = {
      method: 'PUT',
      headers: API_CONSTANTS.API_HEADER,
    };

    return apiErrorWrapper(() => client.put(url, data, options));
  },

  delete: (endpoint) => {
    const url = `/${endpoint}`;
    const options = {
      method: 'DELETE',
      headers: API_CONSTANTS.API_HEADER,
    };
    return apiErrorWrapper(() => client.delete(url, options));
  },
};

export default ApiService;
