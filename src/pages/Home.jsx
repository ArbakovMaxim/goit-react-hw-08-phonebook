import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link, Wraper } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Wraper>
      {isLoggedIn ? (
        <Link to="/contacts">Your Contacts</Link>
      ) : (
        <Link to="/login">Please Login</Link>
      )}
    </Wraper>
  );
};

export default Home;
