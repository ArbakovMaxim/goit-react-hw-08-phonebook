import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from '../../components/hooks/index';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <pspan>Добро пожаловать, {user.name}</pspan>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
};
