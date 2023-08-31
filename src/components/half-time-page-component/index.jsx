// ------------------------------ External Imports ------------------------------
import { useState } from 'react';
import { useQuery } from 'react-query';

// ------------------------------ Internal Imports ------------------------------
import { Wrapper } from './style';
import { CenteredWrapper } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import { UsersService } from '../../services/users.service';

const HalfTimePageComponent = () => {
  const [users, setUsers] = useState([]);

  /* ------------------- Get Half Time Users ------------------- */
  const { isLoading } = useQuery(
    'getHalfTimeUsers',
    () => {
      return UsersService.getHalfTimeUsers();
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
        <ArrowBack translation={'home_page.home_half_users_section'} />
        {isLoading ? <Loading /> : <Table data={users} />}
      </CenteredWrapper>
    </Wrapper>
  );
};

export default HalfTimePageComponent;
