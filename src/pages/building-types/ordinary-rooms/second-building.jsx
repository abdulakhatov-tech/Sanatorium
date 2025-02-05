import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import SecondBuilding from '../../../components/Buildings/SecondBuilding';

const SecondBuildingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_2.title') || '2-Building | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_2.description') ||
            'Here we can see all ordinary rooms of one-story 2-building'
          }
        />
      </Helmet>
      <SecondBuilding />
    </>
  );
};

export default SecondBuildingPage;
