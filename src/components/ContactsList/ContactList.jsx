import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
  Name,
  Number,
  NoContact,
} from './ContactList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = (id, name) => {
    dispatch(contactsOperations.deleteContact(id));
    toast.success(`${name} delete`);
  };

  return (
    <ContWrapper>
      {contactsList.length === 0 ? (
        <NoContact>You have no contacts. Please add.</NoContact>
      ) : (
        <ContList>
          {contactsList.map(contacts => {
            return (
              <ContItem key={contacts.id}>
                <Name>{contacts.name}:</Name>
                <Number>{contacts.number}</Number>
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
