import { Link } from './Navigation.styled';
import { Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Главная</Link>
      {isLoggedIn && <Link to="/contacts">Контакты</Link>}
    </Nav>
  );
};
