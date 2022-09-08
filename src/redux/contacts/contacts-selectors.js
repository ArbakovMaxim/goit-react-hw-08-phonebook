import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    // console.log(`contacn = ${contacts}`);
    // console.log(`filter = ${filter}`);
    // const normalizedFilter = changeFilter.toLowerCase();
    // console.log(`contacn = ${contacts}`);
    // console.log(`filter = ${filter}`);
    // return contacts.filter(({ description }) =>
    //   description.toLowerCase().includes(normalizedFilter)
    // );
    console.log(`contacts = ${contacts}`);
    console.log(`filter = ${filter}`);
    return contacts;
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default contactsSelectors;
