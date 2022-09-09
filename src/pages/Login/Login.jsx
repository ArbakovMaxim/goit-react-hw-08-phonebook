import { Form, Formik } from 'formik';
import {
  ButtonSubmit,
  TitleBlock,
  WrapperForm,
  Input,
  Eror,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const hendleSubmit = (values, { resetForm }) => {
    const password = values.password;
    const email = values.email;
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <WrapperForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={hendleSubmit}
      >
        <Form>
          <TitleBlock>Email</TitleBlock>
          <Input type="email" name="email" />
          <Eror name="email" component="div" />
          <TitleBlock>Password</TitleBlock>
          <Input type="password" name="password" />
          <Eror name="password" component="div" />
          <ButtonSubmit type="submit">Log In</ButtonSubmit>
        </Form>
      </Formik>
    </WrapperForm>
  );
};

export default Login;
