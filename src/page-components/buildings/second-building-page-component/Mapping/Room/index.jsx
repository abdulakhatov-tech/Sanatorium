import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { setUserID } from '../../../../../store/userSlice';
import useQueryHandler from '../../../../../hooks/useQuery';
import { leftDays } from '../../../../../helpers/date.helper';
import { setUserModalVisibility } from '../../../../../store/modalSlice';

const RoomComponent = ({ value: { userID } }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, data } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/2/user?_id=${userID}`,
  });

  const roomClickDetector = () => {
    dispatch(setUserModalVisibility());
    dispatch(setUserID({ userID: userID }));
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
