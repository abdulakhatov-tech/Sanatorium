import { getAllUsersUrl } from '../config/api.config';
import { $axios } from '../hooks/useAxios';

const token = localStorage.getItem('token');

export const UsersService = {
  async getAllUsers() {
    const { data } = await $axios({
      url: `${getAllUsersUrl('users/all-users')}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
};
