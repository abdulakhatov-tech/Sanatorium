import { Wrapper } from './style';
import { useSelector } from 'react-redux';
import { useQueryClient } from 'react-query';

import EmptyUser from '../EmptyUser';
import VoucherUserEditing from '../../../Common/User/Editing/VoucherUserEditing';
import RegularUserEditing from '../../../Common/User/Editing/RegularUserEditing';

const Editing = () => {
  const queryClient = useQueryClient();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);

  const accomodationData = queryClient.getQueryData(
    `accomodation/${selectedUserData?.mutationBuildingNumber}`
  );

  const [clienteData] = accomodationData[
    selectedUserData?.roomOrder
  ].cliente.filter((value) => value?.clienteID === selectedUserData?.clienteID);

  return (
    <Wrapper>
      {!clienteData.userID ? (
        <EmptyUser />
      ) : data?.hasVoucher ? (
        <VoucherUserEditing />
      ) : (
        <RegularUserEditing />
      )}
    </Wrapper>
  );
};

export default Editing;
