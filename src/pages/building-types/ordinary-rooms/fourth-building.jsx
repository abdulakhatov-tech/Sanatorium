import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { FourthBuildingPageComponent } from '../../../page-components';

const FourthBuildingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_4.title') || '4-Building | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_4.description') ||
            'Here we can see all ordinary rooms of one-story 4-building'
          }
        />
      </Helmet>
      <FourthBuildingPageComponent />
    </>
  );
};

export default FourthBuildingPage;
