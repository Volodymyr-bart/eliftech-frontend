import axios from "axios";
import { URL_SERVER } from "../common/common";
import { getAllDrugsProps } from "../interface";

export const getAllDrugs = async ({
  keyword,
  byABC,
  byPrice,
  byDate,
}: getAllDrugsProps) => {
  try {
    const queryParams = new URLSearchParams({
      keyword,
      byABC: byABC.toString(),
      byPrice: byPrice.toString(),
      byDate: byDate.toString(),
    });
    const { data } = await axios.get(`${URL_SERVER}/drugs?${queryParams}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getDrugsFromShop = async ({
  id,
  keyword,
  filter,
}: {
  id: string;
  keyword: string;
  filter: string;
}) => {
  try {
    const queryParams = new URLSearchParams({
      keyword,
      filter,
    });
    const { data } = await axios.get(
      `${URL_SERVER}/drugs/drugsFromShop/${id}?${queryParams}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const sendOrderToShop = async (data: any) => {
  try {
    const res = await axios.post(`${URL_SERVER}/orders`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};
