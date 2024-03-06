import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Drug } from "../../interface";
import { URL_SERVER } from "../../common/common";
import Loading from "../Loading/Loading";
import ProductCart from "../ProductCart/ProductCart";
import Filters from "../Filters/Filters";

const ShopDrugs = () => {
  const { id } = useParams();
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDrugsFromShop = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${URL_SERVER}/drugs/drugsFromShop/${id}`
        );
        setDrugs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDrugsFromShop();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Filters />
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {drugs.map((drug: Drug) => (
              <ProductCart key={drug._id} drug={drug} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShopDrugs;
{
  /* <Row gutter={[16, 16]}>
{drugs.map((drug: Drug) => (
  <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} key={drug._id}>
    <ProductCart key={drug._id} drug={drug} />
  </Col>
))}
</Row> */
}
