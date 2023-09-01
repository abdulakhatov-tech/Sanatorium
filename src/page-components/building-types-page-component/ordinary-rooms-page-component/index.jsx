// ------------------------------ External Imports ------------------------------
import { useTranslation } from 'react-i18next';
import { Outlet, useOutlet } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import { Card } from '../../../generic';
import { building } from '../../../assets';
import { ArrowBack } from '../../../tools';
import useNavigation from '../../../hooks/useNavigation';
import { CardWrapper, CenteredWrapper, Container } from '../../../tools/styles';

const OrdinaryRoomsPageComponent = () => {
  const { t } = useTranslation();
  const outlet = useOutlet();

  const { $navigate } = useNavigation();

  return (
    <Container>
      <CenteredWrapper>
        {!outlet ? (
          <>
            <ArrowBack translation={'building_control_page.ordinary_rooms'} />

            <CardWrapper>
              <Card
                title={`2 ${t('building_control_page.building')}`}
                image={building}
                onClick={() =>
                  $navigate('/building-types/ordinary-rooms', '/2')
                }
              />
              <Card
                title={`4 ${t('building_control_page.building')}`}
                image={building}
                onClick={() =>
                  $navigate('/building-types/ordinary-rooms', '/4')
                }
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                title={`6 ${t('building_control_page.building')}`}
                image={building}
                onClick={() =>
                  $navigate('/building-types/ordinary-rooms', '/6')
                }
              />
            </CardWrapper>
          </>
        ) : (
          <Outlet />
        )}
      </CenteredWrapper>
    </Container>
  );
};

export default OrdinaryRoomsPageComponent;
