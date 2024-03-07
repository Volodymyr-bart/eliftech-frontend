import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Drug, DrugCart } from "../interface";

type useCart = {
  loading: boolean;
  drugs: DrugCart[];
  favorites: Drug[];
  addDrugToCart: (drug: Drug) => void;
  deleteDrugFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  setField: (fields: Partial<useCart>) => void;
  clearCart: () => void;
  toggleFavoriteDrug: (drug: Drug) => void;
};

export const useCart = createWithEqualityFn<useCart>()((set) => {
  const storedDrugs = localStorage.getItem("cartDrugs");
  const initialDrugs = storedDrugs ? JSON.parse(storedDrugs) : [];

  const favoritesStoredDrugs = localStorage.getItem("favoriteDrugs");
  const initialFavoritesDrugs = favoritesStoredDrugs
    ? JSON.parse(favoritesStoredDrugs)
    : [];

  return {
    drugs: initialDrugs,
    loading: false,
    favorites: initialFavoritesDrugs,
    addDrugToCart: (drug) =>
      set((state) => {
        const existingDrug = state.drugs.find((d) => d._id === drug._id);

        if (existingDrug) {
          const updatedDrugs = state.drugs.map((d) =>
            d._id === drug._id ? { ...d, quantity: d.quantity + 1 } : d
          );
          localStorage.setItem("cartDrugs", JSON.stringify(updatedDrugs));
          return { drugs: updatedDrugs, loading: false };
        } else {
          const updatedDrugs = [...state.drugs, { ...drug, quantity: 1 }];
          localStorage.setItem("cartDrugs", JSON.stringify(updatedDrugs));
          return { drugs: updatedDrugs, loading: false };
        }
      }),
    deleteDrugFromCart: (id) =>
      set((state) => {
        const updatedDrugs = state.drugs.filter((drug) => drug._id !== id);
        localStorage.setItem("cartDrugs", JSON.stringify(updatedDrugs));
        return { drugs: updatedDrugs, loading: false };
      }),
    incrementQuantity: (id) =>
      set((state) => {
        const updatedDrugs = state.drugs.map((drug) =>
          drug._id === id ? { ...drug, quantity: drug.quantity + 1 } : drug
        );
        localStorage.setItem("cartDrugs", JSON.stringify(updatedDrugs));
        return { drugs: updatedDrugs, loading: false };
      }),

    decrementQuantity: (id) =>
      set((state) => {
        const updatedDrugs = state.drugs.map((drug) =>
          drug._id === id && drug.quantity > 1
            ? { ...drug, quantity: drug.quantity - 1 }
            : drug
        );
        localStorage.setItem("cartDrugs", JSON.stringify(updatedDrugs));
        return { drugs: updatedDrugs, loading: false };
      }),
    setField: (obj) => {
      set((state) => ({ ...state, ...obj }));
    },
    clearCart: () => {
      set({
        drugs: [],
      });
      localStorage.setItem("cartDrugs", JSON.stringify([]));
    },
    toggleFavoriteDrug: (drug) =>
      set((state) => {
        const isFavorite = state.favorites.some(
          (favDrug) => favDrug._id === drug._id
        );

        if (isFavorite) {
          const updatedFavorites = state.favorites.filter(
            (favDrug) => favDrug._id !== drug._id
          );
          localStorage.setItem(
            "favoriteDrugs",
            JSON.stringify(updatedFavorites)
          );
          return { favorites: updatedFavorites, loading: false };
        } else {
          const updatedFavorites = [...state.favorites, drug];
          localStorage.setItem(
            "favoriteDrugs",
            JSON.stringify(updatedFavorites)
          );
          return { favorites: updatedFavorites, loading: false };
        }
      }),
  };
}, shallow);
