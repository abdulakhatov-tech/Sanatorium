import { $axios } from '../hooks/useAxios';
import { getUrl } from '../config/api.config';

const token = localStorage.getItem('token');

export const StatisticsService = {
  /* ------------------- Get Statistics ------------------- */
  async getStatistics() {
    const { data } = await $axios({
      url: `${getUrl('statistics')}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data?.data;
  },
};
