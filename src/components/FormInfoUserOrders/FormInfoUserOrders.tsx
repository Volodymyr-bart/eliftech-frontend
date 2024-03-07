import { Button, Form, Input } from "antd";
const initialValues = {
  email: "",
  phone: "",
};
const FormInfoUserOrders = () => {
  const [form] = Form.useForm();
  const onFinish = (e: typeof initialValues) => {
    console.log("e", e);
  };

  return (
    <Form initialValues={initialValues} onFinish={onFinish} form={form}>
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInfoUserOrders;
