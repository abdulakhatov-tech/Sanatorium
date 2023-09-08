import dayjs from 'dayjs';
import { Tooltip } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import useQueryHandler from '../../../../../hooks/useQuery';
import { BookedTag, Room } from '../../../../../Generic/Styles';
import { setSelectedUserData } from '../../../../../redux/userSlice';
import { switchUserModalVisibility } from '../../../../../redux/modalSlice';

const RoomComponent = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/6-2/user?_id=${clienteInfo?.userID}`,
    queryKey: `user/${clienteInfo?.userID}`,
    method: 'GET',
  });

  return (
    <Room
      color={clienteInfo.userID ? 'red' : 'processing'}
      onClick={() => {
        if (!isLoading) {
          dispatch(switchUserModalVisibility());
          dispatch(
            setSelectedUserData({
              ...clienteInfo,
              mutationBuildingNumber: '6-2',
            })
          );
        }
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title={t('booking.title')}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
      {isLoading && <LoadingOutlined />}
      {!isLoading &&
        clienteInfo.userID &&
        dayjs(Number(data?.endDate)).diff(new Date().toDateString(), 'd')}
    </Room>
  );
};

export default RoomComponent;
