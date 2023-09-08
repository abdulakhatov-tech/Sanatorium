import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Error from '../components/Error';

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('meta_tag.error_page.title') || 'Sanatorium'}</title>
        <meta
          name="description"
          content={
            t('meta_tag.error_page.description') ||
            'This error occurs when a requested webpage or resource cannot be found on the server. It is one of the most well-known error messages and typically includes a message like "The page you requested could not be found.'
          }
        />
      </Helmet>
      <Error />
    </>
  );
};

export default ErrorPage;
