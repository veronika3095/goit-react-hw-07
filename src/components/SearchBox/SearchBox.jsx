
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name); 

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));  
  };

  return (
    <input
      type="text"
      className={styles.searchInput}
      value={filter}  
      onChange={handleFilterChange}  
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;