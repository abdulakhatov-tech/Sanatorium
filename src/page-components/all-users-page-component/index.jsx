// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const AllUsersPageComponent = () => {
  /* ------------------- Get All Users ------------------- */
  const { isLoading, data = [] } = useQueryHandler({
    queryKey: 'get-all-users',
    queryLink: '/users/all-users',
  });

  console.log(data, 'data');

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.all_users_section'} />
        {isLoading ? <Loading /> : <Table data={data} />}
      </CenteredWrapper>
    </Container>
  );
};

export default AllUsersPageComponent;
