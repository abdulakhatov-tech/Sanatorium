import { Result } from 'antd';

import { Button } from '../../../../generic';
import { useTranslation } from '../../../../hooks';

const EmptySpace = () => {
  const { t } = useTranslation();

  return (
    <Result
      status={404}
      subTitle={t('information_about_user.room_is_empty')}
      extra={<Button type="primary">{t('generic.add')}</Button>}
    />
  );
};

export default EmptySpace;
