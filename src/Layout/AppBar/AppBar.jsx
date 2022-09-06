import AuthNav from 'Layout/AuthNav/AuthNav.jsx';
import { Navigation } from 'Layout/Navigation/Navigation.jsx';
import { UserMenu } from 'Layout/UserMenu/UserMenu.jsx';
import { Header } from './AppBar.styled.js';

export const AppBar = () => {
  const isLog = false;
  return (
    <Header>
      <Navigation />
      {isLog ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
