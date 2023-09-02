// ------------------------------ External Imports ------------------------------
import React, { useRef, useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import { Wrapper } from './style';
import { useAxios } from '../../hooks';
import { useErrorNotifier } from '../../tools';
import { formatPhoneNumber } from '../../helpers/auth.helper';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const axios = useAxios();

  /* ------------------- States ------------------- */
  const [warningAnimation, setWarningAnimation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const numberRef = useRef();
  const passwordRef = useRef();

  /* ------------------- Custom hooks ------------------- */
  const { errorNotifier } = useErrorNotifier();

  /* ------------------- To play Button animation ------------------- */
  const playAnimation = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };

  /* ------------------- Keyboard detection ------------------- */
  const onKeyDetect = (e) => {
    if (e.key === 'Enter' || e.type === 'click') return onAuth();
  };

  /* ------------------- To check if the user signed up ------------------- */
  const onAuth = async () => {
    if (loading) return;
    var reg = new RegExp('^[0-9]$');
    const number = numberRef.current.input.value
      .split('')
      .filter((n) => reg.test(n))
      .join('');
    const password = passwordRef.current.input.value;

    if (!password || !number) {
      playAnimation();
      errorNotifier({ errorStatus: 'notFillingError' });
      return;
    }

    setLoading(true);

    const body = {
      password: password,
      phoneNumber: '+998' + number,
    };

    const response = await axios({
      url: '/user/sign-in',
      method: 'POST',
      body: { ...body },
    });

    setLoading(false);

    if (response?.response?.status >= 400)
      return errorNotifier({ errorStatus: response?.response?.status });

    const { token, user } = response.data.data;

    localStorage.setItem('token', token);

    signIn({
      token: token,
      expiresIn: 3600,
      tokenType: 'Bearer',
      authState: user,
    });
    navigate('/');
  };

  /* ------------------- Format User Phone Number ------------------- */
  const phoneNumberFormatter = (e) => {
    setFormattedPhoneNumber(formatPhoneNumber(e.target.value));
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>{t('login_page.title')}</Wrapper.Title>
        <Wrapper.Description>{t('login_page.description')}</Wrapper.Description>
        <Wrapper.Input
          ref={numberRef}
          addonBefore="+998"
          placeholder="(99) 111-11-11"
          bordered={false}
          type="text"
          onChange={phoneNumberFormatter}
          value={formattedPhoneNumber}
        />
        <Wrapper.PasswordInput
          onKeyDown={onKeyDetect}
          ref={passwordRef}
          placeholder={t('login_page.password_placeholder')}
        />
        <Wrapper.Button
          warninganimation={warningAnimation.toString()}
          onClick={onKeyDetect}
        >
          {loading ? <LoadingOutlined /> : t('login_page.button')}
        </Wrapper.Button>
        <p style={{ marginTop: 15 }}>
          Do you have an account?
          <NavLink to="/register">
            <Wrapper.Text>Sign-up</Wrapper.Text>
          </NavLink>
        </p>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
