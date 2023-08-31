import { getUrl } from '../config/api.config';
import { $axios } from '../hooks/useAxios';

export const AuthService = {
  // ------------------------------ Sign Up User ------------------------------
  async registerUser(body) {
    const data = await $axios({
      url: getUrl('user/sign-up'),
      method: 'POST',
      body: { ...body },
    });

    return data;
  },

  // ------------------------------ Sign In User ------------------------------
  async loginUser(body) {
    const data = await $axios({
      url: getUrl('user/sign-in'),
      method: 'POST',
      body: { ...body },
    });

    return data;
  },
};
