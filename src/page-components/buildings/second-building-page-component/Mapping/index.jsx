import {
  CenteredWrapper,
  ClientWrapper,
  MappingCard,
  MappingCardWrapper,
  RoomTitle,
  RoomWrapper,
} from '../../../../tools/styles';
import Room from './Room';
import EmptyRoom from './EmptyRoom';
import BookedRoom from './BookedRoom';
import { useTranslation } from '../../../../hooks';
import { UserModal, BookedRoomModal } from '../../../../components';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const statusChecker = (clienteValue, roomValue) => {
  if (clienteValue.isBooked)
    return (
      <BookedRoom
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
      />
    );
  else if (clienteValue.userID)
    return (
      <Room
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
      />
    );
  else return <EmptyRoom key={clienteValue.clienteID} />;
};

const Mapping = () => {
  const { t } = useTranslation();

  const data = useGetQueryDataHandler({ queryKey: 'accommodation/2' });

  return (
    <>
      <CenteredWrapper>
        <MappingCard>
          <MappingCardWrapper>
            {data?.map((roomValue) => (
              <RoomWrapper key={roomValue?._id}>
                <RoomTitle>
                  {roomValue?.roomNumber} {t('empty_places.room')}
                </RoomTitle>
                <ClientWrapper>
                  {roomValue?.cliente?.map((clienteValue) =>
                    statusChecker(clienteValue, roomValue)
                  )}
                </ClientWrapper>
              </RoomWrapper>
            ))}
          </MappingCardWrapper>
        </MappingCard>
      </CenteredWrapper>
      <UserModal />
      <BookedRoomModal />
    </>
  );
};

export default Mapping;
