import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import LuxuryRooms from '../../../components/BuildingTypes/LuxuryRooms';

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
      <LuxuryRooms />
    </>
  );
};

export default LuxuryRoomsPage;
