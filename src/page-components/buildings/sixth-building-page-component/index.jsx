import { useTranslation } from 'react-i18next';

import Mapping from './Mapping';
import { UserModal } from '../../../components';
import { ArrowBack, Loading } from '../../../tools';
import useQueryHandler from '../../../hooks/useQuery';
import { CenteredWrapper, MappingCardsContainer } from '../../../tools/styles';

const SixthBuildingPageComponent = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryKey: 'accommodation/6-1',
    queryLink: '/accomodation/6-1/room',
  });

  useQueryHandler({
    queryKey: 'accommodation/6-2',
    queryLink: '/accomodation/6-2/room',
  });

  useQueryHandler({
    queryKey: 'accommodation/6-3',
    queryLink: '/accomodation/6-3/room',
  });

  return (
    <CenteredWrapper>
      <ArrowBack translation={`6 ${t('building_control_page.building')}`} />
      <UserModal />

      {isLoading ? (
        <Loading />
      ) : (
        <MappingCardsContainer>
          <Mapping queryKey={'accommodation/6-1'} />
          <Mapping queryKey={'accommodation/6-2'} />
          <Mapping queryKey={'accommodation/6-3'} />
        </MappingCardsContainer>
      )}
    </CenteredWrapper>
  );
};

export default SixthBuildingPageComponent;
