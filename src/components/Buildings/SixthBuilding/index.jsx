import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import { Wrapper } from './style';
import FirstFloorMapping from './FirstFloorMapping';
import ThirdFloorMapping from './ThirdFloorMapping';
import SecondFloorMapping from './SecondFloorMapping';
import useQueryHandler from '../../../hooks/useQuery';
import ModalVisibility from '../Common/ModalVisibility';
import { CustomTitle } from '../../../Generic/CustomHelpers';

const SixthBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading: firstFloorLoading } = useQuery({
    queryKey: 'accomodation/6-1',
    queryLink: '/accomodation/6-1/room',
  });

  const { isLoading: secondFloorLoading } = useQuery({
    queryKey: 'accomodation/6-2',
    queryLink: '/accomodation/6-2/room',
  });
  const { isLoading: thirdFloorLoading } = useQuery({
    queryKey: 'accomodation/6-3',
    queryLink: '/accomodation/6-3/room',
  });

  return (
    <Wrapper>
      <ModalVisibility />
      <CustomTitle showBackWard={true}>6 {t('building.building')}</CustomTitle>
      <Wrapper.MapWrapper>
        {firstFloorLoading || secondFloorLoading || thirdFloorLoading ? (
          <Spin />
        ) : (
          <>
            <FirstFloorMapping /> <SecondFloorMapping /> <ThirdFloorMapping />
          </>
        )}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default SixthBuilding;
