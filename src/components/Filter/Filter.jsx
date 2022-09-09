import * as yup from 'yup';
import { TitleBlock } from 'components/ContactsForm/ContactsForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
});

export const Filter = ({ onChangeFilter, value }) => {
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
