import { useState } from 'react';
import { Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Edit from './Edit';
import Observing from './Observing';
import { ModalWrapper } from './style';
import BookedPlaces from './BookedPlaces';
import { useSegmented } from '../../../tools';
import { useTranslation } from '../../../hooks';
import { setBookedPlacesModalVisibility } from '../../../store/modalSlice';

const BookedRoomModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [userOption, setUserOption] = useState('Observing');
  const { bookedPlacesModalVisibility } = useSelector((state) => state.modal);

  const { userOptions } = useSegmented();

  console.log(bookedPlacesModalVisibility);

  return (
    <ModalWrapper
      open={bookedPlacesModalVisibility}
      onCancel={() => dispatch(setBookedPlacesModalVisibility())}
      title={t('information_about_user.title')}
      footer={null}
    >
      <Segmented
        block
        options={userOptions()}
        onChange={(e) => setUserOption(e)}
        defaultValue="Observing"
      />
      {userOption === 'Observing' ? (
        <Observing />
      ) : userOption === 'Booked places' ? (
        <BookedPlaces />
      ) : (
        <Edit />
      )}
    </ModalWrapper>
  );
};

export default BookedRoomModal;
