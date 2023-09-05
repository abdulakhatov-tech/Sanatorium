import { Modal } from 'antd';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import { useDispatch } from 'react-redux';
import { setAddUserModalVisibility } from '../../../../../store/modalSlice';
import { setSelectedUser } from '../../../../../store/userSlice';

const { confirm } = Modal;

const EmptyRoom = ({ clienteValue, roomValue, buildingNumber }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onWarning = () => {
    return confirm({
      title: t('tooltip.empty_room') || 'Empty place',
      content:
        t('empty_places.confirm_empty_room') ||
        'This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.',
      okText: t('generic.add') || 'Add',
      cancelText: t('generic.book') || 'Book',
      closable: true,
      onOk: () => {
        dispatch(
          setSelectedUser({
            userID: clienteValue?.userID,
            buildingMutation: buildingNumber,
            clienteValue,
            roomValue,
          })
        );
        dispatch(setAddUserModalVisibility());
      },
    });
  };

  return (
    <Tooltip title={t('tooltip.empty_room')} color="green">
      <Room color="green" onClick={onWarning} />
    </Tooltip>
  );
};

export default EmptyRoom;
