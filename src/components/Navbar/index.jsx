// ------------------------------ External Imports ------------------------------
import { Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
// import Parameters from '../Reports/Parameters';
import { LanguageModal, LogoutModal, SettingsModal } from '../Modals';
import { Wrapper } from './style';
import {
  setLangModalVisibility,
  setSettingModalVisibility,
  setLogoutModalVisibility,
} from '../../store/modalSlice';
import { useDropDown } from '../../tools';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginItems } = useDropDown();

  /* ------------------- User Modal Functions ------------------- */
  const settingHandler = () => dispatch(setSettingModalVisibility());
  const languageHandler = () => dispatch(setLangModalVisibility());
  const logoutHandler = () => dispatch(setLogoutModalVisibility());

  return (
    <>
      {/* ------------------- User Modal ------------------- */}
      <SettingsModal />
      <LogoutModal />
      <LanguageModal />
      {/* <Parameters /> */}
      {/* ------------------- Navbar ------------------- */}
      <Wrapper>
        <Wrapper.Title onClick={() => navigate('/')}>Nihol</Wrapper.Title>
        <Dropdown
          menu={{
            items: loginItems({
              settingHandler,
              languageHandler,
              logoutHandler,
            }),
          }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Wrapper.Avatar>I</Wrapper.Avatar>
        </Dropdown>
      </Wrapper>
      {/* ------------------- Outlet ------------------- */}
      <Outlet />
    </>
  );
};

export default Navbar;
