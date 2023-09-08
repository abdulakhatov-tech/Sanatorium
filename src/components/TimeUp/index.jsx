import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

import UserTable from '../../Generic/Table';
import useQueryHandler from '../../hooks/useQuery';
import { CenteredWrapper } from '../../Generic/Styles';
import { CustomTitle } from '../../Generic/CustomHelpers';

const TimeUp = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: 'time-up-users',
    queryLink: '/users/time-up',
  });

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t('home.home_up_users_section')}
      </CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default TimeUp;
