import React, { useEffect } from "react";
import Header from "../src/components/header/Header";
import styles from "./index.module.scss";
import { getCats } from "./request";
import { useCats } from "./stateManager";

const App = () => {
  useEffect(() => {
    getCats.then((res) => console.log(res)).catch((err) => console.log(err));
  }, []);
  console.log(useCats((state: any) => state.cats));

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        <div className={styles.list}></div>
      </div>
    </div>
  );
};

export default App;
