import styles from './Button.module.scss';

const Button = props => {
  // Destrukturyzacja propsów
  const {type="button"} = props;
  //
  return <button className={styles.button} type={props.type || "button"}>{props.children}</button>
}

// Domyślny mechanizm przypisywania wartości domyślnych do propsów w Reaccie
Button.defaultProps={
  type: "button",
}
export default Button;