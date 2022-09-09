import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    console.log(`contacts = ${contacts}`);
    console.log(`filter = ${filter}`);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    //return contacts;
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
