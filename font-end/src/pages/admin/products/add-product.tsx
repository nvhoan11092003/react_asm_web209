import TextArea from "antd/es/input/TextArea";
import { ICategory, IProduct } from "../../../models/type";
import { Form, Input, Button, Upload, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
import { getAllCategory } from "../../../api/category";
interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loadings, setLoadings] = useState<boolean>();
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
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const beforeUpload = () => {
    return false;
  };



  const onSubmit = async (data: any) => {
    setLoadings(true)
    let newurls = []
    if (data.images.fileList) {
      newurls = await Promise.all(data.images.fileList.map(async (item: any) => {
        const formData = new FormData();
        formData.append("image", item.originFileObj);
        const API_key = "42d2b4a414af48bbc306d6456dd1f943"
        const apiResponse: any = await axios.post(
          `https://api.imgbb.com/1/upload?key=${API_key}`,
          formData
        );
        return apiResponse.data.data.url
      }))
    }
    console.log(newurls);
    const newProduct: IProduct = {
      name: data.name,
      categoryId: data.CategoryID,
      imgUrl: newurls,
      price: data.Price,
      originPrice: data.originPrice,
      processingInstructions: data.processingInstructions,
      storageInstructions: data.storageInstructions,
      description: data.description,
    };
    console.log(newProduct);
    props.onAdd(newProduct)
    alert("Thêm sản phẩm thành công");
    navigate("/admin/products");
  }


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
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            { required: true, },
            { whitespace: true },
            { min: 6, max: 255 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="CategoryID"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <Select id="" >
            {categories?.map((Category) => {
              return <Select.Option key={Category._id} value={Category._id}>{Category.name}</Select.Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Product Price"
          name="Price"
          rules={[
            { required: true, min: 1, max: 100000000, pattern: new RegExp(/^[0-9]+$/), message: "Price is not valid number" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="origin Price"
          name="originPrice"

          rules={[
            { required: true, min: 1, max: 100000000, pattern: new RegExp(/^[0-9]+$/), message: "originPrice is not valid number" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="processingInstructions"
          name="processingInstructions"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="storageInstructions"
          name="storageInstructions"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Ảnh sản phẩm"
          name="images"
          wrapperCol={{ offset: 3, span: 16 }}
          rules={[{ required: true, message: "Vui lòng chọn ảnh sản phẩm" }]}
        >
          <Upload accept="image/*" listType="picture-circle" multiple beforeUpload={beforeUpload} maxCount={5}>
            <Button icon={<UploadOutlined />} block >
              Chọn ảnh
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" loading={loadings} className="bg-blue-500" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
