import { useSelector, useDispatch } from 'react-redux';
//import { toast } from 'react-toastify';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  //   const onToggleCompleted = id =>
  //     dispatch(contactsOperations.toggleCompleted(id));

  return (
    <ContWrapper>
      {contactsList.length === 0 ? (
        <p>не чего нет</p>
      ) : (
        <ContList>
          {contactsList.map(contacts => {
            return (
              <ContItem key={contacts.id}>
                {contacts.name}: {contacts.phone}
                <BtnDeleteContact
                  type="button"
                  onClick={() => {
                    onDeleteContact(contacts.id, contacts.name);
                  }}
                >
                  Delete
                </BtnDeleteContact>
              </ContItem>
            );
          })}
        </ContList>
      )}
    </ContWrapper>
  );
};

export default ContactsList;
