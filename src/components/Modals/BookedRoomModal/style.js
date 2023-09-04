import { Modal } from 'antd';
import styled from 'styled-components';
import { ReactComponent as bookedImg } from '../../../assets/icons/no_booked_places.svg';

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    padding: 20px 24px 10px 24px !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
  min-height: 550px;
`;

export const BookedPlacesImage = styled(bookedImg)`
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
`;
