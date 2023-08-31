import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Arrow, Title } from '../styles';

const ArrowBack = ({ translation }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Title onClick={() => navigate(-1)}>
      <Arrow style={{ marginRight: '7px' }} /> {t(translation)}
    </Title>
  );
};

export default ArrowBack;
