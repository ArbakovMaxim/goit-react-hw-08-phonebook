import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async values => {
  const { data } = await instance.post('/contacts', values);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
