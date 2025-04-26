import styles from './Home.module.scss'
import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";

const NavBar = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  )
}

export default NavBar;