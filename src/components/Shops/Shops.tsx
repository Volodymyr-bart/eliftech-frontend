import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Shop } from "../../interface";
import { URL_SERVER } from "../../common/common";
import Loading from "../Loading/Loading";

const Shops = () => {
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
    <main style={{ display: "flex", gap: "50px" }}>
      {loading ? (
        <Loading />
      ) : (
        <aside>
          <h3>Shops</h3>
          <ul>
            {shops.map((shop) => (
              <li key={shop._id}>
                <Link to={shop._id}>{shop.title}</Link>
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
