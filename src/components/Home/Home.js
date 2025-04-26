import styles from './Home.module.scss'
import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";
import Lists from '../Lists/Lists';

const NavBar = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <Lists />
    </div>
  )
}

export default NavBar;