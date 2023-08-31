import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

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
      <h1>FourthBuildingPage</h1>
    </>
  );
};

export default FourthBuildingPage;
