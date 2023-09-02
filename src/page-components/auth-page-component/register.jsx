// ------------------------------ External Imports ------------------------------
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

// ------------------------------ Internal Imports ------------------------------
import { Wrapper } from './style';
import { useErrorNotifier } from '../../tools';
import { formatPhoneNumber } from '../../helpers/auth.helper';
import { useSignIn } from 'react-auth-kit';
import { useAxios } from '../../hooks';

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const axios = useAxios();

  /* ------------------- States ------------------- */
  const [warningAnimation, setWarningAnimation] = useState(false);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
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
    // navigate('/login');
    // return;
    if (e.key === 'Enter' || e.type === 'click') return onAuth();
  };

  const onAuth = async () => {
    if (loading) return;

    var reg = new RegExp('^[0-9]$');
    const firstName = firstNameRef.current.input.value;
    const lastName = lastNameRef.current.input.value;
    const number = numberRef.current.input.value
      .split('')
      .filter((n) => reg.test(n))
      .join('');
    const password = passwordRef.current.input.value;

    if (!firstName || !lastName || !password || !number) {
      playAnimation();
      errorNotifier({ errorStatus: 'notFillingError' });
      return;
    }

    setLoading(true);

    const body = {
      name: firstName,
      surname: lastName,
      password: password,
      phoneNumber: '+998' + number,
    };

    const response = await axios({
      url: '/user/sign-up',
      method: 'POST',
      body: { ...body },
    });

    setLoading(false);

    if (response?.response?.status >= 400)
      return errorNotifier({ errorStatus: response?.response?.status });

    const { token, user } = response.data.data;

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
          ref={firstNameRef}
          placeholder="First Name"
          bordered={false}
          type="text"
        />
        <Wrapper.Input
          ref={lastNameRef}
          placeholder="Last Name"
          bordered={false}
          type="text"
        />
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
          {loading ? <LoadingOutlined /> : t('register_page.button')}
        </Wrapper.Button>
        <p style={{ marginTop: 15 }}>
          Have you already had an account?
          <NavLink to="/login">
            <Wrapper.Text>Sign-in</Wrapper.Text>
          </NavLink>
        </p>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Register;
