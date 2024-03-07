import Notiflix from "notiflix";
import { Drug } from "../../interface";
import { useCart } from "../../store/cartStore";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

interface ProductCartProps {
  drug: Drug;
}
const ProductCart = ({ drug }: ProductCartProps) => {
  const { favorites, addDrugToCart, toggleFavoriteDrug } = useCart((state) => ({
    drugs: state.drugs,
    addDrugToCart: state.addDrugToCart,
    toggleFavoriteDrug: state.toggleFavoriteDrug,
    favorites: state.favorites,
  }));
  const isFavorite = favorites.some((favDrug) => favDrug._id === drug._id);
  return (
    <li
      style={{
        width: "250px",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
      }}
    >
      <img
        src={drug.image}
        alt={drug.title}
        style={{
          width: "100%",
          height: "300px",
          display: "block",
          margin: "0 auto",
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
      <h4 style={{ height: "60px", overflow: "hidden" }}>{drug.title}</h4>
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
      <HeartOutlined
        onClick={() => toggleFavoriteDrug(drug)}
        className={`heart ${isFavorite ? "favorite" : ""}`}
      />
    </li>
  );
};

export default ProductCart;
