import React, { useEffect } from "react";
import Header from "../src/components/header/Header";
import styles from "./index.module.scss";
import { getCats } from "./request";
import { useStore } from "./stateManager";
import { AxiosResponse } from "axios";
import { Cat } from "./types";

const App = () => {
  const cats = useStore((state) => state.cats);
  const catsFav = useStore((state) => state.favoritesCats);
  const catsBas = useStore((state) => state.basketCats);
  const addCats = useStore((state) => state.addCats);
  const addFav = useStore((state) => state.addFavorites);
  const addBas = useStore((state) => state.addBasket);

  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    getCats()
      .then((res) => {
        addCats(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        <div className={styles.block_list}>
          <div className={styles.sort}>
            <span>Сортировать</span>
          </div>
          {cats.map((item, index) => {
            return (
              <div key={`-${index}`} className={styles.element_list}>
                <img className={styles.picture} src={item.url}></img>
                <span>Цена: {getRandomInt(1, 9999)}</span>
                <button
                  onClick={() => {
                    addFav(item);
                    console.log(item);
                  }}
                >
                  Добавить в избранное
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
