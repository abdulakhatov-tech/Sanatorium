import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Card from '../../../Generic/Card';
import building from '../../../assets/images/building.svg';
import { CustomTitle } from '../../../Generic/CustomHelpers';
import { CenteredWrapper, SectionCardContainer } from '../../../Generic/Styles';

const OrdinaryRooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t('buildingTypes.ordinaryRooms')}
      </CustomTitle>
      <SectionCardContainer>
        <Card
          title={`2 ${t('building.building')}`}
          image={building}
          onClick={() => navigate('/building-control/map/ordinary-rooms/2')}
        />
        <Card
          title={`4 ${t('building.building')}`}
          image={building}
          onClick={() => navigate('/building-control/map/ordinary-rooms/4')}
        />
      </SectionCardContainer>
      <SectionCardContainer>
        <Card
          title={`6 ${t('building.building')}`}
          image={building}
          onClick={() => navigate('/building-control/map/ordinary-rooms/6')}
        />
      </SectionCardContainer>
    </CenteredWrapper>
  );
};

export default OrdinaryRooms;
