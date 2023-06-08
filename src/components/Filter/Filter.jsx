import { useDispatch } from 'react-redux';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { filteredContacts } from 'store/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(filteredContacts(value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          onChange={handleChange}
          placeholder="Search contacts by name"
        />
      </FilterLabel>
    </FilterContainer>
  );
};
