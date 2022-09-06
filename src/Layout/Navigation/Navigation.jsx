import { Link } from './Navigation.styled';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Главная</Link>
      <Link to="/contacts">Контакты</Link>
    </Nav>
  );
};
