import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  ButtonSubmit,
  WrapperForm,
  Input,
  Eror,
  NameForm,
  FormFormik,
  TitleBlock1,
  TitleBlock2,
} from './ContactsForm.styled';
import { toast } from 'react-toastify';
import { contactsOperations } from 'redux/contacts';

export const ContactsForm = ({ onSave, items }) => {
  const dispatch = useDispatch();
  const hendleSubmit = (values, { resetForm }) => {
    if (items.some(contact => contact.name === values.name)) {
      toast.error(`${values.name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addContact(values));
      toast.success(`${values.name} add in contacts`);
      onSave();
      return;
    }
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  const numberValid =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let schema = yup.object().shape({
    name: yup
      .string()
      .max(18)
      .min(5)
      .matches(
        nameValid,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
      )
      .required(),
    number: yup
      .string()
      .max(15)
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
          <TitleBlock1>Name</TitleBlock1>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock2>Number</TitleBlock2>
          <Input type="tel" name="number" />
          <Eror name="number" component="div" />
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormFormik>
      </Formik>
    </WrapperForm>
  );
};
