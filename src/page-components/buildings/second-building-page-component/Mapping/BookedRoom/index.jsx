import { useDispatch } from 'react-redux';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import { setBookedPlacesModalVisibility } from '../../../../../store/modalSlice';
import { setSelectedUser } from '../../../../../store/userSlice';

const BookedRoom = ({ clienteValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const roomClickDetector = () => {
    dispatch(setBookedPlacesModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: '2',
        clienteValue: clienteValue,
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
