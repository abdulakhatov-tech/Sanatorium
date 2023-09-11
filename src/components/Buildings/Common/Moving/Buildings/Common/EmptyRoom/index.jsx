import { Modal } from 'antd';
import { useSelector } from 'react-redux';

import { Room } from '../../../../../../../Generic/Styles';
import { useMove } from '../../../../../../../hooks/useQuery/useBuildingActions';
import { useTranslation } from 'react-i18next';

const { confirm } = Modal;

const EmptyRoom = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const { mutate } = useMove();
  const { movingUserData } = useSelector((state) => state.user);

  const moveConfirm = () => {
    return confirm({
      type: 'info',
      title: t('confirm.are_you_sure'),
      content: t('confirm.sure_content'),
      cancelText: t('modal.modal_canceling'),
      okText: t('confirm.sure'),
      onOk: () => {
        mutate({
          newAccomodationID: clienteInfo.buildingNumber,
          newClienteID: clienteInfo.clienteID,
          newRoomNumber: clienteInfo.roomNumber,
          ...movingUserData,
        });
      },
    });
  };

  return <Room color={'green'} onClick={moveConfirm}></Room>;
};

export default EmptyRoom;
