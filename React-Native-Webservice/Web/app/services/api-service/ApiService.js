import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

///* Create instance of AXIOS with base URL
const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use((req) => {
    console.log('====================================');
    console.log(req.data, 'req');
    console.log('====================================');
    return req;
});

api.interceptors.response.use((res) => res.data);

///* Fetch api call
const makeApiCall = async (url, options) => {
    const response = await fetch(API_BASE_URL + url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return { data: await response.json() };
};

///* For the fetch
const fetchApi = {
    get: async (url, options) => {
        return await makeApiCall(url, options);
    },

    post: async (url, data, options) => {
        options.body = data;
        return await makeApiCall(url, options);
    },

    put: async (url, data, options) => {
        options.body = data;
        return await makeApiCall(url, options);
    },

    delete: async (url, options) => {
        return await makeApiCall(url, options);
    },
};

///* Change the client based on requirement
const getHttpClient = () => {
    // Change this to switch between axios and fetch
    return api;
    // return fetchApi;
};

const handleApiErrors = async (apiRequest) => {
    try {
        const response = await apiRequest();
        return response;
    } catch (error) {
        console.error('API request error!', error);
    }
};

//* Our Api service
const client = getHttpClient();

const ApiService = {
    get: (endpoint, queryParams = {}) => {
        const url = `/${endpoint}`;
        const options = {
            params: queryParams,
        };
        return handleApiErrors(() => client.get(url, options));
    },

    post: (endpoint, data) => {
        const url = `/${endpoint}`;
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        return handleApiErrors(() =>
            client.post(url, JSON.stringify(data), options)
        );
    },

    put: (endpoint, data) => {
        const url = `/${endpoint}`;
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        };

        return handleApiErrors(() => client.put(url, data, options));
    },

    delete: (endpoint) => {
        const url = `/${endpoint}`;
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        return handleApiErrors(() => client.delete(url, options));
    },
};

export default ApiService;
