import { getUrl } from '../config/api.config';
import { getCookie } from '../helpers/auth.helper';
import { $axios } from '../hooks/useAxios';

const token = getCookie('_auth');

export const UsersService = {
  // ------------------------------ Get All Users ------------------------------
  async getAllUsers() {
    const { data } = await $axios({
      url: getUrl('users/all-users'),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },

  // ------------------------------ Get Half Time Users ------------------------------
  async getHalfTimeUsers() {
    const { data } = await $axios({
      url: getUrl('users/half-time'),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },

  // ------------------------------ Get End Time Users ------------------------------
  async getEndTimeUsers() {
    const { data } = await $axios({
      url: getUrl('users/half-time'),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
};
