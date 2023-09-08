import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import CottageBuildingMapping from './Mapping';
import useQueryHandler from '../../../hooks/useQuery';
import { CustomTitle } from '../../../Generic/CustomHelpers';

const Cottages = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: 'accomodation/cottage',
    queryLink: '/accomodation/cottage/room',
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>
        {t('buildingTypes.cottages')}
      </CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <CottageBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default Cottages;
