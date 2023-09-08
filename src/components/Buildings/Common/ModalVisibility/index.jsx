import { useSelector } from 'react-redux';

import Moving from '../Moving';
import UserModal from '../UserModal';
import AddModal from '../User/AddModal';
import AddBooking from '../Booking/AddModal';
import EditBooking from '../Booking/EditModal';
import InDetail from '../Booking/ObservingInDetail';
import BookingActivate from '../User/AddModal/BookingActivate';

const ModalVisibility = () => {
  const {
    userModalVisibility,
    movingModalVisibility,
    userAddModalVisibility,
    bookingAddModalVisibility,
    bookedUserUpdateModalVisibility,
    bookedUserDetailedModalVisibility,
    bookedUserActivateModalVisibility,
  } = useSelector((state) => state.modal);
  return (
    <>
      {/* User Modal : Observing, Observing Booked users, Editing */}
      {userModalVisibility && <UserModal />}
      {/* User Add: Adding new user */}
      {userAddModalVisibility.open && <AddModal />}
      {/* Add Booking: Adding new booking */}
      {bookingAddModalVisibility.open && <AddBooking />}
      {/* Observing in datailed */}
      {bookedUserDetailedModalVisibility && <InDetail />}
      {/* Editing booked user */}
      {bookedUserUpdateModalVisibility && <EditBooking />}
      {/* Activating booked user */}
      {bookedUserActivateModalVisibility.open && <BookingActivate />}
      {/* Moving user to another place */}
      {movingModalVisibility.open && <Moving />}
    </>
  );
};

export default ModalVisibility;
