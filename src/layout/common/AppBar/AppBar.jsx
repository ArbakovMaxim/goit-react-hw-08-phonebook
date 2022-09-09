import AuthNav from 'layout/common/AuthNav/AuthNav.jsx';
import { Navigation } from 'layout/common/Navigation/Navigation.jsx';
import { UserMenu } from 'layout/common/UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auht-selectors.js';
import { Header } from './AppBar.styled.js.js';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
