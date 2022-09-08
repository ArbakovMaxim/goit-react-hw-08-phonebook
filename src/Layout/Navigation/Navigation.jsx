import { Link } from './Navigation.styled';
import { Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home page</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
