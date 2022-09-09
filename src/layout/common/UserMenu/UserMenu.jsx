import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from '../../../hooks/index';
import avatar from './avatar.png';
import logOut from '../../../images/logOut.png';
import { BtnLogOut, Img, WraperUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <WraperUserMenu>
      <Img src={avatar} alt="" />
      <span>
        Welcome!
        <br />
        {user.name}
      </span>
      <BtnLogOut
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <Img src={logOut} alt="" />
      </BtnLogOut>
    </WraperUserMenu>
  );
};
