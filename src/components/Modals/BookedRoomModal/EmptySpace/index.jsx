import { Result } from 'antd';
import { useTranslation } from '../../../../hooks';
import { Button } from '../../../../generic';

const EmptySpace = () => {
  const { t } = useTranslation();

  return (
    <Result
      status={404}
      subTitle={t('information_about_user.room_is_empty')}
      extra={<Button>{t('generic.add')}</Button>}
    />
  );
};

export default EmptySpace;
