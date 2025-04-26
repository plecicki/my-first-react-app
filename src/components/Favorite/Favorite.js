import styles from './Favorite.module.scss'
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import {getFavoriteCards} from "../../redux/store";

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));
  console.log('cards', cards);

  return (
    <div className={styles.column}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {
          cards.length !== 0 ?
          cards.map(card => <Card key={card.id} id={card.id} title={card.title} />) :
            <h2>No cards...</h2>
        }
      </ul>
    </div>
  )
}

export default Favorite;