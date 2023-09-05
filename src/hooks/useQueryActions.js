import { useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';

import useAxios from './useAxios';

// Cache
const useUpdateUserFromCache = () => {
  const queryClient = useQueryClient();

  return ({ id, shouldUpdateData }) => {
    queryClient.setQueryData(`user/${id}`, () => {
      return shouldUpdateData;
    });
  };
};

const useAddUserToCache = () => {
  const queryClient = useQueryClient();
  return ({ buildingNumber, userData }) => {
    queryClient.setQueryData(
      `accommodation/${buildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) => {
          return String(value.roomNumber) === String(userData.roomNumber)
            ? {
                ...value,
                cliente: value?.cliente?.map((value) => {
                  return String(value.clienteID) === String(userData.clienteID)
                    ? {
                        ...value,
                        userID: userData._id,
                      }
                    : value;
                }),
              }
            : value;
        });
      }
    );
  };
};

const useDeleteUserFromCache = () => {
  const queryClient = useQueryClient();

  return ({ buildingNumber, userData }) => {
    userData = queryClient.getQueryData(`user/${userData.userID}`);

    queryClient.setQueryData(
      `accommodation/${buildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) => {
          return String(value.roomNumber) === String(userData.roomNumber)
            ? {
                ...value,
                cliente: value?.cliente?.map((value) => {
                  return String(value.clienteID) === String(userData.clienteID)
                    ? {
                        ...value,
                        userID: '',
                      }
                    : value;
                }),
              }
            : value;
        });
      }
    );
  };
};

// Mutation
const useUpdateUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const updateUserFromCache = useUpdateUserFromCache();

  const buildingNumber = selectedUser?.buildingMutation;

  return useMutation(({ body }) => {
    updateUserFromCache({ id: body._id, shouldUpdateData: body });
    return axios({
      method: 'POST',
      url: `/accomodation/${buildingNumber}/update-user`,
      body,
    });
  });
};

const useAddUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const addUserToCache = useAddUserToCache();

  const buildingNumber = selectedUser?.buildingMutation;

  return useMutation(({ body }) => {
    return axios({
      method: 'POST',
      url: `/accomodation/${buildingNumber}/create-user`,
      body,
    }).then(({ data }) => {
      addUserToCache({
        buildingNumber,
        userData: data.data,
      });
    });
  });
};

const useDeleteUser = () => {
  const axios = useAxios();
  const { selectedUser } = useSelector((state) => state.user);
  const deleteUserFromCache = useDeleteUserFromCache();

  const buildingNumber = selectedUser?.buildingMutation;

  return useMutation(({ body }) => {
    deleteUserFromCache({
      buildingNumber,
      userData: selectedUser,
    });
    axios({
      method: 'DELETE',
      url: `/accomodation/${buildingNumber}/delete-user`,
      body,
    });
  });
};

export { useUpdateUser, useAddUser, useDeleteUser };
