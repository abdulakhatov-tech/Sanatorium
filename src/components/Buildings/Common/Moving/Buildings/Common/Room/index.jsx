import dayjs from 'dayjs';
import { LoadingOutlined } from '@ant-design/icons';

import { Room } from '../../../../../../../Generic/Styles';
import useQueryHandler from '../../../../../../../hooks/useQuery';

const RoomComponent = ({ clienteInfo }) => {
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/${clienteInfo.buildingNumber}/user?_id=${clienteInfo?.userID}`,
    queryKey: `user/${clienteInfo?.userID}`,
    method: 'GET',
  });

  return (
    <Room color={'red'}>
      {isLoading && <LoadingOutlined />}
      {!isLoading && data?.endDate ? (
        dayjs(Number(data?.endDate)).diff(new Date().toDateString(), 'd')
      ) : (
        <LoadingOutlined />
      )}
    </Room>
  );
};

export default RoomComponent;
