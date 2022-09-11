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
    toast.success(`${result.name} add contacts`);
    return await api.getContacts();
  } catch (error) {
    toast.error(error.message);
  }
});

// DELETE @ /tasks/:id
const deleteContact = createAsyncThunk('contacts/remove', async useInfo => {
  try {
    await api.removeContact(useInfo.id);
    toast.success(`${useInfo.name} delete`);
    return await api.getContacts();
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
