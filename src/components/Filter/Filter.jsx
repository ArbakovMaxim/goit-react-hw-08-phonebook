import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { TitleBlock } from 'components/ContactsForm/ContactsForm.styled';
import { changeFilter, contactsSelectors } from 'redux/contacts';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <TitleBlock>Find contacts by name</TitleBlock>
      <input
        value={value}
        type="text"
        name="filter"
        pattern={schema}
        title="only sting"
        onChange={onChangeFilter}
      />
    </div>
  );
};
