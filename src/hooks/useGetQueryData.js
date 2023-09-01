import { useQueryClient } from 'react-query';

const useGetQueryDataHandler = ({ queryKey }) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(queryKey);
};

export default useGetQueryDataHandler;
