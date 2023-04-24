import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';

export default function Home() {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div>
      HOME
      <p>Welcome to contacts manager!</p>
      {/* {
      isLoggedIn ? (
        <p>Welcome to contacts manager!</p>
      ) : (
        <p>You need to LogIn or Register</p>
      )} */}
    </div>
  );
}
