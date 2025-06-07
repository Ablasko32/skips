import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Choose Your Skip Size</h1>
      <p className={styles.HeaderDescription}>
        Select the skip size that best suits your needs
      </p>
    </div>
  );
};

export default Header;
