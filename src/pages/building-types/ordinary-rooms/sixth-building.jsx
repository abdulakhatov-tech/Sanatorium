import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import SixthBuilding from '../../../components/Buildings/SixthBuilding';

const SixthBuildingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_6.title') || '6-Building | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_6.description') ||
            'Here we can seel all ordinary rooms of a three-story 6-building'
          }
        />
      </Helmet>
      <SixthBuilding />
    </>
  );
};

export default SixthBuildingPage;
