import axios from "axios";
import { URL_SERVER } from "../common/common";
import { getAllDrugsProps } from "../interface";

axios.defaults.url = URL_SERVER;
export const getAllDrugs = async ({
  keyword,
  byABC,
  byPrice,
}: getAllDrugsProps) => {
  try {
    const queryParams = new URLSearchParams({
      keyword,
      byABC: byABC.toString(),
      byPrice: byPrice.toString(),
    });
    const { data } = await axios.get(`/drugs?${queryParams}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
