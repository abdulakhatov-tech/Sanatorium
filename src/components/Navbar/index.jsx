import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignOut } from 'react-auth-kit';
import { Avatar, Dropdown, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import LocaleModal from './LocaleModal';
import ProfileModal from './ProfileModal';
import { useMenuAPI } from '../../Generic/MenuAPI';
import { switchUserModalVisibility } from '../../redux/navbarSlice';
import { switchLocaleModalVisibility } from '../../redux/modalSlice';

const Navbar = () => {
  const { t } = useTranslation();
  const signOut = useSignOut();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { navbarMenuAPI } = useMenuAPI();

  const confirm = () => {
    Modal.confirm({
      title: t('homeLogOutWarning.title'),
      content: t('homeLogOutWarning.content'),
      okText: t('modal.modal_logout'),
      cancelText: t('modal.modal_canceling'),
      okButtonProps: {
        style: { background: 'red' },
      },
      onOk: () => {
        navigate('/login');
        signOut();
      },
    });
  };

  return (
    <Wrapper>
      <LocaleModal />
      <ProfileModal />
      <Wrapper.Container>
        {/* <Wrapper.Logo src={logo} onClick={navigateHandle} /> */}
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Sanatorium
        </span>
        <Wrapper.ProfileWrapper>
          <Dropdown
            menu={{
              items: navbarMenuAPI({
                settingClickHandler: () =>
                  dispatch(switchUserModalVisibility()),
                logOutClickHandler: () => confirm(),
                languageChangeHandler: () =>
                  dispatch(switchLocaleModalVisibility()),
              }),
            }}
            trigger={['click']}
          >
            <Avatar
              style={{ background: '#f56a00', cursor: 'pointer' }}
              size={{
                xs: 24,
                sm: 32,
                md: 40,
              }}
            >
              A
            </Avatar>
          </Dropdown>
        </Wrapper.ProfileWrapper>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
