import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { BookedTag, Room } from '../../../../../Generic/Styles';
import { setSelectedUserData } from '../../../../../redux/userSlice';
import { switchUserModalVisibility } from '../../../../../redux/modalSlice';

const BookedRoom = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Room
      color={'processing'}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: '6-2' })
        );
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title={t('booking.title')}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
