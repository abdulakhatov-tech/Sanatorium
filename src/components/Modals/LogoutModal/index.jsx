import React from 'react';
import { useState } from 'react';
import { useSignOut } from 'react-auth-kit';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ModalContainer } from './style';
import { setLogoutModalVisibility } from '../../../store/modalSlice';

const LogOutModal = () => {
  const { t } = useTranslation();
  const signOut = useSignOut();
  const { logoutModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      localStorage.removeItem('token');
      signOut();
    }, 1000);
  };

  const handleCancel = () => dispatch(setLogoutModalVisibility());

  return (
    <ModalContainer
      width={416}
      title={t('generic.logout')}
      open={logoutModalVisibility}
      onOk={handleOk}
      okText={t('generic.logout')}
      cancelText={t('generic.cancel')}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      cancelButtonProps={{ disabled: confirmLoading ? true : false }}
      className="logout"
    >
      <p>{t('generic.logout_text')}</p>
    </ModalContainer>
  );
};

export default LogOutModal;
