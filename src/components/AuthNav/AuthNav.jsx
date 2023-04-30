import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './AuthNav.module.css';
import { selectUsername, selectIsLoggedIn } from 'redux/auth/selectors';

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span role="img" aria-label="Greeting icon">
            📞
          </span>
        </div>
      ) : (
        <div>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>

          <NavLink className={css.link} to="/login">
            Log In
          </NavLink>
        </div>
      )}
      {/* <NavLink className={css.link} to="/register">
        Register
      </NavLink>

      <NavLink className={css.link} to="/login">
        Log In
      </NavLink> */}
    </div>
  );
};
