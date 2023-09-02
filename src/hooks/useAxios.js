import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_URL}/api`;

export const useAxios = () => {
  return async ({ url, method = 'GET', body, headers }) => {
    return await axios({
      url: `${API_URL}${url}`,
      method,
      data: JSON.stringify({
        ...body,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'Allow-Control-Origin': true,
        ...headers,
      },
    })
      .then((response) => response)
      .catch((error) => error);
  };
};

export default useAxios;
