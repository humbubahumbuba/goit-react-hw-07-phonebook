// system
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

// components
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </List>
  );
};
