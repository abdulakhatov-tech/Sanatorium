import { useState } from 'react';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Edit from './Edit';
import { ModalWrapper } from './style';
import Observing from './Observing';
import BookedPlaces from './BookedPlaces';
import { useSegmented } from '../../../tools';
import { setUserModalVisibility } from '../../../store/modalSlice';

const UserModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [userOption, setUserOption] = useState('Observing');
  const { userModalVisibility } = useSelector((state) => state.modal);

  const { userOptions } = useSegmented();

  return (
    <ModalWrapper
      open={userModalVisibility}
      onCancel={() => dispatch(setUserModalVisibility())}
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

export default UserModal;
