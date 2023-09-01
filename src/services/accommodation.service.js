import { $axios } from '../hooks/useAxios';
import { getUrl } from '../config/api.config';
import { getCookie } from '../helpers/auth.helper';

const token = getCookie('_auth');

export const AccommodationService = {
  async getAccommodation(url) {
    const { data } = await $axios({
      url: getUrl(url),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
};
