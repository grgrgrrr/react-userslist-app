import axios from "axios";
import {API_HOST} from '../config';

export const fetchUsers = () => {
  return axios.get(`${API_HOST}/users`);
};