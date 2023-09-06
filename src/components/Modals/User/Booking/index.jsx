import { useSelector } from 'react-redux';

import EmptyBooking from './EmptyUI';
import BookedCard from './BookedCard';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const building = useGetQueryDataHandler({
    queryKey: `accommodation/${selectedUser?.buildingMutation}`,
  });
  const cellID = selectedUser?.clienteValue?.clienteID;

  const foundData = building[
    selectedUser?.roomValue?.roomOrder
  ].bookedCliente.find((value) => value.bookedClienteID === cellID);

  console.log(foundData?.bookedClienteList);

  return (
    <>
      {selectedUser?.clienteValue?.isBooked ? (
        foundData?.bookedClienteList?.map((id) => (
          <BookedCard key={id} id={id} />
        ))
      ) : (
        <EmptyBooking />
      )}
    </>
  );
};

export default Booking;
