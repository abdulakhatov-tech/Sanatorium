import { useQuery } from 'react-query';
import { useAxios } from './useAxios2';

const useQueryHandler = ({ queryKey, queryLink, method, body }) => {
  const axios = useAxios();

  return useQuery(
    queryKey,
    () =>
      axios({
        url: queryLink,
        method,
        body,
      }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export default useQueryHandler;
