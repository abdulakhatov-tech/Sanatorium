import { useState } from 'react';
import i18next from 'i18next';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { ModalContainer } from './style';
import { useSegmented } from '../../../tools';
import { CenteredWrapper } from '../../../tools/styles';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { setLangModalVisibility } from '../../../store/modalSlice';

const LanguageModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { localeOptions } = useSegmented();
  const mediaQuery = useMediaQuery('(max-width: 884px)');
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { langModalVisibility } = useSelector((state) => state.modal);
  const [localLang, setLocalLang] = useState(localStorage.getItem('locale'));

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(setLangModalVisibility());
      i18next.changeLanguage(localLang);
      localStorage.setItem('locale', localLang);
      setConfirmLoading(false);
    }, 1000);
  };

  return (
    <ModalContainer
      width={416}
      title={t('local_modal.title')}
      open={langModalVisibility}
      onOk={handleOk}
      okText={t('generic.change')}
      cancelText={t('generic.cancel')}
      confirmLoading={confirmLoading}
      onCancel={() => dispatch(setLangModalVisibility())}
      cancelButtonProps={{ disabled: confirmLoading ? true : false }}
    >
      <CenteredWrapper>
        <Segmented
          size={mediaQuery ? 'small' : 'large'}
          defaultValue={localStorage.getItem('locale')}
          onChange={(e) => setLocalLang(e)}
          options={localeOptions()}
        />
      </CenteredWrapper>
    </ModalContainer>
  );
};

export default LanguageModal;
