import { useState } from 'react';
import { Modal, Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import VoucherUser from './VoucherUser';
import OrdinaryUser from './OrdinaryUser';
import { useTranslation } from '../../../../hooks';
import { setAddUserModalVisibility } from '../../../../store/modalSlice';

const AddUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { addUserModalVisibility } = useSelector((state) => state.modal);
  const [modalType, setModalType] = useState('Ordinary');

  return (
    <Modal
      title={t('information_about_user.add_user.title') || 'Add User'}
      open={addUserModalVisibility}
      onCancel={() => dispatch(setAddUserModalVisibility())}
      footer={false}
    >
      <Segmented
        block
        options={['Ordinary', 'Voucher']}
        onChange={(e) => setModalType(e)}
      />
      {modalType === 'Ordinary' ? <OrdinaryUser /> : <VoucherUser />}
    </Modal>
  );
};

export default AddUser;
