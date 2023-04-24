import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';

import { StyledContac, StyledTitel } from './AppStyled';
import Home from 'pages/Home/home';

const HomePage = lazy(() => import('../pages/Home/home'));

export const App = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
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
