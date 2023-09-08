import { useState } from 'react';
import { Modal, Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import RegularUser from './RegularUser';
import VoucherUser from './VoucherUser';
import { switchAddUserModalVisibility } from '../../../../../redux/modalSlice';

const AddModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [type, setType] = useState('regular');
  const { userAddModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal
      mask={true}
      title={t('commonUser.addModal.title')}
      open={userAddModalVisibility.open}
      onCancel={() =>
        userAddModalVisibility.loading
          ? false
          : dispatch(
              switchAddUserModalVisibility({ loading: false, open: false })
            )
      }
      footer={false}
    >
      <Segmented
        defaultValue={t('commonUser.addModal.ordinary')}
        block
        options={[
          t('commonUser.addModal.ordinary'),
          t('commonUser.addModal.voucher'),
        ]}
        onChange={(e) =>
          e === t('commonUser.addModal.ordinary')
            ? setType('regular')
            : setType('voucher')
        }
      />
      {type === 'regular' ? <RegularUser /> : <VoucherUser />}
    </Modal>
  );
};

export default AddModal;
