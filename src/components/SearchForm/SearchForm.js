import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import { searchString, getSearch } from "../../redux/store";
import { useSelector } from 'react-redux';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const searchStoreValue = useSelector(state => getSearch(state));
  useEffect(() => setSearchText(searchStoreValue.searchText),[])

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchString({ searchText }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)} />
      <Button type='submit'>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;