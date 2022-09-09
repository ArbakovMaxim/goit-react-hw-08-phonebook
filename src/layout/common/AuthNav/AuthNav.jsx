import { Link, Reg } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Reg>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </Reg>
  );
}
