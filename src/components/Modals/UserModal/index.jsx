import { useState } from 'react';
import { Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Editing from './Editing';
import Observing from './Observing';
import { ModalWrapper } from './style';
import BookedPlaces from './BookedPlaces';
import { useSegmented } from '../../../tools';
import { useTranslation } from '../../../hooks';
import { setUserModalVisibility } from '../../../store/modalSlice';

const UserModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { userOptions } = useSegmented();

  const [userOption, setUserOption] = useState('Observing');
  const { userModalVisibility } = useSelector((state) => state.modal);

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
      ) : userOption === 'BookedPlaces' ? (
        <BookedPlaces />
      ) : (
        <Editing />
      )}
    </ModalWrapper>
  );
};

export default UserModal;
