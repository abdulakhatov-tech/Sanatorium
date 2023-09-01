import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { BuildingTypesPageComponent } from '../../page-components';

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
      <BuildingTypesPageComponent />
    </>
  );
};

export default BuildingTypesPage;
