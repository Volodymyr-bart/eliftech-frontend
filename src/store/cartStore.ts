import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Drug, DrugCart } from "../interface";

type useCart = {
  loading: boolean;
  drugs: DrugCart[];
  addDrugToCart: (drug: Drug) => void;
  deleteDrugFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
};

export const useCart = createWithEqualityFn<useCart>()((set) => {
  const storedDrugs = localStorage.getItem("cartDrugs");
  const initialDrugs = storedDrugs ? JSON.parse(storedDrugs) : [];

  return {
    drugs: initialDrugs,
    loading: false,
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
  };
}, shallow);
