import { useTranslation } from 'react-i18next';

import {
  CenteredWrapper,
  ClientWrapper,
  MappingCard,
  MappingCardWrapper,
  RoomTitle,
  RoomWrapper,
} from '../../../../tools/styles';
import RoomComponent from './Room';
import EmptyRoom from './EmptyRoom';
import BookedRoom from './BookedRoom';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const Mapping = () => {
  const { t } = useTranslation();

  const data = useGetQueryDataHandler({ queryKey: 'accommodation/4' });

  const statusChecker = (value) => {
    if (value.isBooked) {
      return <BookedRoom key={value.clienteID} />;
    } else if (value.userID) {
      return <RoomComponent key={value.clienteID} value={value} />;
    } else {
      return <EmptyRoom key={value.clienteID} />;
    }
  };

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
                {room?.cliente?.map((value) => statusChecker(value))}
              </ClientWrapper>
            </RoomWrapper>
          ))}
        </MappingCardWrapper>
      </MappingCard>
    </CenteredWrapper>
  );
};

export default Mapping;
