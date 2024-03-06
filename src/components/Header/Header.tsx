import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        margin: "0 auto",
        gap: "20px",
        padding: "10px 20px",
        backgroundColor: "aqua",
      }}
    >
      <NavLink to={"/shops"}>Shops</NavLink>
      <NavLink to={"/shoping-cart"}>Shoping Cart</NavLink>
    </header>
  );
};

export default Header;
