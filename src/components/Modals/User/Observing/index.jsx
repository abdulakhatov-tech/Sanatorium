import { List } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMoveUserModalVisibility,
  setUserModalVisibility,
} from '../../../../store/modalSlice';
import { ObservingWrapper } from './style';
import { Button } from '../../../../generic';
import { useTranslation } from '../../../../hooks';
import useConstants from '../../../../utils/constants';
import { ModalButtonsWrapper } from '../../../../tools/styles';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';
import EmptySpace from '../EmptySpace';
import { useDeleteUser } from '../../../../hooks/useQueryActions';

const ListRender = () => {
  const { t } = useTranslation();
  const { userInfo } = useConstants();
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
  const { mutate } = useDeleteUser();
  const [loading, setLoading] = useState(false);
  const { selectedUser } = useSelector((state) => state.user);

  const deleteUserHandler = () => {
    setLoading(true);
    mutate({
      body: {
        roomNumber: selectedUser?.roomValue?.roomNumber,
        clienteID: selectedUser?.clienteValue?.clienteID,
        _id: selectedUser?.userID,
      },
    });
    setTimeout(() => {
      dispatch(setUserModalVisibility());
      setLoading(false);
    }, 2000);
  };

  if (!selectedUser.userID) return <EmptySpace />;

  return (
    <ObservingWrapper>
      <ListRender />
      <ModalButtonsWrapper>
        <Button
          disabled={loading}
          onClick={() => dispatch(setUserModalVisibility())}
        >
          {t('generic.cancel')}
        </Button>
        <Button
          disabled={loading}
          type="primary"
          onClick={() => dispatch(setMoveUserModalVisibility())}
        >
          {t('generic.move')}
        </Button>
        <Button
          type="primary"
          danger
          onClick={deleteUserHandler}
          loading={loading}
        >
          {t('generic.delete')}
        </Button>
      </ModalButtonsWrapper>
    </ObservingWrapper>
  );
};

export default Observing;
