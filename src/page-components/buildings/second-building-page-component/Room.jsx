import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';

import { Tooltip } from '../../../tools';
import { Room } from '../../../tools/styles';
import { setUserID } from '../../../store/userSlice';
import { getNumberOfDays } from '../../../helpers/date.helper';
import { AccommodationService } from '../../../services/accommodation.service';
import { setUserModalVisibility } from '../../../store/modalSlice';

const RoomComponent = ({ value: { userID } }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isLoading, data } = useQuery(
    `user/${userID}`,
    () =>
      AccommodationService.getAccommodation(
        `accomodation/2/user?_id=${userID}`
      ),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    dispatch(setUserID({ userID: userID }));
  }, [userID, dispatch]);

  //   get Number of left days
  const leftDays = !isLoading && getNumberOfDays(data.data);

  return (
    <Tooltip title={t('tooltip.busy_room')} color={'red'}>
      <Room
        color="red"
        onClick={() => !isLoading && dispatch(setUserModalVisibility())}
      >
        {isLoading ? <LoadingOutlined /> : leftDays}
      </Room>
    </Tooltip>
  );
};

export default RoomComponent;
