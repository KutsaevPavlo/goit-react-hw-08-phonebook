import {
  StyledFilter,
  StyledFilterInput,
  StyledFilterItems,
} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { SelectFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(SelectFilter(target.value));
  };

  return (
    <>
      <StyledFilter>
        <StyledFilterItems>Find contacts by name</StyledFilterItems>
        <StyledFilterInput
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </StyledFilter>
    </>
  );
};
