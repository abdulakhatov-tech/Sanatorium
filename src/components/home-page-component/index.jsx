// ------------------------------ External Imports ------------------------------
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ------------------------------ Internal Imports ------------------------------
import {
  all_users,
  empty_place,
  end_time,
  half_time,
  report,
} from '../../assets';
import { Card } from '../../generic';
import {
  CardWrapper,
  CenteredWrapper,
  Container,
  Title,
} from '../../tools/styles';

const HomePageComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <CenteredWrapper>
        <Title>{t('home_page.title')}:</Title>
        <CardWrapper>
          <Card
            title={t('home_page.all_users_section')}
            image={all_users}
            onClick={() => navigate('/all-users')}
          />
          <Card
            title={t('home_page.half_users_section')}
            image={half_time}
            onClick={() => navigate('/half-time')}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            title={t('home_page.up_users_section')}
            image={end_time}
            onClick={() => navigate('/end-time')}
          />
          <Card
            title={t('home_page.available_places')}
            image={empty_place}
            onClick={() => navigate('/building-control')}
          />
        </CardWrapper>
        <Title>{t('home_page.report_title')}:</Title>
        <CardWrapper>
          <Card
            title={t('home_page.report')}
            image={report}
            onClick={() => navigate('/report')}
          />
        </CardWrapper>
      </CenteredWrapper>
    </Container>
  );
};

export default HomePageComponent;
