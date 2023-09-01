import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();
  const $navigate = (pathname, url) => navigate(`${pathname}${url}`);

  return { $navigate };
};

export default useNavigation;
