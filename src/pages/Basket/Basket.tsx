import Notiflix from "notiflix";
import BasketProducts from "../../components/BasketProducts/BasketProducts";
import FormOrder from "../../components/FormOrder/FormOrder";
import { DrugCart } from "../../interface";
import { useCart } from "../../store/cartStore";

const Basket = () => {
  const { drugs, sendOrder } = useCart((state) => ({
    drugs: state.drugs,
    sendOrder: state.sendOrder,
  }));

  const calculateTotalPrice = (drugs: DrugCart[]) => {
    return drugs.reduce((acc, drug) => acc + drug.price * drug.quantity, 0);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "50px 30px",
      }}
    >
      <div style={{ display: "flex", gap: "50px" }}>
        <FormOrder />
        <BasketProducts />
      </div>
      {drugs.length ? (
        <div
          style={{
            marginTop: "50px",
            marginLeft: "auto",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span>Total Price: {calculateTotalPrice(drugs)}грн</span>
          <button
            onClick={() => {
              sendOrder();
              Notiflix.Notify.success("Order Send");
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Basket;
