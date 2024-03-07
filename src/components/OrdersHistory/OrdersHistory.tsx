import { DrugCart, Order } from "../../interface";

interface OrdersHistoryProps {
  orders: Order[];
}
const OrdersHistory = ({ orders }: OrdersHistoryProps) => {
  const calculateTotalPrice = (drugs: DrugCart[]) => {
    return drugs.reduce((acc, drug) => acc + drug.price * drug.quantity, 0);
  };
  return (
    <ul>
      {orders.map((order) => (
        <li
          key={order._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <ul style={{ listStyle: "inside" }}>
            {order.drugs.map((drug) => (
              <li key={drug._id}>{drug.title}</li>
            ))}
          </ul>
          <div>Total price {calculateTotalPrice(order.drugs)} грн</div>
        </li>
      ))}
    </ul>
  );
};

export default OrdersHistory;
