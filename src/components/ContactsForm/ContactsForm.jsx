import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
  NameForm,
  FormFormik,
} from './ContactsForm.styled';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { toast } from 'react-toastify';

export const ContactsForm = ({ onSave }) => {
  const contactsList = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const hendleSubmit = (values, { resetForm }) => {
    if (contactsList.some(contact => contact.name === values.name)) {
      toast(`${values.name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addContact(values));
      onSave();
      return;
    }
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const numberValid =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  let schema = yup.object().shape({
    name: yup
      .string()
      .max(15)
      .min(5)
      .matches(
        nameValid,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
      )
      .required(),
    number: yup
      .string()
      .max(12)
      .min(7)
      .matches(
        numberValid,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <WrapperForm>
      <NameForm>Add contact</NameForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <FormFormik>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock>Number</TitleBlock>
          <Input type="tel" name="number" />
          <Eror name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormFormik>
      </Formik>
    </WrapperForm>
  );
};
