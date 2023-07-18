import { useEffect, useState } from "react";
import { IProduct } from "../../../models/type";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

interface IProps {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}

const UpdateProduct = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const currentProduct = props.products.find(
      (product: IProduct) => product._id == String(id)
    );
    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    setFields();
  }, [product]);

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      categoryId: product?.categoryId,
      name: product?.name,
      price: product?.price,
      description: product?.description,
      image: product?.image,
    });
  };

  const onFinish = (values: any) => {
    props.onUpdate(values);
    navigate("/admin/products");
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginBottom: 50, marginTop: 20, color: "black" }}>
        Update Product
      </h3>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
      >
        <Form.Item
          label=""
          name="id"
          style={{ display: "none" }}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CategoryID"
          name="categoryId"
          rules={[{ required: true, message: "Please input your categoryId!" }]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Please input your username!" },
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
            { required: true, message: "Please input your password!" },
            { whitespace: true },
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
            { whitespace: true },
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
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
