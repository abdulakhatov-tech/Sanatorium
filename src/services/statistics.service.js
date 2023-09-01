import { $axios } from '../hooks/useAxios';
import { getUrl } from '../config/api.config';
import { getCookie } from '../helpers/auth.helper';

const token = getCookie('_auth');

export const StatisticsService = {
  /* ------------------- Get Statistics ------------------- */
  async getStatistics() {
    const { data } = await $axios({
      url: getUrl('statistics'),
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data?.data;
  },
};
