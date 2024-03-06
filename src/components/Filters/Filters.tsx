import { Form, Input, Select } from "antd";
import { ChangeEvent } from "react";
import { useDrugs } from "../../store/productsStore";
const { Option } = Select;
const Filters = () => {
  const { filters, setFilters } = useDrugs((state) => ({
    filters: state.filters,
    setFilters: state.setFilters,
  }));

  const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ keyword: e.target.value });
  };

  const handleSelectChange = (value: string, name: string) => {
    setFilters({ [name]: value });
  };

  return (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <Form.Item>
        <Input type="text" value={filters.keyword} onChange={handleSetInput} />
      </Form.Item>
      <Form.Item>
        <Select
          style={{ width: "100px" }}
          value={filters.byPrice}
          onChange={(e) => handleSelectChange(e, "byPrice")}
        >
          <Option value="true">To Hight</Option>
          <Option value="false">To low</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Select
          style={{ width: "150px" }}
          value={filters.byDate}
          onChange={(e) => handleSelectChange(e, "byDate")}
        >
          <Option value="true">First new</Option>
          <Option value="false">First old</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default Filters;
