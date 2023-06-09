import { useDispatch } from 'react-redux';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import {  setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
dispatch(setFilter(event.target.value));
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
