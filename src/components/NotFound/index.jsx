import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle={t('not_found.subtitle')}
        extra={
          <Button onClick={() => navigate('/')} type="primary">
            {t('not_found.button')}
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
