import { useState } from 'react';
import { Modal, Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Booking from './Booking';
import Editing from './Editing';
import Observing from './Observing';
import { switchUserModalVisibility } from '../../../../redux/modalSlice';

const UserModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [type, setType] = useState('observing');
  const { userModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      title={t('userModal.title')}
      footer={false}
    >
      <Segmented
        block
        options={[
          t('userModal.observing'),
          t('userModal.booking'),
          t('userModal.editing'),
        ]}
        onChange={(e) =>
          e === t('userModal.observing')
            ? setType('observing')
            : e === t('userModal.editing')
            ? setType('editing')
            : setType('booking')
        }
      />
      {type === 'observing' ? (
        <Observing />
      ) : type === 'editing' ? (
        <Editing />
      ) : (
        <Booking />
      )}
    </Modal>
  );
};

export default UserModal;
