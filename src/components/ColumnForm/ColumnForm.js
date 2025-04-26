import styles from './ColumnForm.module.scss';
import {useState} from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from 'react-redux';
import { addColumn } from "../../redux/store";

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:</label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label>Icon:</label>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button type="submit">Add column</Button>
    </form>
  );
};

export default ColumnForm;