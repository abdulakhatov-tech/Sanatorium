// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const HalfTimePageComponent = () => {
  /* ------------------- Get Half Time Users ------------------- */
  const { isLoading, data = [] } = useQueryHandler({
    queryKey: 'get-half-time-users',
    queryLink: '/users/half-time',
  });

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.half_users_section'} />
        {isLoading ? <Loading /> : <Table data={data} />}
      </CenteredWrapper>
    </Container>
  );
};

export default HalfTimePageComponent;
