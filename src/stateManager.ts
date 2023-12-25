import { create } from "zustand";

type Store = {
  cats: Array<{}>;
  favoritesCats: Array<{}>;
  addFavorites: (cat: Object) => void;
};
export const useStore = create<Store>()((set) => ({
  cats: [],
  favoritesCats: [],
  addFavorites: (cat) =>
    set((state) => {
      return { favoritesCats: [...state.favoritesCats, cat] };
    }),
}));
// addFavorites: (cat:Object) => set((state) =>({favoritesCats: state.favoritesCats})),

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))
