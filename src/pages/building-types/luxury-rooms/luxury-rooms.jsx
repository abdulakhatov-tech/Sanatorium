import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const LuxuryRoomsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.luxury_rooms_page.title') || 'Luxury Rooms | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.luxury_rooms_page.description') ||
            'Here we can see all luxury rooms'
          }
        />
      </Helmet>
      <h1>LuxuryRoomsPage</h1>
    </>
  );
};

export default LuxuryRoomsPage;
