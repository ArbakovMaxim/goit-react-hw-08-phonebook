// import { createSelector } from '@reduxjs/toolkit';

const getContactsAll = state => state.contacts;

const getLoading = state => state.contacts.loading;

const contactsSelectors = {
  getLoading,
  getContactsAll,
};
export default contactsSelectors;
