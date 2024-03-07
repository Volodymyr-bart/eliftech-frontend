/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Typography } from "antd";
import { useCart } from "../../store/cartStore";

const FormOrder = () => {
  const [form] = Form.useForm();
  const { name, email, phone, address, setField } = useCart((state) => ({
    name: state.name,
    email: state.email,
    phone: state.phone,
    address: state.address,
    setField: state.setField,
  }));

  const onChange = (data: any) => {
    setField(data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Title>Enter Your information</Typography.Title>
      <Form
        initialValues={{ name, email, phone, address }}
        onValuesChange={onChange}
        form={form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please select the name!" }]}
        >
          <Input type="text" placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please select the email!" }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please select the phone!" }]}
        >
          <Input type="phone" placeholder="Enter your phone" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please select the address!" }]}
        >
          <Input type="text" placeholder="Enter your address" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormOrder;
