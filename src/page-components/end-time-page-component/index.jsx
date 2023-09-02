// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const EndTimePageComponent = () => {
  /* ------------------- Get End Time Users ------------------- */

  const { isLoading, data = [] } = useQueryHandler({
    queryKey: 'get-time-up-users',
    queryLink: '/users/time-up',
  });

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.up_users_section'} />
        {isLoading ? <Loading /> : <Table data={data} />}
      </CenteredWrapper>
    </Container>
  );
};

export default EndTimePageComponent;
