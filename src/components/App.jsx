// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import { useEffect, lazy } from 'react';
import { lazy } from 'react';

// import { StyledContac, StyledTitel } from './AppStyled';

const HomePage = lazy(() => import('../pages/Home/home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>

        {/* <StyledTitel>Phonebook</StyledTitel>
        <ContactForm />
        <StyledContac>Contacts</StyledContac>
        <Filter />
        <ContactList /> */}
      </div>
    </section>
  );
};
