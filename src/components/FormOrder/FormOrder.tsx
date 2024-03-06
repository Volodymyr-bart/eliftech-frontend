import { Input } from "antd";


const FormOrder = () => {

  return (
    <div>
      <label>Name</label>
      <Input type="text" placeholder="Enter your name" />
      <label>email</label>
      <Input type="email" placeholder="Enter your email" />
      <label>phone</label>
      <Input type="phone" placeholder="Enter your phone" />
      <label>address</label>
      <Input type="text" placeholder="Enter your address" />
    </div>
  );
};

export default FormOrder;
