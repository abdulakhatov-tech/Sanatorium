import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Login } from '../page-components';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('meta_tag.login_page.title') || 'Auth | Sanatorium'}</title>
        <meta
          name="description"
          content={
            t('meta_tag.login_page.description') || 'Here is Sign-In Page'
          }
        />
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
