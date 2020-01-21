import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async () => get(`api/users/v1`),
  login: async params => post('api/users/v1/login', params),
  register: async params => post('api/users/v1/register', params)
};

export default { endpoint };
