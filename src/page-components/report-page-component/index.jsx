// ------------------------------ External Imports ------------------------------
import { useTranslation } from 'react-i18next';

// ------------------------------ Internal Imports ------------------------------
import { ArrowBack } from '../../tools';
import { CenteredWrapper, Container, Wrapper } from '../../tools/styles';

const ReportPageComponent = () => {
  const { t } = useTranslation();

  /* ------------------- Get Statistics ------------------- */

  /* ------------------- Parameter Submit ------------------- */

  return (
    <Container>
      <Wrapper>
        <CenteredWrapper>
          <ArrowBack translation={t('home_page.report_title')} />
        </CenteredWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReportPageComponent;
