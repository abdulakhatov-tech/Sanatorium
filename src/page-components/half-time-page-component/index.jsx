// ------------------------------ External Imports ------------------------------
import { useEffect, useState } from 'react';

// ------------------------------ Internal Imports ------------------------------
import { CenteredWrapper, Container } from '../../tools/styles';
import { ArrowBack, Loading, Table } from '../../tools';
import useQueryHandler from '../../hooks/useQuery';

const HalfTimePageComponent = () => {
  const [users, setUsers] = useState([]);

  /* ------------------- Get Half Time Users ------------------- */
  const { isLoading, data } = useQueryHandler({
    queryKey: 'get-half-time-users',
    queryLink: '/users/half-time',
  });

  useEffect(() => {
    if (!isLoading) {
      setUsers(data?.data?.data);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <CenteredWrapper>
        <ArrowBack translation={'home_page.half_users_section'} />
        {isLoading ? <Loading /> : <Table data={users} />}
      </CenteredWrapper>
    </Container>
  );
};

export default HalfTimePageComponent;
