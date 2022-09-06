import { Link, Reg } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Reg>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </Reg>
  );
}
