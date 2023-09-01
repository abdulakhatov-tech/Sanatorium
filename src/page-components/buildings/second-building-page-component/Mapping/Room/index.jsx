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

  // set userID
  useEffect(() => {
    dispatch(setUserID({ userID: userID }));
  }, [userID, dispatch]);

  return (
    <Tooltip title={t('tooltip.busy_room')} color={'red'}>
      <Room
        color="red"
        onClick={() => !isLoading && dispatch(setUserModalVisibility())}
      >
        {isLoading ? <LoadingOutlined /> : leftDays(data.data.data.endDate)}
      </Room>
    </Tooltip>
  );
};

export default RoomComponent;
