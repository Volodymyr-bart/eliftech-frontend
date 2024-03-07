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
          style={{ width: "150px" }}
          value={filters.filter}
          onChange={(e) => handleSelectChange(e, "filter")}
        >
          <Option value="new">First new</Option>
          <Option value="old">First old</Option>
          <Option value="expensive">First expensive</Option>
          <Option value="cheap">First cheap</Option>
          <Option value="A-Z">A-Z</Option>
          <Option value="Z-A">Z-A</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default Filters;
