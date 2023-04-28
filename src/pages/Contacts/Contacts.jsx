import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledContac, StyledTitel } from './AppStyled';
import { useSelector } from 'react-redux';
import { selectUsername, selectIsLoggedIn } from 'redux/auth/selectors';
// import { authSelectors } from 'redux/auth';

export default function Contacts() {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <StyledTitel>Phonebook {username}</StyledTitel>
          <ContactForm />
          <StyledContac>Contacts</StyledContac>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
