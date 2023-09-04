import { useDispatch } from 'react-redux';

import { CenteredWrapper, ModalButtonsWrapper } from '../../../../tools/styles';
import { setAddUserModalVisibility } from '../../../../store/modalSlice';
import { BookedPlacesImage, Container, Title } from '../style';
import { useTranslation } from '../../../../hooks';
import { Button } from '../../../../generic';

const Edit = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Container>
      <CenteredWrapper>
        <BookedPlacesImage />
        <Title>
          {t('information_about_user.room_is_empty') ||
            'Room is empty. You can add new user by clicking «Add»There is no any booked places!'}
        </Title>
      </CenteredWrapper>

      <ModalButtonsWrapper>
        <Button
          type="primary"
          onClick={() => dispatch(setAddUserModalVisibility())}
        >
          {t('generic.add')}
        </Button>
      </ModalButtonsWrapper>
    </Container>
  );
};

export default Edit;
