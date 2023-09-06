import dayjs from 'dayjs';
import { Card, Descriptions, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { EllipsisOutlinedWrapper } from './style';
import useDropDown from '../../../../../tools/dropdown-api';
import useQueryHandler from '../../../../../hooks/useQuery';
import { setBookedDetailedModalVisibility } from '../../../../../store/modalSlice';
import DetailedModal from '../DetailedModal';
// import { setBookedDetailedModalVisibility } from '../../../../../store/modalSlice';

const BookedCard = ({ id }) => {
  const { bookedPlaceItems } = useDropDown();
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { isLoading, data } = useQueryHandler({
    queryKey: `booked-user/${id}`,
    queryLink: `/accomodation/${selectedUser?.buildingMutation}/booked-user?_id=${id}`,
  });

  return (
    <>
      <DetailedModal id={id} />
      <Card
        loading={isLoading}
        style={{ marginTop: '10px', marginBottom: '5px' }}
      >
        <Descriptions
          layout="vertical"
          title={data?.fullName}
          extra={
            <Dropdown
              menu={{
                items: bookedPlaceItems({
                  inDetail: () => dispatch(setBookedDetailedModalVisibility()),
                }),
              }}
            >
              <EllipsisOutlinedWrapper>
                <EllipsisOutlined />
              </EllipsisOutlinedWrapper>
            </Dropdown>
          }
        >
          <Descriptions.Item label="Start date" style={{ width: '50%' }}>
            {dayjs(Number(data?.arrivalDate)).format('MM.DD.YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="End Date" style={{ width: '50%' }}>
            {dayjs(Number(data?.endDate)).format('MM.DD.YYYY')}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
};

export default BookedCard;
