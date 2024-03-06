import { Drug } from "../../interface";
import { useCart } from "../../store/cartStore";

interface ProductCartProps {
  drug: Drug;
}
const ProductCart = ({ drug }: ProductCartProps) => {
  const { addDrugToCart } = useCart((state) => ({
    addDrugToCart: state.addDrugToCart,
  }));
  return (
    <li
      style={{
        width: "250px",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <img
        style={{ width: "200px", height: "200px" }}
        src={drug.image}
        alt={drug.title}
      />
      <h4 style={{ height: "32px", overflow: "hidden" }}>{drug.title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{drug.price} грн</span>
        <button onClick={() => addDrugToCart(drug)}>Додати</button>
      </div>
    </li>
  );
};

export default ProductCart;
