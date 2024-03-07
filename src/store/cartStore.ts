import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Drug, DrugCart } from "../interface";
import { sendOrderToShop } from "../service";

type useCart = {
  name: string;
  email: string;
  phone: string;
  address: string;
  loading: boolean;
  drugs: DrugCart[];
  addDrugToCart: (drug: Drug) => void;
  deleteDrugFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  setField: (fields: Partial<useCart>) => void;
  sendOrder: () => Promise<void>;
};

export const useCart = createWithEqualityFn<useCart>()((set) => {
  const storedDrugs = localStorage.getItem("cartDrugs");
  const initialDrugs = storedDrugs ? JSON.parse(storedDrugs) : [];

  return {
    name: "",
    email: "",
    phone: "",
    address: "",
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
    setField: (obj) => {
      set((state) => ({ ...state, ...obj }));
    },
    sendOrder: async () => {
      const currentState = useCart.getState();
      try {
        await sendOrderToShop({
          name: currentState.name,
          email: currentState.email,
          phone: currentState.address,
          drugs: currentState.drugs,
        });
        set({
          name: "",
          email: "",
          phone: "",
          address: "",
          drugs: [],
        });
      } catch (error) {
        console.log(error);
      }
    },
  };
}, shallow);
