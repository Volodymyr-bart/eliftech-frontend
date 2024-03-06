import { DrugCart } from "../../interface";
import { useCart } from "../../store/cartStore";

const ProductBasketCart = ({ drug }: { drug: DrugCart }) => {
  const { deleteDrugFromCart, incrementQuantity, decrementQuantity } = useCart(
    (state) => ({
      drugs: state.drugs,
      incrementQuantity: state.incrementQuantity,
      deleteDrugFromCart: state.deleteDrugFromCart,
      decrementQuantity: state.decrementQuantity,
    })
  );

  return (
    <li style={{ display: "flex" }}>
      <img
        style={{ width: "100px", height: "100px" }}
        src={drug.image}
        alt={drug.title}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h4 style={{ height: "32px", overflow: "hidden" }}>{drug.title}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{drug.price} грн</span>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <button onClick={() => incrementQuantity(drug._id)}>+</button>
            <span>{drug.quantity}</span>
            <button onClick={() => decrementQuantity(drug._id)}>-</button>
          </div>
          <button onClick={() => deleteDrugFromCart(drug._id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ProductBasketCart;
