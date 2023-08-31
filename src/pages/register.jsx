import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Register } from '../components';

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('meta_tag.login_page.title') || 'Auth | Sanatorium'}</title>
        <meta
          name="description"
          content={
            t('meta_tag.login_page.description') || 'Here is Sign-Up Page'
          }
        />
      </Helmet>
      <Register />
    </>
  );
};

export default RegisterPage;
