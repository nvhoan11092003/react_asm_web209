import TextArea from "antd/es/input/TextArea";
import { IProduct } from "../../../models/type";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: IProduct) => {
    const newProduct = {
      id: values.id,
      name: values.name,
      price: values.price,
      description: values.description,
      image: values.image,
    };
    props.onAdd(newProduct);
    navigate("/admin/products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginTop: 20, marginBottom: 50, color: "black" }}>
        Add New Product
      </h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { whitespace: true },
            { min: 6, max: 255 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            { required: true, message: "Please input your price!" },
            { whitespace: true },
            { min: 1 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="desc"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>

        <Form.Item className="form-group mb-3" label="Product Image">
          <Input
            type="file"
            id="image"
            className="form-control"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
