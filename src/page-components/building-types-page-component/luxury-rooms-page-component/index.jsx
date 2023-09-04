// ------------------------------ External Imports ------------------------------
import { Outlet, useOutlet } from 'react-router-dom';

// ------------------------------ Internal Imports ------------------------------
import { Card } from '../../../generic';
import { building } from '../../../assets';
import { ArrowBack } from '../../../tools';
import { useNavigation, useTranslation } from '../../../hooks';
import { CardWrapper, CenteredWrapper, Wrapper } from '../../../tools/styles';

const LuxuryRoomsPageComponent = () => {
  const outlet = useOutlet();
  const { t } = useTranslation();

  const { $navigate } = useNavigation();

  return (
    <Wrapper>
      <CenteredWrapper>
        {!outlet ? (
          <>
            <ArrowBack translation={'building_control_page.luxury_rooms'} />

            <CardWrapper>
              <Card
                title={`3 ${t('building_control_page.building')}`}
                image={building}
                onClick={() => $navigate('/building-types/luxury-rooms', '/3')}
              />
              <Card
                title={`5 ${t('building_control_page.building')}`}
                image={building}
                onClick={() => $navigate('/building-types/luxury-rooms', '/5')}
              />
            </CardWrapper>
          </>
        ) : (
          <Outlet />
        )}
      </CenteredWrapper>
    </Wrapper>
  );
};

export default LuxuryRoomsPageComponent;
