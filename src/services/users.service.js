import { getUrl } from '../config/api.config';
import { $axios } from '../hooks/useAxios';

const token = localStorage.getItem('token');

export const UsersService = {
  async getAllUsers() {
    const { data } = await $axios({
      url: `${getUrl('users/all-users')}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },

  async getHalfTimeUsers() {
    const { data } = await $axios({
      url: `${getUrl('users/half-time')}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
};
