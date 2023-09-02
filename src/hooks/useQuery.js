import { useQuery } from 'react-query';
import useAxios from './useAxios';

const useQueryHandler = ({ queryKey, queryLink, method, body }) => {
  const axios = useAxios();

  return useQuery(
    queryKey,
    () =>
      axios({
        url: queryLink,
        method,
        body,
      }).then((response) => response?.data?.data),

    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export default useQueryHandler;
