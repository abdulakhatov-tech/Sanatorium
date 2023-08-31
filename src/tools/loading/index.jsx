import { Spin } from 'antd';

import { CenteredWrapper } from '../styles';

const IsLoading = (size = 'large') => {
  return (
    <CenteredWrapper>
      <Spin size={size} />
    </CenteredWrapper>
  );
};

export default IsLoading;
