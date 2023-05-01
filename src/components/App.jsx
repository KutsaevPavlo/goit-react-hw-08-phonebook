// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import { useEffect, lazy } from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';

// import { StyledContac, StyledTitel } from './AppStyled';

const HomePage = lazy(() => import('../pages/Home/home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const getIsFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  // console.log(getIsFetchingCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !getIsFetchingCurrentUser && (
      <section>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              {/* <Route path="contacts" element={<ContactsPage />} /> */}
              <PrivateRoute path="contacts">
                <ContactsPage />
              </PrivateRoute>
            </Route>
          </Routes>
        </div>
      </section>
    )
  );
};
