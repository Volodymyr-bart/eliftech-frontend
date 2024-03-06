export type Drug = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  createdAt: string;
};

export type Order = {
  _id: string;
  shop: Shop;
  phone: string;
  email: string;
  products: { drug: Drug; quantity: number }[];
  createdAt: Date;
};

export type Shop = {
  _id: string;
  title: string;
  address: string;
  drugs: string[];
  orders: string[];
};
