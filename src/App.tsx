import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shops from "./pages/Shops/Shops";
import ShopDrugs from "./components/ShopDrugs/ShopDrugs";
import { ConfigProvider } from "antd";
import History from "./pages/History/History";
import BasketNew from "./pages/Basket/BasketNew";
import Welcome from "./components/Welcome/Welcome";
import WelcomeToShops from "./components/WelcomeToShops/WelcomeToShops";

function App() {
  return (
    <ConfigProvider theme={{}}>
      <Routes>
        <SharedLayout>
          <Route path="/" element={<Welcome />} />
          <Route path="/shops" element={<Shops />}>
            <Route index element={<WelcomeToShops />} />
            <Route path=":id" element={<ShopDrugs />} />
          </Route>
          <Route path="/shoping-cart" element={<BasketNew />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </SharedLayout>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
