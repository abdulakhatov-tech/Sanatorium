import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  switchAddBookingModalVisibility,
  switchAddUserModalVisibility,
} from '../../../../../redux/modalSlice';
import { Room } from '../../../../../Generic/Styles';
import { ConfirmMomdalButtonWrapper } from '../Room/style';
import { setSelectedUserData } from '../../../../../redux/userSlice';

const { confirm } = Modal;

const EmptyRoom = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(
      setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: '6-3' })
    );

    return confirm({
      title: t('confirm.title'),
      content: t('confirm.content'),
      closable: true,
      footer: (
        <ConfirmMomdalButtonWrapper>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddBookingModalVisibility({ loading: false, open: true })
              );
            }}
          >
            {t('confirm.book')}
          </Button>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddUserModalVisibility({ loading: false, open: true })
              );
            }}
            type="primary"
          >
            {t('confirm.add')}
          </Button>
        </ConfirmMomdalButtonWrapper>
      ),
    });
  };

  return <Room color={'green'} onClick={onClickHandler}></Room>;
};

export default EmptyRoom;
