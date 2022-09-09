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
import {
  BtnAddContact,
  Wraper,
  WraperLoading,
  WraperPage,
} from './Contacts.styled';

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
    <WraperPage>
      <WraperLoading>{isLoadingContacts && <h1>Loading...</h1>}</WraperLoading>
      <Wraper>
        <Filter Value={filter} onChangeFilter={onfilterContact} />
      </Wraper>
      <ContactsList items={getVisibleContacts()} />
      <BtnAddContact onClick={toggleModal} aria-label="New contact">
        Add contact
      </BtnAddContact>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactsForm onSave={toggleModal} items={getVisibleContacts()} />
        </Modal>
      )}
    </WraperPage>
  );
}
