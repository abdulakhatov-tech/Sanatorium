// ------------------------------ External Imports ------------------------------
import { Outlet, useOutlet } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import { Card } from '../../../generic';
import { building } from '../../../assets';
import { ArrowBack } from '../../../tools';
import { useNavigation, useTranslation } from '../../../hooks';
import { CardWrapper, CenteredWrapper, Container } from '../../../tools/styles';

const Buildings = () => {
  const { t } = useTranslation();
  const { $navigate } = useNavigation();

  return (
    <>
      <ArrowBack translation={'building_control_page.ordinary_rooms'} />

      <CardWrapper>
        <Card
          title={`2 ${t('building_control_page.building')}`}
          image={building}
          onClick={() => $navigate('/building-types/ordinary-rooms', '/2')}
        />
        <Card
          title={`4 ${t('building_control_page.building')}`}
          image={building}
          onClick={() => $navigate('/building-types/ordinary-rooms', '/4')}
        />
      </CardWrapper>
      <CardWrapper>
        <Card
          title={`6 ${t('building_control_page.building')}`}
          image={building}
          onClick={() => $navigate('/building-types/ordinary-rooms', '/6')}
        />
      </CardWrapper>
    </>
  );
};

const OrdinaryRoomsPageComponent = () => {
  const outlet = useOutlet();

  return (
    <Container>
      <CenteredWrapper>{!outlet ? <Buildings /> : <Outlet />}</CenteredWrapper>
    </Container>
  );
};

export default OrdinaryRoomsPageComponent;
