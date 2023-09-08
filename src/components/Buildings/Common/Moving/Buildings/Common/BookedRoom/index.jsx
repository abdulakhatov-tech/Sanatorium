import { Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { BookedTag, Room } from '../../../../../../../Generic/Styles';

const BookedRoom = ({ clienteInfo }) => {
  return (
    <Room color={'processing'}>
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title="Это место забронировано">
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
