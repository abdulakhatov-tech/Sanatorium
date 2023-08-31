// ------------------------------ External Imports ------------------------------
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import {
  CardWrapper,
  CenteredWrapper,
  Container,
  Wrapper,
} from '../../tools/styles';
import { Card } from '../../generic';
import { ArrowBack } from '../../tools';
import { luxury_room, mansion, ordinary_room } from '../../assets';

const BuildingTypesPageComponent = () => {
  const { t } = useTranslation();
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <CenteredWrapper>
          {!outlet ? (
            <>
              <ArrowBack translation={'building_control_page.title'} />
              <CardWrapper>
                <Card
                  title={t('building_control_page.ordinary_rooms')}
                  image={ordinary_room}
                  onClick={() => navigate('/building-control/ordinary-rooms')}
                />
                <Card
                  title={t('building_control_page.luxury_rooms')}
                  image={luxury_room}
                  onClick={() => navigate('/building-control/luxury-rooms')}
                />
              </CardWrapper>
              <CardWrapper>
                <Card
                  title={t('building_control_page.cottages')}
                  image={mansion}
                  onClick={() => navigate('/building-control/map/cottage')}
                />
              </CardWrapper>
            </>
          ) : (
            <Outlet />
          )}
        </CenteredWrapper>
      </Wrapper>
    </Container>
  );
};

export default BuildingTypesPageComponent;
