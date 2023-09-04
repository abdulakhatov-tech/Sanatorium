import { Button, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  setMoveUserModalVisibility,
  setUserModalVisibility,
} from '../../../../store/modalSlice';
import { Btns, ObservingWrapper } from './style';
import { useTranslation } from '../../../../hooks';
import { userInfo } from '../../../../utils/constants';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const Observing = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.user);
  const data = useGetQueryDataHandler({
    queryKey: `user/${selectedUser?.userID}`,
  });

  const confirmDeleteUserModal = () => {};

  return (
    <ObservingWrapper>
      <List
        size="small"
        footer={
          <Btns>
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
          </Btns>
        }
        bordered={false}
        dataSource={userInfo(data)}
        renderItem={(item) => (
          <List.Item style={{ display: 'flex', padding: '0px', marginTop: 17 }}>
            <ObservingWrapper.Column>{t(item.title)}:</ObservingWrapper.Column>
            <ObservingWrapper.Column>{item.content}</ObservingWrapper.Column>
          </List.Item>
        )}
      />
    </ObservingWrapper>
  );
};

export default Observing;
