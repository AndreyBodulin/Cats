import React, { useEffect } from "react";
import Header from "../src/components/header/Header";
import styles from "./index.module.scss";
import { getCats } from "./request";
import { useStore } from "./stateManager";
import { AxiosResponse } from "axios";

const App = () => {
  const cats = useStore((state) => state.cats);

  const addCats = useStore((state) => state.addCats);

  useEffect(() => {
    getCats()
      .then((res) => {
        addCats(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(cats);

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        <div className={styles.list}>
          {cats.map((item) => {
            return (
              <div>
                <img className={styles.picture} src={item.url}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
