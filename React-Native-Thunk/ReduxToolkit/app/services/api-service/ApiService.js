const API_BASE_URL =
  'https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/';

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
  return fetchApi;
};

const handleApiErrors = async (apiRequest) => {
  try {
    const response = await apiRequest();
    return response;
  } catch (error) {
    console.log('API request error!', error);
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
