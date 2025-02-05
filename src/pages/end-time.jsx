import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import TimeUp from '../components/TimeUp';

const EndTimePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.end_time_page.title') || 'End Time | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.end_time_page.description') ||
            'Here we can see all time up clients'
          }
        />
      </Helmet>
      <TimeUp />
    </>
  );
};

export default EndTimePage;
