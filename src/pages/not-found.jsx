import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import NotFound from '../components/NotFound';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('meta_tag.not_found_page.title') || 'Sanatorium'}</title>
        <meta
          name="description"
          content={
            t('meta_tag.not_found_page.description') ||
            'Error 404 is a client-side issue indicating the requested URL can’t be found on the server. It may occur because of several reasons, such as the domain is not pointed correctly, a broken .htaccess file, or misconfigured file permissions.'
          }
        />
      </Helmet>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
