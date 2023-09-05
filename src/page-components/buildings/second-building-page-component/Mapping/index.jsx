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
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';
import { useLocation } from 'react-router-dom';

const statusChecker = (clienteValue, roomValue, buildingNumber) => {
  if (clienteValue.isBooked)
    return (
      <BookedRoom
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
        buildingNumber={buildingNumber}
      />
    );
  else if (clienteValue.userID)
    return (
      <Room
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
        buildingNumber={buildingNumber}
      />
    );
  else
    return (
      <EmptyRoom
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
        buildingNumber={buildingNumber}
      />
    );
};

const Mapping = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const buildingNumber = location?.pathname.split('/').reverse()[0];

  const data = useGetQueryDataHandler({ queryKey: 'accommodation/2' });

  return (
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
                  statusChecker(clienteValue, roomValue, buildingNumber)
                )}
              </ClientWrapper>
            </RoomWrapper>
          ))}
        </MappingCardWrapper>
      </MappingCard>
    </CenteredWrapper>
  );
};

export default Mapping;
