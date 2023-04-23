import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledContac, StyledTitel } from './AppStyled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Contacts() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn && (
        <div>
          <StyledTitel>Phonebook</StyledTitel>
          <ContactForm />
          <StyledContac>Contacts</StyledContac>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
}
