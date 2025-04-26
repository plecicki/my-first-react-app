import styles from './Card.module.scss';
import {clsx} from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {getCardById, toggleCardFavoriteStatus} from "../../redux/store";

const Card = props => {

  const dispatch = useDispatch();
  const cardId = props.id;
  let isFavorite = useSelector(state => getCardById(state, cardId)).isFavorite;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavoriteStatus(cardId));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <a className={clsx(
        'fa fa-star-o',
        isFavorite && styles.isActive
      )} onClick={handleSubmit}></a>
    </li>
  );
};

export default Card;