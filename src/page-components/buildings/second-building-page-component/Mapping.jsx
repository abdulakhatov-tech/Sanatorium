import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import {
  CenteredWrapper,
  ClientWrapper,
  MappingCard,
  MappingCardWrapper,
  RoomTitle,
  RoomWrapper,
} from '../../../tools/styles';
import RoomComponent from './Room';
import EmptyRoom from './EmptyRoom';
import BookedRoom from './BookedRoom';

const Mapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data } = queryClient.getQueryData('accommodation/2');

  return (
    <CenteredWrapper>
      <MappingCard>
        <MappingCardWrapper>
          {data?.map((room) => (
            <RoomWrapper key={room?._id}>
              <RoomTitle>
                {room?.roomNumber} {t('empty_places.room')}
              </RoomTitle>
              <ClientWrapper>
                {room?.cliente?.map((value) =>
                  !value.isBooked && !value.userID ? (
                    <EmptyRoom key={value.clienteID} />
                  ) : value.userID ? (
                    <RoomComponent key={value.clienteID} value={value} />
                  ) : (
                    <BookedRoom key={value.clienteID} />
                  )
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
