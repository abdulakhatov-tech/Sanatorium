import { useDispatch } from 'react-redux';

import { CenteredWrapper, ModalButtonsWrapper } from '../../../../tools/styles';
import {
  setAddUserModalVisibility,
  setUserModalVisibility,
} from '../../../../store/modalSlice';
import { BookedPlacesImage, Container, Title } from './style';
import { useTranslation } from '../../../../hooks';
import { Button } from '../../../../generic';

const BookedPlaces = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Container>
      <CenteredWrapper>
        <BookedPlacesImage />
        <Title>
          {t('information_about_user.no_booked_places') ||
            'There is no any booked places!'}
        </Title>
      </CenteredWrapper>

      <ModalButtonsWrapper>
        <Button
          type="default"
          onClick={() => dispatch(setUserModalVisibility())}
        >
          {t('generic.cancel')}
        </Button>
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

export default BookedPlaces;
