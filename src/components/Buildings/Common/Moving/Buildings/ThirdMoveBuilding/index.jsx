import { Select } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper } from '../style';
import {
  MappingRoomContainer,
  MappingRoomWrapper,
  RoomTitle,
} from '../../../../../../Generic/Styles';
import RoomComponent from '../Common/Room';
import EmptyRoom from '../Common/EmptyRoom';
import BookedRoom from '../Common/BookedRoom';
import useQueryHandler from '../../../../../../hooks/useQuery';
import { MovingBuildingLoader } from '../../../../../../Generic/Loaders';

const ThirdMoveBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();
  const [selectedRoomOrder, setSelectedRoomOrder] = useState(0);

  const { isLoading, data } = useQuery({
    queryKey: 'accomodation/3',
    queryLink: '/accomodation/3/room',
  });

  return (
    <Wrapper>
      {isLoading ? (
        <MovingBuildingLoader />
      ) : (
        <>
          <Wrapper.RoomTitle>{t('moveModal.roomSelection')}:</Wrapper.RoomTitle>
          <Select
            defaultValue="0"
            onChange={(e) => setSelectedRoomOrder(e)}
            options={data?.map(({ roomOrder, roomNumber }) => ({
              label: `${roomNumber} ${t('building.room')}`,
              value: `${roomOrder}`,
            }))}
          />
          <Wrapper.RoomTitle>
            {t('moveModal.positionSelection')}:
          </Wrapper.RoomTitle>
          <MappingRoomWrapper>
            <RoomTitle>
              {data[selectedRoomOrder || 0]?.roomNumber} {t('building.room')}
            </RoomTitle>
            <MappingRoomContainer>
              {data[selectedRoomOrder || 0]?.cliente?.map((value) =>
                !value.userID && !value.isBooked ? (
                  <EmptyRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: '3',
                      roomNumber: data[selectedRoomOrder || 0].roomNumber,
                    }}
                  />
                ) : value.userID ? (
                  <RoomComponent
                    key={value?.clienteID}
                    clienteInfo={{ ...value, buildingNumber: '3' }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: '3',
                      roomNumber: data[selectedRoomOrder || 0].roomNumber,
                    }}
                  />
                )
              )}
            </MappingRoomContainer>
          </MappingRoomWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default ThirdMoveBuilding;
