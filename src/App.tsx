import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shops from "./pages/Shops/Shops";
import ShopDrugs from "./components/ShopDrugs/ShopDrugs";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="shops" element={<Shops />}>
          <Route path=":id" element={<ShopDrugs />} />
        </Route>
        <Route path="shoping-cart" element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
