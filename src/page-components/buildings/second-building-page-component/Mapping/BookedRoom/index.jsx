import { useDispatch } from 'react-redux';

import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import { setSelectedUser } from '../../../../../store/userSlice';
import { setUserModalVisibility } from '../../../../../store/modalSlice';

const BookedRoom = ({ roomValue, clienteValue, buildingNumber }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const roomClickDetector = () => {
    dispatch(setUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue?.userID,
        buildingMutation: buildingNumber,
        clienteValue,
        roomValue,
      })
    );
  };

  return <Room color="processing" onClick={roomClickDetector} />;
};

export default BookedRoom;
