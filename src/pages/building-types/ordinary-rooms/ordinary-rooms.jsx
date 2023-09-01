import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { OrdinaryRoomsPageComponent } from '../../../page-components';

const OrdinaryRoomsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.ordinary_rooms_page.title') ||
            'Ordinary Room | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.ordinary_rooms_page.description') ||
            'Here we can see all ordinary rooms'
          }
        />
      </Helmet>
      <OrdinaryRoomsPageComponent />
    </>
  );
};

export default OrdinaryRoomsPage;
