import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Drug, getAllDrugsProps } from "../interface";
import { getAllDrugs } from "../service";

type useDrugs = {
  loading: boolean;
  drugs: Drug[];
  filters: {
    keyword: string;
    byABC: string;
    byPrice: string;
    byDate: string;
  };
  getAlldrugs: (params: getAllDrugsProps) => Promise<void>;
  setFilters: (newFilters: Partial<useDrugs["filters"]>) => void;
};

export const useDrugs = createWithEqualityFn<useDrugs>()(
  (set) => ({
    drugs: [],
    loading: false,
    filters: {
      keyword: "",
      byDate: "true",
      byABC: "true",
      byPrice: "true",
    },
    getAlldrugs: async ({
      keyword = "",
      byABC = true,
      byDate = true,
      byPrice = true,
    }) => {
      set({ loading: true });
      const res = await getAllDrugs({
        keyword,
        byABC,
        byPrice,
        byDate,
      });
      set({
        drugs: res.results,
        loading: false,
      });
    },

    setFilters: (newFilters) =>
      set((state) => ({ filters: { ...state.filters, ...newFilters } })),
  }),
  shallow
);
