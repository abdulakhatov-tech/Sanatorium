import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { HalfTimePageComponent } from '../components';

const HalfTimePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.half_time_page.title') || 'Half Time | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.half_time_page.description') ||
            'Here we can see all half time clients'
          }
        />
      </Helmet>
      <HalfTimePageComponent />
    </>
  );
};

export default HalfTimePage;
