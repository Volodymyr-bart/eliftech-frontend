import FormInfoUserOrders from "../../components/FormInfoUserOrders/FormInfoUserOrders";

const History = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "50px 30px",
      }}
    >
      <div style={{ display: "flex", gap: "50px" }}>
        <FormInfoUserOrders />
        {/* <BasketProducts /> */}
      </div>
    </main>
  );
};

export default History;
