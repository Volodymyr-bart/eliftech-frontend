import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shops from "./pages/Shops/Shops";
import ShopDrugs from "./components/ShopDrugs/ShopDrugs";
import { ConfigProvider } from "antd";
import History from "./pages/History/History";
import BasketNew from "./pages/Basket/BasketNew";

function App() {
  return (
    <ConfigProvider theme={{}}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="shops" element={<Shops />}>
            <Route path=":id" element={<ShopDrugs />} />
          </Route>
          <Route path="shoping-cart" element={<BasketNew />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
