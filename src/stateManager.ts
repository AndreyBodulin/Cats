import { create } from "zustand";
import { Cat, Cats } from "./types";

type Store = {
  cats: Cats;
  favoritesCats: Cats;
  addCats: (gettingCats: Cats) => void;
  addFavorites: (cat: Cat) => void;
};
export const useStore = create<Store>()((set) => ({
  cats: [],
  favoritesCats: [],
  addCats: (gettingCats: Cats) =>
    set((state) => ({ ...state, cats: gettingCats })),
  addFavorites: (cat: Cat) =>
    set((state) => ({
      ...state,
      favoritesCats: [...state.favoritesCats, cat],
    })),
}));
