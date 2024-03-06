import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        <NavLink to={"/shops"}>Shops</NavLink>
        <NavLink to={"/shoping-cart"}>Shoping Cart</NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
