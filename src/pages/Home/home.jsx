import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const notify = () => {
    toast('Default Notification !');

    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    });

    toast.error('Error Notification !', {
      position: toast.POSITION.TOP_LEFT,
    });

    toast.warn('Warning Notification !', {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    toast.info('Info Notification !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast('Custom Style Notification with css class!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    });
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to contacts manager!{' '}
        <span role="img" aria-label="Greeting icon">
          📞
        </span>
      </h1>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}
