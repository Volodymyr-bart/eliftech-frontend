import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Shop } from "../../interface";
import { URL_SERVER } from "../../common/common";
import Loading from "../../components/Loading/Loading";
import { Typography } from "antd";

const Shops = () => {
  const { id } = useParams();

  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getShops = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${URL_SERVER}/shops`);
        setShops(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getShops();
  }, []);

  return (
    <main
      style={{
        marginTop: "50px",
        display: "flex",
        gap: "50px",
        padding: "20px",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <aside
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            minWidth: "250px",
            textAlign: "center",
          }}
        >
          <Typography.Title level={2}>Shops</Typography.Title>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {shops.map((shop) => (
              <li key={shop._id}>
                <button className={id === shop._id ? "active-shop" : ""}>
                  <Link to={shop._id}>{shop.title}</Link>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
      <Outlet />
    </main>
  );
};

export default Shops;
