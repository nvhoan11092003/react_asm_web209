import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../../../models/type";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getAllCategory } from "../../../api/category";

interface IProps {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}

const UpdateProduct = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const currentProduct = props.products.find((product) => product._id === id);
    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
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
      originPrice: product?.originPrice,
      processingInstructions: product?.processingInstructions,
      storageInstructions: product?.storageInstructions,
      description: product?.description,
      image: product?.imgUrl,
    });
  };
  // console.log(product?.categoryId);

  const onFinish = (values: any) => {
    props.onUpdate(values);
    console.log(values);
    alert("Cập nhật sản phẩm thành công");
    navigate("/admin/products");
  };

  const onFinishfail = (values: any) => {
    console.log("valid : ", values.errorFields[0], values);
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
        onFinishFailed={onFinishfail}
      >
        <Form.Item
          label=""
          name="_id"
          style={{ display: "none" }}
          rules={[{ required: true, message: "Please input your id!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CategoryID"
          name="categoryId"
          rules={[{ required: true, message: "Please input your categoryId!" }]}
          hasFeedback
        >
          <Select id="">
            {categories?.map((cate) => {
              return <option value={cate._id}>{cate.name}</option>;
            })}
          </Select>
        </Form.Item>

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
          rules={[{ required: true, message: "Please input your price!" }]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="OriginPrice"
          name="originPrice"
          rules={[
            { required: true, message: "Please input your originPrice!" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ProcessingInstructions"
          name="processingInstructions"
          rules={[
            {
              required: true,
              message: "Please input your processingInstructions!",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="StorageInstructions"
          name="storageInstructions"
          rules={[
            {
              required: true,
              message: "Please input your storageInstructions!",
            },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <TextArea />
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
