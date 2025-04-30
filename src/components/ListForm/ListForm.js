import styles from './ListForm.module.scss';
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import {useDispatch} from 'react-redux';
import {addList} from "../../redux/store";

const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  const TITLE_FIELD_NAME = 'title';
  const DESCRIPTION_FIELD_NAME = 'description';

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label htmlFor={TITLE_FIELD_NAME}>Title:</label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} id={TITLE_FIELD_NAME} />
      <label htmlFor={DESCRIPTION_FIELD_NAME}>Description:</label>
      <TextInput value={description} onChange={e => setDescription(e.target.value)} id={DESCRIPTION_FIELD_NAME} />
      <Button type="submit">Add List</Button>
    </form>
  );
};

export default ListForm;