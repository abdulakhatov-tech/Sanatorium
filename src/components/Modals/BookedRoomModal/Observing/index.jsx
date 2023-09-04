import { useDispatch, useSelector } from 'react-redux';

import { CenteredWrapper, ModalButtonsWrapper } from '../../../../tools/styles';
import {
  setAddUserModalVisibility,
  setMoveUserModalVisibility,
  setUserModalVisibility,
} from '../../../../store/modalSlice';
import { BookedPlacesImage, Container, Title } from '../style';
import { useTranslation } from '../../../../hooks';
import { Button } from '../../../../generic';
import EmptySpace from '../EmptySpace';
import { Btns, ObservingWrapper } from './style';
import { List } from 'antd';
import { userInfo } from '../../../../utils/constants';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const Observing = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedUser } = useSelector((state) => state.user);

  const data = useGetQueryDataHandler({
    queryKey: `user/${selectedUser?.userID}`,
  });

  return (
    <>
      {!selectedUser?.userID ? (
        <EmptySpace />
      ) : (
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
              </Btns>
            }
            bordered={false}
            dataSource={userInfo(data)}
            renderItem={(item) => (
              <List.Item
                style={{ display: 'flex', padding: '0px', marginTop: 17 }}
              >
                <ObservingWrapper.Column>
                  {t(item.title)}:
                </ObservingWrapper.Column>
                <ObservingWrapper.Column>
                  {item.content}
                </ObservingWrapper.Column>
              </List.Item>
            )}
          />
        </ObservingWrapper>
      )}
    </>
  );
};

export default Observing;
