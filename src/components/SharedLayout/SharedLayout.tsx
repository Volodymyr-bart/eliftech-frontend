import { Outlet } from "react-router-dom";
import HeaderApp from "../Header/Header";
import { Footer } from "antd/es/layout/layout";
import { Layout, Typography } from "antd";

const SharedLayout = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderApp />
        <Outlet />
        <Footer style={{ textAlign: "center", marginTop: "auto" }}>
          <Typography.Text>
            ©Volodymyr Bortokhov {new Date().getFullYear()}
          </Typography.Text>
        </Footer>
      </Layout>
    </>
  );
};

export default SharedLayout;
