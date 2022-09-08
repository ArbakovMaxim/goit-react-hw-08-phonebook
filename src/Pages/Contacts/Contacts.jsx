import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
//import { HiPlus } from 'react-icons/hi';
//import TodoEditor from '../components/TodoEditor';
//import Filter from '../components/TodoFilter';
//import Stats from '../components/Stats';
//import IconButton from '../components/IconButton';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contacts/index';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={barStyles}>{isLoadingContacts && <h1>Загружаем...</h1>}</div>
      <Filter />
      <ContactsList />
      <button onClick={toggleModal} aria-label="New contact">
        add contact
      </button>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactsForm onSave={toggleModal} />
        </Modal>
      )}
    </>
  );
}
