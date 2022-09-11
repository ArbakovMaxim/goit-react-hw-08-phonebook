import authApi from './authApi';

export const getContacts = async () => {
  const { data } = await authApi.get('/contacts');
  return data;
};

export const addContact = async values => {
  const { data } = await authApi.post('/contacts', values);
  return data;
};

export const removeContact = async id => {
  const { data } = await authApi.delete(`/contacts/${id}`);
  return data;
};
