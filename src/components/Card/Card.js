import styles from './Card.module.scss';
import {clsx} from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {removeCard, selectIsFavoriteById, toggleCardFavoriteStatus} from "../../redux/store";

const Card = props => {

  const dispatch = useDispatch();
  const cardId = props.id;
  const isFavorite = useSelector(state => selectIsFavoriteById(state, cardId));

  const handleAddToFavoriteSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavoriteStatus(cardId));
  }

  const handleRemoveSubmit = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.icons}>
        <a className={clsx(
          'fa fa-star-o',
          isFavorite && styles.isActive
        )} onClick={handleAddToFavoriteSubmit}></a>
        <a className='fa fa-trash' onClick={handleRemoveSubmit}></a>
      </div>
    </li>
  );
};

export default Card;