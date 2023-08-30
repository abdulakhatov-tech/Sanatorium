import React from 'react';
import { useState } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ModalContainer } from './style';
import { CenteredWrapper } from '../../../tools/styles';
import { setSettingModalVisibility } from '../../../store/modalSlice';

const { Text } = Typography;

const SettingsModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { settingModalVisibility } = useSelector((state) => state.modal);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => dispatch(setSettingModalVisibility());

  return (
    <ModalContainer
      width={416}
      title={t('generic.profile')}
      open={settingModalVisibility}
      onOk={handleOk}
      okText={t('generic.save')}
      cancelText={t('generic.cancel')}
      confirmLoading={confirmLoading}
      okButtonProps={{ disabled: true }}
      onCancel={handleCancel}
    >
      <CenteredWrapper>
        <ModalContainer.Wrapper>
          <ModalContainer.Avatar>I</ModalContainer.Avatar>
          <ModalContainer.Form>
            <ModalContainer.Form.Item>
              <ModalContainer.Form.Label>
                {t('generic.name')}:
              </ModalContainer.Form.Label>
              <ModalContainer.Form.Input placeholder="" disabled />
            </ModalContainer.Form.Item>
            <ModalContainer.Form.Item>
              <ModalContainer.Form.Label>
                {t('generic.surname')}:
              </ModalContainer.Form.Label>
              <ModalContainer.Form.Input placeholder="" disabled />
            </ModalContainer.Form.Item>
          </ModalContainer.Form>
        </ModalContainer.Wrapper>
        <Text type="secondary" style={{ marginTop: '20px' }}>
          Nihol 0.0.1 {t('generic.version')}
        </Text>
      </CenteredWrapper>
    </ModalContainer>
  );
};

export default SettingsModal;
