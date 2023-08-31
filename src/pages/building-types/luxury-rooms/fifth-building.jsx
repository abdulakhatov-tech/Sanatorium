import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const FifthBuildingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_5.title') || '5-Building | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_5.description') ||
            'Here we can seel all luxury rooms of a two-story 5-building'
          }
        />
      </Helmet>
      <h1>FifthBuildingPage</h1>
    </>
  );
};

export default FifthBuildingPage;
