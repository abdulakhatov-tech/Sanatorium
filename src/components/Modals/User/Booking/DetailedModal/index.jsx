import React from 'react';
import { useTranslation } from '../../../../../hooks';
import useConstants from '../../../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import useGetQueryDataHandler from '../../../../../hooks/useGetQueryData';
import { List, Modal } from 'antd';
import { ObservingWrapper } from './style';
import { setBookedDetailedModalVisibility } from '../../../../../store/modalSlice';

const DetailedModal = ({ id }) => {
  const { t } = useTranslation();
  const { bookedUserDetailedInfo } = useConstants();
  const { selectedUser } = useSelector((state) => state.user);
  const { bookedDetailedModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const userData = useGetQueryDataHandler({
    queryKey: `booked-user/${id}`,
  });

  return (
    <Modal
      open={bookedDetailedModalVisibility}
      onCancel={() => dispatch(setBookedDetailedModalVisibility())}
    >
      <ObservingWrapper>
        <List
          size="small"
          // footer={}
          bordered={false}
          dataSource={bookedUserDetailedInfo(userData)}
          renderItem={(item) => (
            <List.Item
              style={{ display: 'flex', padding: '0px', marginTop: 17 }}
            >
              <ObservingWrapper.Column>
                {t(item.title)}:
              </ObservingWrapper.Column>
              <ObservingWrapper.Column>{item.content}</ObservingWrapper.Column>
            </List.Item>
          )}
        />
      </ObservingWrapper>
    </Modal>
  );
};

export default DetailedModal;
