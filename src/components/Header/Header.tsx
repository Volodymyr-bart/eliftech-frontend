import { NavLink } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;
const HeaderApp = () => {
  return (
    <Header>
      <NavLink to={"/shops"}>Shops</NavLink>
      <NavLink to={"/shoping-cart"}>Shoping Cart</NavLink>
      <NavLink to={"/history"}>History</NavLink>
    </Header>
  );
};

export default HeaderApp;
