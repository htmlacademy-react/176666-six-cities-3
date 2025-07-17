import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getCurrentAuth } from '../../store/slices/auth-slice/auth-reducer';

export default function SignMarkup () {
  const dispatch = useAppDispatch();
  const loggedStatus = useAppSelector(getCurrentAuth);
  const handleClick = () => {
    dispatch(logoutAction());
  };

  return loggedStatus === AuthorizationStatus.Auth ? (
    <Link className="header__nav-link" to="/login" onClick={handleClick}>
      <span className="header__signout">{'Sign out'}</span>
    </Link>
  ) : (
    <Link className="header__nav-link" to="/login">
      <span className="header__signin">{'Sign in'}</span>
    </Link>
  );
}
