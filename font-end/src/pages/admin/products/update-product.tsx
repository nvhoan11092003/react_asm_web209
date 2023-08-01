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
    const currentProduct = props.products.find((product) => product._id == id);
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
      categoryId: product?.categoryId.name,
      name: product?.name,
      price: product?.price,
      originPrice: product?.originPrice,
      processingInstructions: product?.processingInstructions,
      storageInstructions: product?.storageInstructions,
      description: product?.description,
      imgUrl: product?.imgUrl,
    });
    // console.log(product?.categoryId._id);
    
  };
  // console.log(product?.categoryId);

  const onFinish = (values: any) => {
    props.onUpdate(values);
    console.log(values);
    alert("Cập nhật sản phẩm thành công");
    navigate("/admin/products");
  };

  const onFinishFailed = (values: any) => {
    console.log("errors", values);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    }
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
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
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
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please input your categoryId!" }]}
          hasFeedback
        >
          <Select id="categoryId">
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
