import BasketProducts from "../../components/BasketProducts/BasketProducts";
import FormOrder from "../../components/FormOrder/FormOrder";
import { DrugCart } from "../../interface";
import { useCart } from "../../store/cartStore";

const Basket = () => {
  const { drugs } = useCart((state) => ({
    drugs: state.drugs,
  }));

  const calculateTotalPrice = (drugs: DrugCart[]) => {
    return drugs.reduce((acc, drug) => acc + drug.price * drug.quantity, 0);
  };

  const sendOrder = () => {
    console.log("Click");
  };
  return (
    <main
      style={{ marginTop: "50px", display: "flex", flexDirection: "column" }}
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
          <button onClick={sendOrder}>Submit</button>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Basket;
