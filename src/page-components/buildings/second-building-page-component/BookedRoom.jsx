import { useTranslation } from 'react-i18next';

import { Tooltip } from '../../../tools';
import { Room } from '../../../tools/styles';

const BookedRoom = () => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t('tooltip.booked_room')} color={'blue'}>
      <Room color="processing"></Room>
    </Tooltip>
  );
};

export default BookedRoom;
