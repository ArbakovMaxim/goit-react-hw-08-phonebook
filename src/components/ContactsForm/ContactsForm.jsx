import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik';
import {
  ButtonSubmit,
  Form,
  Input,
  NameForm,
  Phone,
  TitleBlock1,
  TitleBlock2,
  WrapperForm,
} from './ContactsForm.styled';
import { contactsOperations } from 'redux/contacts';

export const ContactsForm = ({ onSave, items }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, actions) => {
      if (items.some(contact => contact.name === values.name)) {
        toast.error(`${values.name} is already in contacts`);
      } else {
        dispatch(contactsOperations.addContact(values));
        onSave();
        return;
      }
      actions.resetForm();
    },
  });
  return (
    <WrapperForm>
      <NameForm>Add contact</NameForm>
      <Form onSubmit={formik.handleSubmit}>
        <TitleBlock1>Name</TitleBlock1>
        <Input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TitleBlock2>Number</TitleBlock2>
        <Phone
          name="number"
          type="text"
          formik={formik}
          country="null"
          regions={'ex-ussr'}
          onChange={e => formik.setFieldValue('number', e)}
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </WrapperForm>
  );
};
