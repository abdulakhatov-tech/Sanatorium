import { useDispatch } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import useQueryHandler from '../../../../../hooks/useQuery';
import { leftDays } from '../../../../../helpers/date.helper';
import { setSelectedUser } from '../../../../../store/userSlice';
import { setUserModalVisibility } from '../../../../../store/modalSlice';

const OccupiedRoom = ({ clienteValue, roomValue, buildingNumber }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Get User Info
  const { isLoading, data } = useQueryHandler({
    queryKey: `user/${clienteValue?.userID}`,
    queryLink: `/accomodation/2/user?_id=${clienteValue?.userID}`,
  });

  const roomClickDetector = () => {
    if (isLoading) return;

    // Open User Modal
    dispatch(setUserModalVisibility());
    // Set User Info
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: buildingNumber,
        clienteValue,
        roomValue,
      })
    );
  };

  return (
    <Tooltip title={t('tooltip.busy_room')} color={'red'}>
      <Room color="red" onClick={roomClickDetector}>
        {isLoading ? <LoadingOutlined /> : leftDays(data.endDate)}
      </Room>
    </Tooltip>
  );
};

export default OccupiedRoom;
