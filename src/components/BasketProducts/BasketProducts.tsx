import { useCart } from "../../store/cartStore";
import ProductBasketCart from "../ProductBasketCart/ProductBasketCart";

const BasketProducts = () => {
  const { drugs } = useCart((state) => ({
    drugs: state.drugs,
    deleteDrugFromCart: state.deleteDrugFromCart,
  }));
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {drugs.map((drug) => (
        <ProductBasketCart key={drug._id} drug={drug} />
      ))}
    </ul>
  );
};

export default BasketProducts;
