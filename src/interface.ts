export interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export type Drug = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  createdAt: string;
  shop: string[];
};

export type DrugCart = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  createdAt: string;
  shop: string[];
  quantity: number;
};

export type Order = {
  _id: string;
  shop: Shop;
  phone: string;
  email: string;
  drugs: DrugCart[];
  createdAt: Date;
};

export type Shop = {
  _id: string;
  title: string;
  address: string;
  orders: string[];
};
export interface getAllDrugsProps {
  keyword: string;
  byABC: boolean;
  byPrice: boolean;
  byDate: boolean;
}
// export interface DataTypeSelect {
//   key: string;
//   value: string;
//   label: string;
// }
