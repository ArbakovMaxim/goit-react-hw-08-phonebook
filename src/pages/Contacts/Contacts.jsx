import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-slice';
import Modal from '../../components/Modal/Modal';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';
import { BtnAddContact, Wraper } from './Contacts.styled';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function Contacts() {
  const { items, filter } = useSelector(contactsSelectors.getContactsAll);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onfilterContact = e => dispatch(filterContact(e.target.value));
  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase().trim();
    return items.filter(item => item.name.toLowerCase().includes(normalized));
  };

  return (
    <>
      <div style={barStyles}>{isLoadingContacts && <h1>Loading...</h1>}</div>
      <Wraper>
        <Filter Value={filter} onChangeFilter={onfilterContact} />
        <BtnAddContact onClick={toggleModal} aria-label="New contact">
          Add contact
        </BtnAddContact>
      </Wraper>
      <ContactsList items={getVisibleContacts()} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactsForm onSave={toggleModal} items={getVisibleContacts()} />
        </Modal>
      )}
    </>
  );
}
