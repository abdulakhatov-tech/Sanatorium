// ------------------------------ External Imports ------------------------------
import { useEffect, useState } from 'react';

// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const EndTimePageComponent = () => {
  const [users, setUsers] = useState([]);

  /* ------------------- Get End Time Users ------------------- */

  const { isLoading, data } = useQueryHandler({
    queryKey: 'get-time-up-users',
    queryLink: '/users/time-up',
  });

  useEffect(() => {
    if (!isLoading) {
      setUsers(data?.data?.data);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.up_users_section'} />
        {isLoading ? <Loading /> : <Table data={users} />}
      </CenteredWrapper>
    </Container>
  );
};

export default EndTimePageComponent;
