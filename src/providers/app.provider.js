import ru_RU from 'antd/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store } from '../store';

const Wrapper = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Wrapper;
