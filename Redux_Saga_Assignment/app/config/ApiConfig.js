import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.chec.io/v1/',
  headers: {
    'X-Authorization': 'sk_52399a1d16daa510ea87f0838081cc3e0e836456d8042',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;
