import axios from 'axios';

const API_BASE_URL = 'https://api.thecatapi.com/v1/';

///* Create instance of AXIOS with base URL
export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key':
      'live_w4aiCwiXG7A3qk6ixBwphhOoefF2FnAtjWf0xeCr1uo8p5dHt9iKvsXXnKrWNIaV',
  },
});
