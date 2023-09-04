import { useState } from 'react';
import { Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Editing from '../User/Editing';
import Booking from '../User/Booking';
import { ModalWrapper } from './style';
import Observing from '../User/Observing';
import { useSegmented } from '../../../tools';
import { useTranslation } from '../../../hooks';
import { setUserModalVisibility } from '../../../store/modalSlice';

// Segmented checker
const checker = (active) => {
  switch (active) {
    case 'Observing':
      return <Observing />;
    case 'Booking':
      return <Booking />;
    case 'Editing':
      return <Editing />;
    default:
      return <Observing />;
  }
};

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
      {checker(userOption)}
    </ModalWrapper>
  );
};

export default UserModal;
