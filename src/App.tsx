import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shops from "./pages/Shops/Shops";
import ShopDrugs from "./components/ShopDrugs/ShopDrugs";
import { ConfigProvider } from "antd";
import History from "./pages/History/History";
import BasketNew from "./pages/Basket/BasketNew";
import Welcome from "./components/Welcome/Welcome";
import WelcomeToShops from "./components/WelcomeToShops/WelcomeToShops";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Use currentPath for further logic or display
  console.log("Current URL pathname:", currentPath);
  useEffect(() => {
    navigate(`${currentPath}`);
  }, [currentPath, navigate]);

  return (
    <ConfigProvider theme={{}}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route path="shops" element={<Shops />}>
            <Route index element={<WelcomeToShops />} />
            <Route path=":id" element={<ShopDrugs />} />
          </Route>
          <Route path="shoping-cart" element={<BasketNew />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
