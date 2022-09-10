import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsOperations } from 'redux/contacts';

import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
  Name,
  Number,
  NoContact,
} from './ContactList.styled';

export const ContactsList = ({ items }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id, name) => {
    dispatch(contactsOperations.deleteContact(id));
    toast.success(`${name} delete`);
  };

  return (
    <ContWrapper>
      {items.length === 0 ? (
        <NoContact>You have no contacts. Please add.</NoContact>
      ) : (
        <ContList>
          {items.map(contacts => {
            return (
              <ContItem key={contacts.id}>
                <Name>{contacts.name}:</Name>
                <Number>+{contacts.number}</Number>
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
