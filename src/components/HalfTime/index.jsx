import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import UserTable from '../../Generic/Table';
import useQueryHandler from '../../hooks/useQuery';
import { CenteredWrapper } from '../../Generic/Styles';
import { CustomTitle } from '../../Generic/CustomHelpers';

const HalfTime = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: 'half-time-users',
    queryLink: '/users/half-time',
  });

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t('home.home_half_users_section')}
      </CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default HalfTime;
