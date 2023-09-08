import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import FourthBuildingMapping from './Mapping';
import useQueryHandler from '../../../hooks/useQuery';
import { CustomTitle } from '../../../Generic/CustomHelpers';

const FourthBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: 'accomodation/4',
    queryLink: '/accomodation/4/room',
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>4 {t('building.building')}</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <FourthBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default FourthBuilding;
