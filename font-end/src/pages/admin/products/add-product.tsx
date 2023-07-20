import TextArea from "antd/es/input/TextArea";
import { ICategory, IProduct } from "../../../models/type";
import { Form, Input, Button, Upload, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getAllCategory } from "../../../api/category";

// interface IProps {
//   onAdd: (product: IProduct) => void;

// }

// const AddProduct = (props: IProps) => {
//   const navigate = useNavigate();
//   const onFinish = (values: IProduct) => {
//     const newProduct = {
//       id: values.id,
//       name: values.name,
//       price: values.price,
//       description: values.description,
//       image: values.image,
//     };
//     props.onAdd(newProduct);
//     navigate("/admin/products");
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const navigate = useNavigate();
  console.log(props);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [imgUrls, setImgUrls] = useState<string[]>([]);

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
  const onSubmit = async (data: any) => {
    console.log(data);

    try {
      // Prepare form data
      const formData = new FormData();
      const imageFiles = data.images;
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("img", imageFiles[i]);
      }

      // call api backend
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );


      // kiểm tra nếu thành công
      if (response.status === 200) {
        const linkUrl = response.data.imgUrl;
        console.log(linkUrl);

        // link ảnh khi được server trả về thành công
        // console.log(linkUrl);

        setImgUrls(linkUrl);

        const newProduct: IProduct = {
          name: data.productName,
          categoryId: data.categoryId,
          imgUrl: linkUrl,
          price: data.price,
          originPrice: data.originPrice,
          processingInstructions: data.processingInstructions,
          storageInstructions: data.storageInstructions,
          description: data.description,
        };

        props.onAdd(newProduct);
        alert("thêm thành công sản phẩm");
        navigate("/admin/products");
        // Đặt lại biểu mẫu sau khi gửi thành công

      } else {
        console.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
          name="Category"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <Select id="">
            {categories?.map((cate) => {
              return <option value={cate._id}>{cate.name}</option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="Product Price"
          rules={[
            { required: true, min: 1, max: 100000000, },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="origin Price"
          name="origin Price"

          rules={[
            { required: true, min: 1, max: 100000000, },
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
          name="desc"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>


        {/* <Form.Item
          className="form-group mb-3"
          label="Product Image"
          id="image"
          name="images"
          rules={[
            { required: true, type: "url" },
          ]}
        >
          <Input
            type="file"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </Form.Item> */}

        <Upload beforeUpload={handleUpload}
          listType="picture" multiple
        >

          <Button name="images" icon={<UploadOutlined />}>Chọn ảnh</Button>
        </Upload>

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
