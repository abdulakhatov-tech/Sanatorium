import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import Mapping from './Mapping';
import { UserModal } from '../../../components';
import { ArrowBack, Loading } from '../../../tools';
import { CenteredWrapper } from '../../../tools/styles';
import { AccommodationService } from '../../../services/accommodation.service';

const SecondBuildingPageComponent = () => {
  const { t } = useTranslation();

  const { isLoading } = useQuery(
    'accommodation/2',
    () => {
      return AccommodationService.getAccommodation('accomodation/2/room');
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <CenteredWrapper>
      <ArrowBack translation={`2 ${t('building_control_page.building')}`} />
      <UserModal />

      {isLoading ? <Loading /> : <Mapping />}
    </CenteredWrapper>
  );
};

export default SecondBuildingPageComponent;
