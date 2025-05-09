import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from "../../redux/store";

const CardForm = props => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const DEFAULT_IS_CARD_FAVORITE = false;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ columnId: props.columnId, title, isFavorite: DEFAULT_IS_CARD_FAVORITE }));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button type={"submit"}>Add card</Button>
    </form>
  );
};

export default CardForm;