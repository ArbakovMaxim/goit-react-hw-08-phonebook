import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
  },
});

export const { filterContact } = contactsSlice.actions;
export default contactsSlice.reducer;
