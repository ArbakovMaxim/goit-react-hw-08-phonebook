import * as yup from 'yup';
//import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Register.styled';
// import {
//   useCreateContactsMutation,
//   useGetContactsQuery,
// } from 'redux/phoneBookApi';

const Register = () => {
  // const [createContact] = useCreateContactsMutation();
  //const { data } = useGetContactsQuery();

  const hendleSubmit = (values, { resetForm }) => {
    /*     if (data.some(contact => contact.name === values.name)) {
      toast(`${values.name} is already in contacts`);
    } else { */
    // createContact({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });
    /* toast(`${values.name} added to contact`);
    } */
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
  /*   const numberValid =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/ */ let schema =
    yup.object().shape({
      name: yup
        .string()
        .matches(
          nameValid,
          'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
        )
        .required(),
      /*     number: yup
      .string()
      .matches(
        numberValid,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(), */
    });

  return (
    <WrapperForm>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Name</TitleBlock>
          <Input type="text" name="name" />
          <Eror name="name" component="div" />
          <TitleBlock>Email</TitleBlock>
          <Input type="email" name="email" />
          <Eror name="email" component="div" />
          <TitleBlock>Password</TitleBlock>
          <Input type="password" name="password" />
          <Eror name="password" component="div" />
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};

export default Register;
