import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({ component, ...routeProps }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route {...routeProps}>
      isLoggedIn ? component : <Redirect to="/login" />
    </Route>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
