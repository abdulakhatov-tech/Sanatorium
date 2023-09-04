import { Modal } from 'antd';

import { Tooltip } from '../../../../../tools';
import { Room } from '../../../../../tools/styles';
import { useTranslation } from '../../../../../hooks';
import { useDispatch } from 'react-redux';
import { setAddUserModalVisibility } from '../../../../../store/modalSlice';

const { confirm } = Modal;

const EmptyRoom = () => {
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
