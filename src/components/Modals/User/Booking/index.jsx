import { useSelector } from 'react-redux';
import EmptyBooking from './EmptyUI';

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const cellID = selectedUser?.clienteValue?.clienteID;

  const foundData = selectedUser.roomValue.bookedCliente.find(
    (value) => value.bookedClienteID === cellID
  );

  console.log(foundData.bookedClienteList[0], 'id');

  return (
    <>
      {selectedUser?.clienteValue?.isBooked ? 'Booked room' : <EmptyBooking />}
    </>
  );
};

export default Booking;
