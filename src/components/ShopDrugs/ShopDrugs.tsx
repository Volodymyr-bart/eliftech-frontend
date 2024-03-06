import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Drug } from "../../interface";
import { URL_SERVER } from "../../common/common";
import Loading from "../Loading/Loading";

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
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {drugs.map((drug) => (
            <li key={drug._id} style={{ width: "200px", overflow: "hidden" }}>
              <img
                style={{ width: "200px", height: "200px" }}
                src={drug.image}
                alt={drug.title}
              />
              <h4>{drug.title}</h4>
              <span>{drug.description}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShopDrugs;
