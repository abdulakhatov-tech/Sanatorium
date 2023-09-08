import { useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Card, Descriptions, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  switchBookedUserActivateModalVisibility,
  switchBookedUserDetailedModalVisibility,
  switchUpdateBookingModalVisibility,
} from '../../../../../../redux/modalSlice';
import { useMenuAPI } from '../../../../../../Generic/MenuAPI';
import useQueryHandler from '../../../../../../hooks/useQuery';
import { IconCircleWrapper } from '../../../../../../Generic/Styles';
import { setSelectedBookedData } from '../../../../../../redux/userSlice';
import { useDeleteBookedUser } from '../../../../../../hooks/useQuery/useBuildingActions';

const BookedUser = ({ idCollection }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const useQuery = useQueryHandler();
  const queryClient = useQueryClient();
  const rtl = new Intl.DateTimeFormat();
  const { bookedUserMenuAPI } = useMenuAPI();
  const { selectedUserData } = useSelector((state) => state.user);
  const { mutate: deleteMutate } = useDeleteBookedUser();

  const accomodationData = queryClient.getQueryData(
    `accomodation/${selectedUserData?.mutationBuildingNumber}`
  );

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/${selectedUserData?.mutationBuildingNumber}/booked-user?_id=${idCollection?._id}`,
    queryKey: `booked-user/${idCollection?._id}`,
    method: 'GET',
  });

  const [clienteData] = accomodationData[
    selectedUserData?.roomOrder
  ].cliente.filter((value) => value?.clienteID === selectedUserData?.clienteID);

  return (
    <Card
      style={{
        width: '100%',
        marginTop: 16,
      }}
      loading={isLoading}
    >
      <Descriptions
        title={data?.fullName}
        column={2}
        size="small"
        extra={
          <Dropdown
            trigger={['click']}
            menu={{
              items: bookedUserMenuAPI({
                observingInDetail: () => {
                  dispatch(switchBookedUserDetailedModalVisibility());
                  dispatch(setSelectedBookedData(data));
                },
                editClickHandler: () => {
                  dispatch(switchUpdateBookingModalVisibility());
                  dispatch(setSelectedBookedData(data));
                },
                deleteClickHandler: () => {
                  deleteMutate(data);
                },
                activate: {
                  disabled: Boolean(clienteData.userID),
                  onClick: () => {
                    dispatch(setSelectedBookedData(data));
                    dispatch(
                      switchBookedUserActivateModalVisibility({
                        loading: false,
                        open: true,
                      })
                    );
                  },
                },
              }),
            }}
          >
            <IconCircleWrapper>
              <EllipsisOutlined />
            </IconCircleWrapper>
          </Dropdown>
        }
        layout="vertical"
      >
        <Descriptions.Item label={t('formLabels.startDate')}>
          {rtl?.format(data?.arrivalDate)}
        </Descriptions.Item>
        <Descriptions.Item label={t('formLabels.endDate')}>
          {rtl?.format(data?.endDate)}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BookedUser;
