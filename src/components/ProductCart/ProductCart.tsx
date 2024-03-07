import Notiflix from "notiflix";
import { Drug } from "../../interface";
import { useCart } from "../../store/cartStore";
import { Button } from "antd";

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
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            addDrugToCart(drug);
            Notiflix.Notify.success(`Product ${drug.title} added`);
          }}
        >
          Додати
        </Button>
      </div>
    </li>
  );
};

export default ProductCart;
