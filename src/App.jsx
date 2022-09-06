// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { Container } from 'components/ui/Container.styled';
// import { Contacts } from './components/Contacts/Contacts';
// import { ContactsForm } from './components/ContactsForm/ContactsForm';
// import { Section } from 'components/ui/Section/Section';
// import { Filter } from 'components/Filter/Filter';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Container>
//       <Section title="PhoneBook">
//         <ContactsForm />
//       </Section>
//       <Section title="Contacts">
//         <Filter />
//         <Contacts />
//       </Section>
//       <ToastContainer />
//     </Container>
//   );
// };
