import { useDispatch } from 'react-redux';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import { setSelectedUser } from '../../../../../store/userSlice';
import { setUserModalVisibility } from '../../../../../store/modalSlice';

const BookedRoom = ({ roomValue, clienteValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const roomClickDetector = () => {
    dispatch(setUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue?.userID,
        buildingMutation: '2',
        clienteValue,
        roomValue,
      })
    );
  };

  return (
    <Tooltip title={t('tooltip.booked_room')} color={'blue'}>
      <Room color="processing" onClick={roomClickDetector} />
    </Tooltip>
  );
};

export default BookedRoom;
