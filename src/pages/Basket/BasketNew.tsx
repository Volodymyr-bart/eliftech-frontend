import Notiflix from "notiflix";
import BasketProducts from "../../components/BasketProducts/BasketProducts";
import { DrugCart } from "../../interface";
import { useCart } from "../../store/cartStore";
import { Button, Form, Input, Typography } from "antd";
import Empty from "./../../assets/shopping-basket.png";
import { URL_SERVER } from "../../common/common";
import axios from "axios";

const initialValues = { name: "", email: "", phone: "", address: "" };
const BasketNew = () => {
  const [form] = Form.useForm();
  const { drugs, clearCart } = useCart((state) => ({
    drugs: state.drugs,
    clearCart: state.clearCart,
  }));

  const calculateTotalPrice = (drugs: DrugCart[]) => {
    return drugs.reduce((acc, drug) => acc + drug.price * drug.quantity, 0);
  };
  const onFinish = async (data: typeof initialValues) => {
    const dataOrder = {
      ...data,
      drugs,
    };
    console.log(dataOrder);
    try {
      await axios.post(`${URL_SERVER}/orders`, dataOrder);
      Notiflix.Notify.success("Order Send");
      clearCart();
    } catch (error) {
      Notiflix.Notify.warning("Error");
      console.log(error);
    }
  };
  const isBasketEmpty = (drugs: DrugCart[]) => {
    return !(drugs.length > 0);
  };

  return (
    <>
      {isBasketEmpty(drugs) ? (
        <main
          style={{
            padding: "50px 30px",
            margin: "auto",
          }}
        >
          <img src={Empty} width={200} height={200} alt="Empty" />
        </main>
      ) : (
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px 30px",
          }}
        >
          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
              }}
            >
              <Form
                initialValues={initialValues}
                form={form}
                onFinish={onFinish}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", gap: "50px" }}>
                  <div>
                    <Typography.Title>Enter Your information</Typography.Title>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        { required: true, message: "Please select the name!" },
                      ]}
                    >
                      <Input type="text" placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: "Please select the email!" },
                      ]}
                    >
                      <Input type="email" placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item
                      label="Phone"
                      name="phone"
                      rules={[
                        { required: true, message: "Please select the phone!" },
                      ]}
                    >
                      <Input type="phone" placeholder="Enter your phone" />
                    </Form.Item>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please select the address!",
                        },
                      ]}
                    >
                      <Input type="text" placeholder="Enter your address" />
                    </Form.Item>
                  </div>
                  <BasketProducts />
                </div>
                <Form.Item style={{ marginLeft: "auto" }}>
                  <div
                    style={{
                      marginTop: "50px",
                      marginLeft: "auto",
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <span>Total Price: {calculateTotalPrice(drugs)}грн</span>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default BasketNew;
