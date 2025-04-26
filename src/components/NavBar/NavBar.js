import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navIcon}>
        <a className="fa fa-tasks" href="/"/>
      </div>
      <div className={styles.navOptions}>
        <a className={styles.navOption} href="/">Home</a>
        <a className={styles.navOption} href="/favorite">Favorite</a>
        <a className={styles.navOption} href="/about">About</a>
      </div>
    </nav>
  )
}

export default NavBar;