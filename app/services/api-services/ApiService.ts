import axios from 'axios';
import { ApiConstant } from '../../constants';

const Api = axios.create({
  baseURL: ApiConstant.Api_Base_Url,
});

export default Api;
