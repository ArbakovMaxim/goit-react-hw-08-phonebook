import { toast } from 'react-toastify';
import * as api from 'api/contacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const result = await api.getContacts();

      return result;
    } catch (error) {
      toast.error(error.message);
    }
  }
);

const addContact = createAsyncThunk('contacts/add', async data => {
  try {
    const result = await api.addContact(data);
    return result;
  } catch (error) {
    toast.error(error.message);
  }
});

// DELETE @ /tasks/:id
const deleteContact = createAsyncThunk('contacts/remove', async id => {
  try {
    await api.removeContact(id);
    return id;
  } catch (error) {
    toast.error(error.message);
  }
});

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
