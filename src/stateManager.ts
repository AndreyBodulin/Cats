import { create } from "zustand";

export const useCats = create((set) => ({
  cats: [
    { name: "vasya", age: "fuck" },
    { name: "god", age: "hole" },
  ],
  favoritesCats: [],
  addFavorites: (cat: object) =>
    set((state: any) => {
      state.favoritesCats.push(cat);
    }),
}));
