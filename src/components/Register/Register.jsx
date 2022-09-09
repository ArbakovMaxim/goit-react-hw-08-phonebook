import * as yup from 'yup';

import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Register.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const Register = () => {
  const dispatch = useDispatch();

  const hendleSubmit = (values, { resetForm }) => {
    const name = values.name;
    const email = values.email;
    const password = values.password;
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const nameValid =
    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        nameValid,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
      )
      .required(),
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
          <Input type="password" name="password" minLength="7" />
          <Eror name="password" component="div" />
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};

export default Register;
