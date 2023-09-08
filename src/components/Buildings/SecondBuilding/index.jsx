import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import SecondBuildingMapping from './Mapping';
import useQueryHandler from '../../../hooks/useQuery';
import { CustomTitle } from '../../../Generic/CustomHelpers';

const SecondBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: 'accomodation/2',
    queryLink: '/accomodation/2/room',
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>2 {t('building.building')}</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <SecondBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default SecondBuilding;
