import React from "react";
import styles from "./index.module.scss";
import { image } from "../../assets/image";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left_content}>
          <img className={styles.logo} src={image.logo} alt="no logo" />
          <button>Главная</button>
          <button>Избранное</button>
        </div>
        <div className={styles.right_content}>
          <input className={styles.search} placeholder="Search"></input>
          <img src={image.basket} alt="basket"></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
