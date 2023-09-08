import { Button, Result } from 'antd';
import { useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper } from './style';
import BookedUser from './BookedUser';
import {
  switchUserModalVisibility,
  switchAddBookingModalVisibility,
} from '../../../../../redux/modalSlice';

const Booking = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { selectedUserData } = useSelector((state) => state.user);

  const data = queryClient.getQueryData(
    `accomodation/${selectedUserData?.mutationBuildingNumber}`
  );

  const [clienteData] = data[selectedUserData?.roomOrder].cliente.filter(
    (value) => value.clienteID === selectedUserData?.clienteID
  );
  const [bookedData] = data[selectedUserData?.roomOrder].bookedCliente.filter(
    (value) => value.bookedClienteID === selectedUserData?.clienteID
  );

  return (
    <>
      <Wrapper>
        {!clienteData?.isBooked ? (
          <Result status="404" subTitle={t('confirm.noBookedPlaces')} />
        ) : (
          bookedData?.bookedClienteList?.map((value) => (
            <BookedUser
              key={value}
              idCollection={{
                _id: value,
                bookedClienteID:
                  selectedUserData?.bookedCliente?.bookedClienteID,
              }}
            />
          ))
        )}
      </Wrapper>
      <Wrapper.InputWrapper
        style={{ display: 'flex', gridGap: '20px', justifyContent: 'end' }}
      >
        <Button onClick={() => dispatch(switchUserModalVisibility())}>
          {t('modal.modal_canceling')}
        </Button>
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddBookingModalVisibility({ loading: false, open: true })
            )
          }
        >
          {t('modal.modal_add')}
        </Button>
      </Wrapper.InputWrapper>
    </>
  );
};

export default Booking;
