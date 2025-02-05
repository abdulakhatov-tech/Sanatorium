import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Cottages from '../../components/Buildings/Cottage';

const CottagesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t('meta_tag.cottages_page.title') || 'Cottages | Sanatorium'}
        </title>
        <meta
          name="description"
          content={
            t('meta_tag.cottages_page.description') ||
            'Here we can see all cottages'
          }
        />
      </Helmet>
      <Cottages />
    </>
  );
};

export default CottagesPage;
