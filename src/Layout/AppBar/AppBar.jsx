import AuthNav from 'Layout/AuthNav/AuthNav.jsx';
import { Navigation } from 'Layout/Navigation/Navigation.jsx';
import { UserMenu } from 'Layout/UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auht-selectors.js';
import { Header } from './AppBar.styled.js';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
