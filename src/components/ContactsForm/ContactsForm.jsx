import React from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsOperations } from 'redux/contacts';
import 'react-phone-input-2/lib/style.css';
import {
  ButtonSubmit,
  FormFormik,
  Input,
  NameForm,
  Phone,
  TitleBlock1,
  TitleBlock2,
  WrapperForm,
} from './ContactsForm.styled';
import { useState } from 'react';

export const ContactsForm = ({ onSave, items }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userinfo = {
      name: e.currentTarget.elements.name.value,
      number: phone.phone,
    };
    if (items.some(contact => contact.name === userinfo.name)) {
      toast.error(`${userinfo.name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addContact(userinfo));
      toast.success(`${userinfo.name} add in contacts`);
      onSave();
      return;
    }
  };

  return (
    <WrapperForm>
      <NameForm>Add contact</NameForm>
      <FormFormik onSubmit={handleSubmit}>
        <TitleBlock1>Name</TitleBlock1>
        <Input type="text" name="name" />
        <TitleBlock2>Number</TitleBlock2>
        <Phone
          type="text"
          country="null"
          regions={'ex-ussr'}
          onChange={phone => setPhone({ phone })}
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormFormik>
    </WrapperForm>
  );
};

// export const ContactsForm = ({ onSave, items }) => {
//   const dispatch = useDispatch();

//   let schema = yup.object().shape({
//     name: yup.string().max(18).min(5).required(),
//   });

//   return (
//     <WrapperForm>
//       <NameForm>Add contact</NameForm>
//       <Formik
//         initialValues={{ name: '', number: '' }}
//         validationSchema={schema}
//         onSubmit={values => {
//           console.log(values);
//           if (items.some(contact => contact.name === values.name)) {
//             toast.error(`${values.name} is already in contacts`);
//           } else {
//             dispatch(contactsOperations.addContact(values));
//             toast.success(`${values.name} add in contacts`);
//             onSave();
//             return;
//           }
//         }}
//       >
//         {props => (
//           <FormFormik>
//             <form onSubmit={props.handleSubmit}>
//               <TitleBlock1>Name</TitleBlock1>
//               <Input
//                 type="text"
//                 onChange={props.handleChange}
//                 value={props.values.name}
//                 name="name"
//               />
//               {props.errors.name && (
//                 <div id="feedback">{props.errors.name}</div>
//               )}
//               <TitleBlock2>Number</TitleBlock2>
//               <Phone
//                 type="text"
//                 onChange={props.handleChange}
//                 value={props.values.number}
//                 name="number"
//                 country="null"
//                 regions={'ex-ussr'}
//               />
//               {props.errors.number && (
//                 <div id="feedback">{props.errors.number}</div>
//               )}
//               <ButtonSubmit type="submit">Add contact</ButtonSubmit>
//             </form>
//           </FormFormik>
//         )}
//       </Formik>
//     </WrapperForm>
//   );
// };

// import * as yup from 'yup';
// import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';
// import {
//   ButtonSubmit,
//   WrapperForm,
//   Input,
//   Eror,
//   NameForm,
//   FormFormik,
//   TitleBlock1,
//   TitleBlock2,
// } from './ContactsForm.styled';
// import { toast } from 'react-toastify';
// import { contactsOperations } from 'redux/contacts';

// export const ContactsForm = ({ onSave, items }) => {
//   const dispatch = useDispatch();
//   const hendleSubmit = (values, { resetForm }) => {
//     if (items.some(contact => contact.name === values.name)) {
//       toast.error(`${values.name} is already in contacts`);
//     } else {
//       dispatch(contactsOperations.addContact(values));
//       toast.success(`${values.name} add in contacts`);
//       onSave();
//       return;
//     }
//     resetForm();
//   };

//   const nameValid =
//     "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
//   const numberValid =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//   let schema = yup.object().shape({
//     name: yup
//       .string()
//       .max(18)
//       .min(5)
//       .matches(
//         nameValid,
//         'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan'
//       )
//       .required(),
//     number: yup
//       .string()
//       .max(15)
//       .min(7)
//       .matches(
//         numberValid,
//         'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//       )
//       .required(),
//   });

//   return (
//     <WrapperForm>
//       <NameForm>Add contact</NameForm>
//       <Formik
//         initialValues={{ name: '', number: '' }}
//         validationSchema={schema}
//         onSubmit={hendleSubmit}
//       >
//         <FormFormik>
//           <TitleBlock1>Name</TitleBlock1>
//           <Input type="text" name="name" />
//           <Eror name="name" component="div" />
//           <TitleBlock2>Number</TitleBlock2>
//           <Input type="tel" name="number" />
//           <Eror name="number" component="div" />
//           <ButtonSubmit type="submit">Add contact</ButtonSubmit>
//         </FormFormik>
//       </Formik>
//     </WrapperForm>
//   );
// };
