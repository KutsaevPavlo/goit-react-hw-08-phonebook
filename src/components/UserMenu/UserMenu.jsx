// import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUsername } from 'redux/auth/selectors';

export const UserMenu = () => {
  const username = useSelector(selectUsername);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {username}</p>
      <button type="button">Logout</button>
    </div>
  );
};
