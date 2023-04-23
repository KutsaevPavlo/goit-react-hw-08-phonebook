import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Home() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome to contacts manager!</p>
      ) : (
        <p>You need to LogIn or Register</p>
      )}
    </div>
  );
}
