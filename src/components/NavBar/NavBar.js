import styles from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navIcon}>
        <Link className="fa fa-tasks" to="/"/>
      </div>
      <div className={styles.navOptions}>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;