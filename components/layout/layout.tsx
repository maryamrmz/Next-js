import { FC } from 'react';

import MainHeader from './main-header';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
