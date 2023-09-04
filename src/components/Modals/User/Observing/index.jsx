import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMoveUserModalVisibility,
  setUserModalVisibility,
} from '../../../../store/modalSlice';
import { ObservingWrapper } from './style';
import { Button } from '../../../../generic';
import { useTranslation } from '../../../../hooks';
import { userInfo } from '../../../../utils/constants';
import { ModalButtonsWrapper } from '../../../../tools/styles';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';
import EmptySpace from '../EmptySpace';

const ListRender = () => {
  const { t } = useTranslation();

  const { selectedUser } = useSelector((state) => state.user);

  const userData = useGetQueryDataHandler({
    queryKey: `user/${selectedUser?.userID}`,
  });

  return (
    <List
      size="small"
      // footer={}
      bordered={false}
      dataSource={userInfo(userData)}
      renderItem={(item) => (
        <List.Item style={{ display: 'flex', padding: '0px', marginTop: 17 }}>
          <ObservingWrapper.Column>{t(item.title)}:</ObservingWrapper.Column>
          <ObservingWrapper.Column>{item.content}</ObservingWrapper.Column>
        </List.Item>
      )}
    />
  );
};

const Observing = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);

  const confirmDeleteUserModal = () => {};

  if (!selectedUser.userID) return <EmptySpace />;

  return (
    <ObservingWrapper>
      <ListRender />
      <ModalButtonsWrapper>
        <Button onClick={() => dispatch(setUserModalVisibility())}>
          {t('generic.cancel')}
        </Button>
        <Button
          type="primary"
          onClick={() => dispatch(setMoveUserModalVisibility())}
        >
          {t('generic.move')}
        </Button>
        <Button type="primary" danger onClick={confirmDeleteUserModal}>
          {t('generic.delete')}
        </Button>
      </ModalButtonsWrapper>
    </ObservingWrapper>
  );
};

export default Observing;
