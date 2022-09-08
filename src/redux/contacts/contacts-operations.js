import axios from 'axios';
import { toast } from 'react-toastify';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
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

const addContact = contact => dispatch => {
  console.log(contact);
  console.log();
  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .then(toast(`${contact.name} added to contact`))
    .catch(error => dispatch(addContactError(error.message)))
    .catch(error => toast(`${error.message} added to contact`));
};

// DELETE @ /tasks/:id
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /tasks/:id
const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error.message)));
  };

const todosOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
};
export default todosOperations;
