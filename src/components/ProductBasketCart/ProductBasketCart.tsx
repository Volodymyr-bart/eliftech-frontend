import Notiflix from "notiflix";
import { DrugCart } from "../../interface";
import { useCart } from "../../store/cartStore";
import { Button } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

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
    <li style={{ display: "flex", gap: "20px" }}>
      <img
        style={{ width: "100px", height: "100px" }}
        src={drug.image}
        alt={drug.title}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h4 style={{ height: "48px", overflow: "hidden" }}>{drug.title}</h4>
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <span>{drug.price} грн</span>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Button onClick={() => incrementQuantity(drug._id)}>
              <PlusOutlined />
            </Button>
            <span>{drug.quantity}</span>
            <Button
              onClick={() => decrementQuantity(drug._id)}
              disabled={drug.quantity === 1}
            >
              <MinusOutlined />
            </Button>
          </div>
          <div>{drug.quantity * drug.price} грн</div>
        </div>
      </div>
      <Button
        style={{ marginLeft: "auto" }}
        type="primary"
        htmlType="button"
        onClick={() => {
          Notiflix.Notify.warning(`Product ${drug.title} deleted`);
          deleteDrugFromCart(drug._id);
        }}
      >
        <DeleteOutlined />
      </Button>
    </li>
  );
};

export default ProductBasketCart;
