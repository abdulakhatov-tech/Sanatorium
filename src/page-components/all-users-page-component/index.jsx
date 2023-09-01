// ------------------------------ External Imports ------------------------------
import { useState } from 'react';
import { useQuery } from 'react-query';

// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import { UsersService } from '../../services/users.service';

const AllUsersPageComponent = () => {
  const [users, setUsers] = useState([]);

  /* ------------------- Get All Users ------------------- */
  const { isLoading } = useQuery(
    'getAllUsers',
    () => {
      return UsersService.getAllUsers();
    },
    {
      onSuccess: (res) => {
        setUsers(res?.data || []);
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

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
