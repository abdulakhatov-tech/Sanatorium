import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import ThirdBuildingMapping from './Mapping';
import useQueryHandler from '../../../hooks/useQuery';
import { CustomTitle } from '../../../Generic/CustomHelpers';

const ThirdBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: 'accomodation/3',
    queryLink: '/accomodation/3/room',
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>3 {t('building.building')}</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <ThirdBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default ThirdBuilding;
