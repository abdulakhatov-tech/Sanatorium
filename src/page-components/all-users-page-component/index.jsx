// ------------------------------ External Imports ------------------------------
import { useEffect, useState } from 'react';

// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const AllUsersPageComponent = () => {
  const [users, setUsers] = useState([]);

  /* ------------------- Get All Users ------------------- */
  const { isLoading, data } = useQueryHandler({
    queryKey: 'get-all-users',
    queryLink: '/users/all-users',
  });

  useEffect(() => {
    if (!isLoading) {
      setUsers(data?.data?.data);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.all_users_section'} />
        {isLoading ? <Loading /> : <Table data={users} />}
      </CenteredWrapper>
    </Container>
  );
};

export default AllUsersPageComponent;
