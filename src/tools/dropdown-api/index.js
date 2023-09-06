import {
  SettingOutlined,
  TranslationOutlined,
  LogoutOutlined,
  FileSearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { DropDownContentWrapper } from '../styles';

const useDropDown = () => {
  const { t } = useTranslation();

  const customIconStyle = {
    fontSize: '18px',
  };

  const loginItems = ({ settingHandler, languageHandler, logoutHandler }) => [
    {
      label: (
        <DropDownContentWrapper onClick={settingHandler}>
          {t('dropdown.setting')}
        </DropDownContentWrapper>
      ),
      key: '0',
      icon: <SettingOutlined style={customIconStyle} />,
    },
    {
      label: (
        <DropDownContentWrapper onClick={languageHandler}>
          {t('dropdown.language')}
        </DropDownContentWrapper>
      ),
      key: '1',
      icon: <TranslationOutlined style={customIconStyle} />,
    },

    {
      label: (
        <DropDownContentWrapper
          onClick={logoutHandler}
          style={{ color: 'red' }}
        >
          {t('dropdown.logout')}
        </DropDownContentWrapper>
      ),
      key: '3',
      icon: <LogoutOutlined style={{ ...customIconStyle, color: 'red' }} />,
    },
  ];

  const bookedPlaceItems = ({ inDetail }) => [
    {
      label: (
        <DropDownContentWrapper onClick={inDetail}>
          {t('dropdown.detailed')}
        </DropDownContentWrapper>
      ),
      key: '0',
      icon: <FileSearchOutlined onClick={inDetail} style={customIconStyle} />,
    },
    {
      label: (
        <DropDownContentWrapper>{t('dropdown.edit')}</DropDownContentWrapper>
      ),
      key: '1',
      icon: <EditOutlined style={customIconStyle} />,
    },

    {
      label: (
        <DropDownContentWrapper style={{ color: 'red' }}>
          {t('dropdown.delete')}
        </DropDownContentWrapper>
      ),
      key: '3',
      icon: <DeleteOutlined style={{ ...customIconStyle, color: 'red' }} />,
    },
  ];

  return { loginItems, bookedPlaceItems };
};

export default useDropDown;
