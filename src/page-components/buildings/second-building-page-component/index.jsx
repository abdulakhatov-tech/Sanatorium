import { useTranslation } from 'react-i18next';

import Mapping from './Mapping';
import { UserModal } from '../../../components';
import { ArrowBack, Loading } from '../../../tools';
import useQueryHandler from '../../../hooks/useQuery';
import { CenteredWrapper } from '../../../tools/styles';

const SecondBuildingPageComponent = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryKey: 'accommodation/2',
    queryLink: '/accomodation/2/room',
  });

  return (
    <CenteredWrapper>
      <ArrowBack translation={`2 ${t('building_control_page.building')}`} />
      <UserModal />

      {isLoading ? <Loading /> : <Mapping />}
    </CenteredWrapper>
  );
};

export default SecondBuildingPageComponent;
