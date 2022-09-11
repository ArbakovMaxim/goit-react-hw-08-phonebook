import { Form, Formik } from 'formik';
import { ButtonSubmit, TitleBlock, Input, Eror } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const hendleSubmit = (values, { resetForm }) => {
    const password = values.password;
    const email = values.email;
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <>
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
    </>
  );
};
