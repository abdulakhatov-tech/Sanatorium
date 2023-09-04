import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import useAxios from './useAxios';

const useUpdateUserFromCache = () => {
  const queryClient = useQueryClient();

  return ({ id, shouldUpdateData }) => {
    queryClient.setQueryData(`user/${id}`, (oldQueryDate) => {
      return shouldUpdateData;
    });
  };
};

const useUpdateUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const updateUserFromCache = useUpdateUserFromCache();

  const buildingNumber = selectedUser?.buildingMutation || 2;

  return useMutation(({ body }) => {
    updateUserFromCache({ id: body._id, shouldUpdateData: body });
    return axios({
      method: 'POST',
      url: `/accomodation/${buildingNumber}/update-user`,
      body,
    });
  });
};

export default useUpdateUser;
