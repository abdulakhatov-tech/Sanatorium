import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { AllUsersPageComponent } from '../components';

const AllUsersPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.all_users_page.title') || 'All Users Page | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.all_users_page.description') ||
            'Here we can see all clients'
          }
        />
      </Helmet>
      <AllUsersPageComponent />
    </>
  );
};

export default AllUsersPage;
