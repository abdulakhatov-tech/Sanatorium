import { Modal, Segmented } from 'antd';
import { useState } from 'react';
import OrdinaryUser from './OrdinaryUser';
import VoucherUser from './VoucherUser';
import { useDispatch, useSelector } from 'react-redux';
import { setAddUserModalVisibility } from '../../../../store/modalSlice';

const AddUser = () => {
  const dispatch = useDispatch();
  const { addUserModalVisibility } = useSelector((state) => state.modal);
  const [modalType, setModalType] = useState('Ordinary');

  return (
    <Modal
      title="Add User"
      okText="Add"
      open={addUserModalVisibility}
      onCancel={() => dispatch(setAddUserModalVisibility())}
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
