import { Button, Form, Input } from "antd";
import { URL_SERVER } from "../../common/common";
import axios from "axios";
import Notiflix from "notiflix";
import { useState } from "react";
import OrdersHistory from "../../components/OrdersHistory/OrdersHistory";

const initialValues = {
  email: "",
  phone: "",
};

const History = () => {
  const [orders, setOrders] = useState([]);
  const [form] = Form.useForm();

  const onFinish = async (data: typeof initialValues) => {
    try {
      const { email, phone } = data;
      const queryParams = new URLSearchParams({
        email,
        phone,
      });
      const res = await axios.get(`${URL_SERVER}/orders?${queryParams}`);
      setOrders(res.data);
    } catch (error) {
      Notiflix.Notify.warning("Error");
      console.log(error);
    }
  };

  return (
    <main
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        padding: "50px 30px",
      }}
    >
      <div style={{ display: "flex", gap: "50px" }}>
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
      </div>
      <div>
        <OrdersHistory orders={orders} />
      </div>
    </main>
  );
};

export default History;
