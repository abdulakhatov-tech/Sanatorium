import { Result } from 'antd';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../../generic';
import { useTranslation } from '../../../../../hooks';
import { ModalButtonsWrapper } from '../../../../../tools/styles';
import {
  setAddUserModalVisibility,
  setUserModalVisibility,
} from '../../../../../store/modalSlice';

const EmptyBooking = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <Result
        status="404"
        subTitle={
          t('information_about_user.no_booked_places') ||
          'There is no any booked places!'
        }
      />
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
    </>
  );
};

export default EmptyBooking;
