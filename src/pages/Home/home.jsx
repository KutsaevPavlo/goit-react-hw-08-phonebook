import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to contacts manager!{' '}
        <span role="img" aria-label="Greeting icon">
          📞
        </span>
      </h1>

      {/* {
      isLoggedIn ? (
        <p>Welcome to contacts manager!</p>
      ) : (
        <p>You need to LogIn or Register</p>
      )} */}
    </div>
  );
}
