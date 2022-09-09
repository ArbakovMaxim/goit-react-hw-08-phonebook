import axios from 'axios';
import { toast } from 'react-toastify';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
    toast.success(`${contact.name} added to contact`);
  } catch (error) {
    dispatch(addContactError(error.message));
    toast.error(`${error.message} added to contact`);
  }
};

// DELETE @ /tasks/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  //   try {
  //     const { data } = await axios.delete(`/contacts/${contactId}`);
  //     dispatch(deleteContactSuccess(data));
  //   } catch (error) {
  //     dispatch(deleteContactError(error.message));
  //   }
  // };
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const todosOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default todosOperations;
