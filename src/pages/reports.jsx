import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Report from '../components/Report';

const Reports = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.report_page.title') || 'Reports | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.report_page.description') ||
            'Here we can see all reports about clients'
          }
        />
      </Helmet>
      <Report />
    </>
  );
};

export default Reports;
