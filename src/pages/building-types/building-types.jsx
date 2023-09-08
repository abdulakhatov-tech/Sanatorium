import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import EmptyPlace from '../../components/BuildingTypes';

const BuildingTypesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.building_types_page.title') ||
            'Building Types | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.building_types_page.description') ||
            'Here we can see all building types'
          }
        />
      </Helmet>
      <EmptyPlace />
    </>
  );
};

export default BuildingTypesPage;
