import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const useErrorNotifier = () => {
  const { t } = useTranslation();

  const notFound = {
    message: t('notification_api.notFound'),
  };

  const notFillingError = {
    message: t('notification_api.notFillingError'),
  };

  const errorNotifier = ({ errorStatus = 409 }) => {
    switch (errorStatus) {
      case 409:
        return notification.error({ ...notFound });
      case 404:
        return notification.error({ ...notFound });
      case 'notFillingError':
        return notification.error({ ...notFillingError });
      default:
        return;
    }
  };
  return { errorNotifier };
};

export default useErrorNotifier;
