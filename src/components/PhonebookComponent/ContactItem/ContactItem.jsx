// system
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

// components
import PropTypes from 'prop-types';
import { Button, Item, Text } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <Item>
        <Text>{contact.name}</Text>
        <p>{contact.phone}</p>

        <Button type="button" onClick={handleDelete}>
          X
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
