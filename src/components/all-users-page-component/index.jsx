import { useState } from 'react';
import { useQuery } from 'react-query';

import { CenteredWrapper } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import { Wrapper } from './style';
import { UsersService } from '../../services/users.service';

const { REACT_APP_BASE_URL: url } = process.env;

const AllUsersPageComponent = () => {
  const [users, setUsers] = useState([]);

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
    <Wrapper>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.all_users_section'} />
        {isLoading ? <Loading /> : <Table data={users} />}
      </CenteredWrapper>
    </Wrapper>
  );
};

export default AllUsersPageComponent;
