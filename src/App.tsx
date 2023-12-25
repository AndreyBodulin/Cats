import React, { useEffect } from "react";
import Header from "../src/components/header/Header";
import styles from "./index.module.scss";
import { getCats } from "./request";
import { useStore } from "./stateManager";
import { AxiosResponse } from "axios";

const App = () => {
  let cats = useStore((state) => {
    state.cats;
  });
  useEffect(() => {
    getCats
      .then((res) => {
        cats = res.data;
        console.log(cats);
        return cats;
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(cats);
  // console.log(useStore((state) => state.cats));

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
