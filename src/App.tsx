import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shops from "./components/Shops/Shops";
import ShopDrugs from "./components/ShopDrugs/ShopDrugs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="shops" element={<Shops />}>
          <Route path=":id" element={<ShopDrugs />} />
        </Route>
        <Route path="shoping-cart" element={<>Cart</>} />
      </Route>
    </Routes>
  );
}

export default App;
