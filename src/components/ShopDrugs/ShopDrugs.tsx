import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import { useDrugs } from "../../store/productsStore";
import ProductCart from "../ProductCart/ProductCart";
import { Drug } from "../../interface";

const ShopDrugs = () => {
  const { id } = useParams();
  const { drugs, getAlldrugs, loading, filters } = useDrugs((state) => ({
    drugs: state.drugs,
    loading: state.loading,
    filters: state.filters,
    getAlldrugs: state.getAlldrugs,
  }));

  useEffect(() => {
    if (id) {
      getAlldrugs(id);
    }
  }, [id, getAlldrugs, filters]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Filters />
        {loading ? (
          <Loading />
        ) : (
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {drugs.map((drug: Drug) => (
              <ProductCart key={drug._id} drug={drug} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ShopDrugs;
