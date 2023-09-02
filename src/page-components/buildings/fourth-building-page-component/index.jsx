import { useTranslation } from 'react-i18next';

import Mapping from './Mapping';
import { UserModal } from '../../../components';
import { ArrowBack, Loading } from '../../../tools';
import useQueryHandler from '../../../hooks/useQuery';
import { CenteredWrapper } from '../../../tools/styles';

const FourthBuildingPageComponent = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryKey: 'accommodation/4',
    queryLink: '/accomodation/4/room',
  });

  return (
    <CenteredWrapper>
      <ArrowBack translation={`4 ${t('building_control_page.building')}`} />
      <UserModal />

      {isLoading ? <Loading /> : <Mapping />}
    </CenteredWrapper>
  );
};

export default FourthBuildingPageComponent;
