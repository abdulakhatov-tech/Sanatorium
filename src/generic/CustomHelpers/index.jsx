import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

import { Title } from '../Styles';

export const CustomTitle = ({ children, showBackWard }) => {
  const navigate = useNavigate();

  return (
    <Title mt={true}>
      {showBackWard && (
        <LeftOutlined
          style={{ fontSize: '2rem', paddingLeft: '10px', cursor: 'pointer' }}
          onClick={() => navigate(-1)}
        />
      )}
      {children}
    </Title>
  );
};
