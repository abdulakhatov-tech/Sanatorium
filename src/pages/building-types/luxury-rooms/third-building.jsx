import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ThirdBuilding from '../../../components/Buildings/ThirdBuilding';

const ThirdBuildingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_3.title') || '3-Building | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_3.description') ||
            'Here we can seel all luxury rooms of one-story 3-building'
          }
        />
      </Helmet>
      <ThirdBuilding />
    </>
  );
};

export default ThirdBuildingPage;
