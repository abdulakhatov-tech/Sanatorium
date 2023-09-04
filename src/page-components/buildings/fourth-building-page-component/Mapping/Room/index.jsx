import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { setSelectedUser } from '../../../../../store/userSlice';
import useQueryHandler from '../../../../../hooks/useQuery';
import { leftDays } from '../../../../../helpers/date.helper';
import { setUserModalVisibility } from '../../../../../store/modalSlice';

const RoomComponent = ({ value }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, data } = useQueryHandler({
    queryKey: `user/${value?.userID}`,
    queryLink: `/accomodation/4/user?_id=${value?.userID}`,
  });

  const roomClickDetector = () => {
    dispatch(setUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: value.userID,
        buildingMutation: '4',
        clienteValue: value,
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

export default RoomComponent;
