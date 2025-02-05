import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Home from '../components/Home';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('meta_tag.home_page.title') || 'Sanatorium'}</title>
        <meta
          name="description"
          content={
            t('meta_tag.home_page.description') ||
            'This website is used to receive clients in the sanatorium, place them in rooms and make reservations'
          }
        />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
