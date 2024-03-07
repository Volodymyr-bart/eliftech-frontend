import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Drug } from "../interface";
import { getDrugsFromShop } from "../service";

type useDrugs = {
  loading: boolean;
  drugs: Drug[];
  filters: {
    keyword: string;
    // byABC: string;
    // byPrice: string;
    // byDate: string;
    filter: string;
  };
  getAlldrugs: (id: string) => Promise<void>;
  setFilters: (newFilters: Partial<useDrugs["filters"]>) => void;
};

export const useDrugs = createWithEqualityFn<useDrugs>()(
  (set) => ({
    drugs: [],
    loading: false,
    filters: {
      keyword: "",
      filter: "A-Z",
    },
    getAlldrugs: async (id: string) => {
      set({ loading: true });
      const currentState = useDrugs.getState();

      const data = {
        id,
        keyword: currentState.filters.keyword,
        filter: currentState.filters.filter,
      };

      const res = await getDrugsFromShop(data);
      set({
        drugs: res,
        loading: false,
      });
    },

    setFilters: (newFilters) =>
      set((state) => ({ filters: { ...state.filters, ...newFilters } })),
  }),
  shallow
);
